import Head from "next/head";
import styles from "@/styles/Home.module.css";

import useSwr from "swr";
import {
  ArrayFieldDescriptionProps,
  ArrayFieldTemplateProps,
  ArrayFieldTitleProps,
  BaseInputTemplateProps,
  DescriptionFieldProps,
  FieldProps,
  FieldTemplateProps,
  IconButtonProps,
  ObjectFieldTemplateProps,
  RegistryFieldsType,
  StrictRJSFSchema,
  UiSchema,
  WidgetProps,
  getInputProps,
} from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form, { FormProps } from "@rjsf/core";
import { ChangeEvent, useEffect, useState, FocusEvent, useRef } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/common/components/Button";
import { Input } from "@/common/components/Input";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  Cross1Icon,
  Cross2Icon,
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

import {
  DestinyInventoryItemDefinition,
  HttpClientConfig,
  ServerResponse,
  getDestinyManifest,
  getDestinyManifestSlice,
} from "bungie-api-ts/destiny2";
import { Combobox } from "@/common/components/Combobox";
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { inventoryItemsAtom } from "@/common/store";

async function $http<T>(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  const res = await fetch(config.url, {});
  const data: T = await res.json();
  return data;
}

async function fetchManifest() {
  const data = await getDestinyManifest($http);
  return data.Response;
}

async function getManifestInventoryItemTable() {
  const destinyManifest = await fetchManifest();
  const manifestTables = await getDestinyManifestSlice($http, {
    destinyManifest,
    tableNames: ["DestinyInventoryItemDefinition"],
    language: "en",
  });
  return manifestTables.DestinyInventoryItemDefinition;
}

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
        "ui:field": "itemCombobox",
      },
    },
  },
};

const ItemCombobox = ({ onChange, ...props }: FieldProps) => {
  const [state, setState] = useState(props.formData ?? []);

  const items = useAtomValue(inventoryItemsAtom);

  const handleChange = (value?: number) => {
    if (!value) return;
    setState((curr: number[]) => {
      // const hit = curr.in
      let next = [...curr, value];

      if (curr.includes(value)) {
        next = curr.filter((hash) => hash !== value);
      }

      onChange(next);
      return next;
    });
  };
  return (
    <>
      <Label className="mb-1" htmlFor="loot-items">
        {props.schema.title}
        {props.required ? "*" : ""}
      </Label>
      <Combobox onChange={handleChange} values={state} id="loot-items" />
      <div className="flex gap-2 mt-4 flex-wrap">
        {items
          ? props.formData?.map((itemHash: number) => {
              const weapon = items[itemHash];
              if (!weapon) return;
              return (
                <div
                  key={`${props.title}-selected-${itemHash}`}
                  className="flex border items-center py-1 px-1 rounded border-neutral-700 text-xs text-neutral-300"
                >
                  <Avatar className="rounded-sm mr-2 relative h-4 w-4 ">
                    <AvatarImage
                      src={`https://bungie.net${weapon.displayProperties.icon}`}
                    ></AvatarImage>
                    <AvatarFallback className="rounded-sm"></AvatarFallback>
                    <div
                      className="absolute top-0 left-0 z-10 h-full w-full bg-cover"
                      style={{
                        backgroundImage: `url(https://bungie.net${
                          (weapon.quality?.displayVersionWatermarkIcons
                            ? weapon.quality.displayVersionWatermarkIcons[
                                weapon.quality.currentVersion
                              ]
                            : weapon.iconWatermark) ||
                          weapon.iconWatermarkShelved
                        })`,
                      }}
                    />
                  </Avatar>
                  {weapon.displayProperties.name}
                  <Button
                    className="ml-2 h-4 w-4 p-0.5 rounded-full"
                    variant={"subtle"}
                    onClick={(e) => {
                      e.preventDefault();
                      handleChange(weapon.hash);
                    }}
                  >
                    <Cross2Icon />
                  </Button>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

const fields: RegistryFieldsType = { itemCombobox: ItemCombobox };

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
  const hasError = rawErrors && rawErrors.length > 0;
  return (
    <Input
      id={id}
      // label={label}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      readOnly={readonly}
      autoFocus={autofocus}
      error={hasError}
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
      {errors ? (
        <p className="text-xs uppercase text-red-500">{errors}</p>
      ) : null}
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
      <div className="flex flex-col gap-4">
        {items &&
          items.map((element) => (
            <div
              key={element.key}
              // className=""
              className="relative p-4 border rounded bg-neutral-700/20 border-neutral-700"
            >
              <div>{element.children}</div>
              <div className="absolute top-4 right-4 flex gap-2">
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
              <Button onClick={onAddClick} type="button" variant={"outline"}>
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
  const setInventoryItems = useSetAtom(inventoryItemsAtom);
  const { data: formData } = useSwr(GITHUB_SOURCE_API_DATA_URI, fetcher);

  const formRef = useRef<Form | undefined | null>();

  useEffect(() => {
    if (formData && !formState) {
      setFormState(formData);
    }
  }, [formData, formState]);

  useEffect(() => {
    getManifestInventoryItemTable().then((res) => {
      setInventoryItems(res);
    });
  }, [setInventoryItems]);

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
    // let isValid;
    if (formRef.current) {
      const isValid = formRef.current.validateForm();
      if (!isValid) return;
    }
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
            lootSources: [],
          },
        ],
      };
    });
  };

  const isAuthed = !!(session && session.user);

  return (
    <>
      <Head>
        <title>Hot Metal // FOUNDRY</title>
        <meta name="description" content="Foundry's data editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black text-white max-w-prose mx-auto pb-80">
        <div className="flex justify-between mb-4">
          <h1 className="text-4xl font-extrabold tracking-tight">Hot Metal</h1>
          <div className={styles.signup}>
            {isAuthed ? (
              <div className="flex justify-between gap-2">
                <Avatar>
                  {session?.user?.image ? (
                    <AvatarImage src={session.user.image} />
                  ) : null}{" "}
                  <AvatarFallback>{session?.user?.name}</AvatarFallback>
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
        {isAuthed ? (
          <div className="flex flex-col gap-2">
            {activitySchema && formState ? (
              <>
                <div className="flex gap-2 mb-4">
                  <Select
                    value={activityIdx.toString()}
                    onValueChange={(value) => {
                      if (formRef.current) {
                        const isValid = formRef.current.validateForm();
                        if (!isValid) return;
                        // formRef.current.renderErrors();
                      }
                      setActivityIdx(parseInt(value) || 0);
                    }}
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
                  showErrorList={false}
                  formData={formState.activities[activityIdx]}
                  schema={activitySchema}
                  validator={validator}
                  uiSchema={uiSchema}
                  onChange={handleChange}
                  noHtml5Validate
                  ref={(props) => {
                    formRef.current = props;
                  }}
                  fields={fields}
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
