import Head from "next/head";
import styles from "@/styles/Home.module.css";

import useSwr from "swr";
import {
  ArrayFieldDescriptionProps,
  ArrayFieldTemplateProps,
  ArrayFieldTitleProps,
  BaseInputTemplateProps,
  DescriptionFieldProps,
  FieldTemplateProps,
  IconButtonProps,
  ObjectFieldTemplateProps,
  StrictRJSFSchema,
  UiSchema,
  getInputProps,
} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form, { FormProps } from "@rjsf/core";
import { ChangeEvent, useEffect, useState, FocusEvent } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/common/components/Button";
import { Input } from "@/common/components/Input";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Cross1Icon,
  ExitIcon,
  GitHubLogoIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/Select";
import { Label } from "@/common/components/Label";
import { Separator } from "@/common/components/Separator";

import {
  AvatarFallback,
  Avatar,
  AvatarImage,
} from "@/common/components/Avatar";

// const GITHUB_JSON_SCHEMA_URI =
//   "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/source_schema.json";

const GITHUB_ACTIVITY_JSON_SCHEMA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/activity_schema.json";

const GITHUB_SOURCE_API_DATA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/api/sources.json";

const uiSchema: UiSchema = {
  activities: {
    // "ui:widget": "CustomSelect", // could also be "select"
  },
  "ui:submitButtonOptions": {
    norender: true,
    submitText: "Save",
  },
  rotationDuration: {
    "ui:placeholder": "0",
  },
  name: {
    "ui:placeholder": "The Vault of Glass",
    "ui:inputType": "text",
  },
  description: {
    "ui:placeholder": "Beneath Venus, evil stirs…",
  },
  lootSources: {
    items: {
      name: {
        "ui:placeholder": "The Templar",
      },
      description: {
        "ui:placeholder":
          "Drops from defeating The Templar in The Vault of Glass",
      },
      lootItems: {
        items: {
          "ui:placeholder": "2171478765",
        },
      },
    },
  },
  // name: {
  //   "ui:classNames": "bg-neutral-900",
  // },
};

function BaseInputTemplate(props: BaseInputTemplateProps) {
  const {
    schema,
    id,
    options,
    label,
    value,
    type,
    placeholder,
    required,
    disabled,
    readonly,
    autofocus,
    onChange,
    onChangeOverride,
    onBlur,
    onFocus,
    rawErrors,
    hideError,
    uiSchema,
    registry,
    formContext,
    ...rest
  } = props;
  const onTextChange = ({
    target: { value: val },
  }: ChangeEvent<HTMLInputElement>) => {
    // Use the options.emptyValue if it is specified and newVal is also an empty string
    onChange(val === "" ? options.emptyValue || "" : val);
  };
  const onTextBlur = ({
    target: { value: val },
  }: FocusEvent<HTMLInputElement>) => onBlur(id, val);
  const onTextFocus = ({
    target: { value: val },
  }: FocusEvent<HTMLInputElement>) => onFocus(id, val);

  const inputProps = { ...rest, ...getInputProps(schema, type, options) };
  // const hasError = rawErrors.length > 0 && !hideError;
  return (
    <Input
      id={id}
      // label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      // error={hasError}
      // errors={hasError ? rawErrors : undefined}
      onChange={onChangeOverride || onTextChange}
      onBlur={onTextBlur}
      onFocus={onTextFocus}
      {...inputProps}
      // className="bg-black text-white rounded px-4 py-2 border border-solid border-neutral-700 transition hover:bg-neutral-900 hover:border-neutral-300"
    />
  );
}

function AddButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button {...btnProps}>
      <PlusIcon className="mr-2 h-4 w-4" /> Add
    </Button>
  );
}

function DescriptionFieldTemplate(props: DescriptionFieldProps) {
  return null;
  const { description, id } = props;
  return (
    <details id={id}>
      <summary>Description</summary>
      {description}
    </details>
  );
}

function ArrayFieldTitleTemplate(props: ArrayFieldTitleProps) {
  return null;
  // const { description, idSchema } = props;
  // const id = titleId(idSchema);
  // return <h1 id={id}>{title}</h1>;
}

