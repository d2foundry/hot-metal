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
import {
  ChangeEvent,
  useEffect,
  useState,
  FocusEvent,
  useRef,
  useId,
} from "react";
import useSwr from "swr";

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
                  className="flex border items-center py-1 px-1 rounded border-grayBorder text-xs text-grayTextContrast"
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

const JsonCombobox = ({ onChange, ...props }: FieldProps) => {
  const [state, setState] = useState(props.formData ?? []);
  const id = useId();

  const handleChange = (value: string) => {
    if (!value) return;
    setState((curr: string) => {
      onChange(value);
      return value;
    });
  };
  return (
    <>
      <Label className="mb-1" htmlFor={id}>
        {props.schema.title ?? props.name}
        {props.required ? "*" : ""}
      </Label>
      <Select value={state} onValueChange={handleChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select an activity" />
        </SelectTrigger>
        <SelectContent>
          {props.schema.enum?.map((name, index: number) => (
            <SelectItem
              key={`${name?.toString()}-${index}`}
              value={name?.toString() ?? ""}
              id="custom-select"
            >
              {name?.toString()}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {/* <Combobox onChange={handleChange} values={state} id={id} /> */}
    </>
  );
};

const fields: RegistryFieldsType = {
  itemCombobox: ItemCombobox,
  combobox: JsonCombobox,
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
            <p className="text-sm text-grayText">{description}</p>
          ) : null}
        </>
      ) : null}
      {children}
      {errors ? (
        <p className="text-xs uppercase text-dangerText">{errors}</p>
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
              className="relative p-4 border rounded bg-grayBgSubtle border-grayBorder"
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

export const JsonEditor = ({
  schemaEndpoint,
  dataEndpoint,
  uiSchema,
  handleSubmit,
}: {
  schemaEndpoint: string;
  dataEndpoint: string;
  uiSchema: UiSchema;
  handleSubmit: (formData: string) => void;
}) => {
  const [formState, setFormState] = useState<any | undefined>();
  // const setInventoryItems = useSetAtom(inventoryItemsAtom);
  const { data: formData } = useSwr(dataEndpoint, fetcher);

  const formRef = useRef<Form | undefined | null>();

  useEffect(() => {
    if (formData && !formState) {
      setFormState(formData);
    }
  }, [formData, formState]);

  // useEffect(() => {
  //   getManifestInventoryItemTable().then((res) => {
  //     setInventoryItems(res);
  //   });
  // }, [setInventoryItems]);

  // const [activityIdx, setActivityIdx] = useState(0);
  // const { data, error, isLoading } = useSWR(GITHUB_JSON_SCHEMA_URI, fetcher);
  const { data: activitySchema } = useSwr(schemaEndpoint, fetcher);

  // const handleSubmit: FormProps["onSubmit"] = (data) => {
  //   setFormState((curr: StrictRJSFSchema) => {
  //     return {
  //       ...curr,
  //       activities: [
  //         ...curr.activities.slice(0, activityIdx),
  //         data.formData,
  //         ...curr.activities.slice(activityIdx + 1),
  //       ],
  //     };
  //   });
  // };

  const handleChange: FormProps["onChange"] = (data) => {
    setFormState((curr: any) => {
      if (!curr || !curr?.activities) {
        return {
          ...data.formData,
        };
      }
      return {
        ...curr,
        ...data.formData,
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

    handleSubmit(fileText);
  };

  // const handleAdd = () => {
  //   setActivityIdx(formState.activities.length);
  //   setFormState((curr: any) => {
  //     return {
  //       ...curr,
  //       activities: [
  //         ...curr.activities,
  //         {
  //           name: "",
  //           description: "",
  //           lootSources: [],
  //         },
  //       ],
  //     };
  //   });
  // };

  return (
    <div className="flex flex-col gap-2 max-w-prose mx-auto pt-4">
      {!!(activitySchema && formState && formState.activities) ? (
        <>
          <Form
            showErrorList={false}
            formData={formState}
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
  );
};