function ArrayFieldDescriptionTemplate(props: ArrayFieldDescriptionProps) {
  return null;
  // const { description, idSchema } = props;
  // const id = descriptionId(idSchema);
  // return (
  //   <details id={id}>
  //     <summary>Description</summary>
  //     {description}
  //   </details>
  // );
}

function CustomFieldTemplate(props: FieldTemplateProps) {
  const {
    id,
    classNames,
    displayLabel,
    style,
    label,
    help,
    required,
    description,
    errors,
    children,
  } = props;
  return (
    <div
      className={`${classNames} grid w-full items-center gap-1 mb-6`}
      style={style}
    >
      {displayLabel ? (
        <>
          <Label htmlFor={id}>
            {label}
            {required ? "*" : null}
          </Label>
          {description ? (
            <p className="text-sm text-neutral-500">{description}</p>
          ) : null}
        </>
      ) : null}
      {children}
      {errors}
      {help}
    </div>
  );
}

function RemoveButton(props: IconButtonProps) {
  const { icon, iconType, ...btnProps } = props;
  return (
    <Button {...btnProps} variant={"destructive"}>
      <Cross1Icon className="h-4 w-4" />
    </Button>
  );
}

function ArrayFieldTemplate({
  className,
  items,
  canAdd,
  title,
  onAddClick,
}: ArrayFieldTemplateProps) {
  return (
    <div className="">
      <h3 className="text-md font-bold tracking-tighter mb-2">{title}</h3>
      <div className="p-4 border rounded bg-neutral-700/20 border-neutral-700">
        {items &&
          items.map((element) => (
            <div key={element.key} className="relative">
              <div>{element.children}</div>
              <div className="absolute top-0 right-0 flex gap-2">
                {element.hasToolbar ? (
                  <>
                    <Button
                      onClick={element.onReorderClick(
                        element.index,
                        element.index - 1
                      )}
                      disabled={!element.hasMoveUp}
                      className="h-8 w-8 p-0"
                      variant={"outline"}
                    >
                      <ArrowUpIcon />
                    </Button>
                    <Button
                      onClick={element.onReorderClick(
                        element.index,
                        element.index + 1
                      )}
                      disabled={!element.hasMoveDown}
                      className="h-8 w-8 p-0"
                      variant={"outline"}
                    >
                      <ArrowDownIcon />
                    </Button>
                  </>
                ) : null}
                <Button
                  onClick={element.onDropIndexClick(element.index)}
                  variant={"outline"}
                  className="h-8 w-8 p-0"
                >
                  <Cross1Icon />
                </Button>
              </div>
            </div>
          ))}

        {canAdd && (
          <div className="">
            <p className="">
              <Button onClick={onAddClick} type="button" variant={"ghost"}>
                <PlusIcon className="mr-2 h-4 w-4" /> Add
              </Button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ObjectFieldTemplate(props: ObjectFieldTemplateProps) {
  return (
    <div>
      <h2 className="text-xl tracking-tight font-bold mb-1">{props.title}</h2>
      <p className="text-sm">{props.description}</p>
      <Separator className="mt-4 mb-8" />
      {props.properties.map((element) => element.content)}
    </div>
  );
}

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data: session } = useSession();
  const [formState, setFormState] = useState<StrictRJSFSchema>();
  const { data: formData } = useSwr(GITHUB_SOURCE_API_DATA_URI, fetcher);

  useEffect(() => {
    if (formData && !formState) {
      setFormState(formData);
    }
  }, [formData, formState]);

  const [activityIdx, setActivityIdx] = useState(0);
  // const { data, error, isLoading } = useSWR(GITHUB_JSON_SCHEMA_URI, fetcher);
  const { data: activitySchema } = useSwr(
    GITHUB_ACTIVITY_JSON_SCHEMA_URI,
    fetcher
  );

  const handleSubmit: FormProps["onSubmit"] = (data) => {
    setFormState((curr: StrictRJSFSchema) => {
      return {
        ...curr,
        activities: [
          ...curr.activities.slice(0, activityIdx),
          data.formData,
          ...curr.activities.slice(activityIdx + 1),
        ],
      };
    });
  };

  const handleChange: FormProps["onChange"] = (data) => {
    setFormState((curr: StrictRJSFSchema) => {
      return {
        ...curr,
        activities: [
          ...curr.activities.slice(0, activityIdx),
          data.formData,
          ...curr.activities.slice(activityIdx + 1),
        ],
      };
    });
  };

  const handleReset = () => {
    setFormState(formData);
  };

  const handleSubmitPullRequest = () => {
    const fileText = JSON.stringify(formState, undefined, 2);

    fetch("/api/submit", {
      method: "POST",
      body: fileText,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((value) => {
        const pullUrl = value?.data?.html_url;
        if (pullUrl) {
          window.open(pullUrl);
        }
      })
      .catch((err) => console.error(err));
  };

  const handleAdd = () => {
    setActivityIdx(formState.activities.length);
    setFormState((curr: StrictRJSFSchema) => {
      return {
        ...curr,
        activities: [
          ...curr.activities,
          {
            name: "",
            description: "",
          },
        ],
      };
    });
  };

  return (
    <>
      <Head>
        <title>Hot Metal // FOUNDRY</title>
        <meta name="description" content="Foundry's data editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white max-w-prose mx-auto">
        <div className="flex justify-between mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Hot Metal</h1>
          <div className={styles.signup}>
            {session && session.user ? (
              <div className="flex justify-between gap-2">
                <Avatar>
                  {session.user.image ? (
                    <AvatarImage src={session.user.image} />
                  ) : null}{" "}
                  <AvatarFallback>{session.user.name}</AvatarFallback>
                </Avatar>
                <Button onClick={() => signOut()} variant={"outline"}>
                  <ExitIcon className="mr-2 h-4 w-4" /> Sign out
                </Button>
              </div>
            ) : (
              <Button onClick={() => signIn()}>
                <GitHubLogoIcon className="mr-2 h-4 w-4" /> Sign in
              </Button>
            )}
          </div>
        </div>
        {session && session.user ? (
          <div className="flex flex-col gap-2">
            {activitySchema && formState ? (
              <>
                <div className="flex gap-2 mb-4">
                  <Select
                    value={activityIdx.toString()}
                    onValueChange={(value) =>
                      setActivityIdx(parseInt(value) || 0)
                    }
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select an activity" />
                    </SelectTrigger>
                    <SelectContent>
                      {formState?.activities?.map(
                        (item: { name: string }, index: number) => (
                          <SelectItem
                            key={index}
                            value={index.toString()}
                            id="custom-select"
                          >
                            {item.name}
                          </SelectItem>
                        )
                      )}
                    </SelectContent>
                  </Select>
                  <Button onClick={handleAdd} variant={"outline"}>
                    <PlusIcon className="mr-2 h-4 w-4" /> Add new Activity
                  </Button>
                  <Button onClick={handleReset} variant={"destructive"}>
                    Reset All
                  </Button>
                </div>
                <Form
                  formData={formState.activities[activityIdx]}
                  schema={activitySchema}
                  validator={validator}
                  uiSchema={uiSchema}
                  liveValidate={true}
                  onChange={handleChange}
                  templates={{
                    BaseInputTemplate,
                    FieldTemplate: CustomFieldTemplate,
                    ArrayFieldTemplate,
                    // ArrayFieldTitleTemplate,
                    // ArrayFieldDescriptionTemplate,
                    // DescriptionFieldTemplate,
                    ObjectFieldTemplate,
                    ButtonTemplates: {
                      AddButton,
                      RemoveButton,
                    },
                  }}
                  // onSubmit={handleSubmit}
                />
                <Button onClick={handleSubmitPullRequest} className="ml-auto">
                  Submit All Changes
                </Button>
              </>
            ) : null}
          </div>
        ) : (
          <div className="text-center mt-20">Sign in to Github to edit</div>
        )}
      </div>
    </>
  );
}
