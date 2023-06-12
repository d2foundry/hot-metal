import { JsonEditor } from "@/common/components/JsonEditor";
import { UiSchema } from "@rjsf/utils";
import Head from "next/head";

const GITHUB_PVE_ACTIVITIES_API_DATA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/api/felicity/rolls.json";
const GITHUB_PVE_ACTIVITIES_JSON_SCHEMA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/felicity/roll_schema.json";

const uiSchema: UiSchema = {
  weaponRolls: {
    items: {
      // weaponHash: {
      //   "ui:field": "itemCombobox",
      // },
    },
    // "ui:widget": "CustomSelect", // could also be "select"
  },
  "ui:submitButtonOptions": {
    norender: true,
    submitText: "Save",
  },
};

// const ItemCombobox = ({ onChange, ...props }: FieldProps) => {
//   const [state, setState] = useState(props.formData ?? []);

//   const items = useAtomValue(inventoryItemsAtom);

//   const handleChange = (value?: number) => {
//     if (!value) return;
//     setState((curr: number[]) => {
//       // const hit = curr.in
//       let next = [...curr, value];

//       if (curr.includes(value)) {
//         next = curr.filter((hash) => hash !== value);
//       }

//       onChange(next);
//       return next;
//     });
//   };
//   return (
//     <>
//       <Label className="mb-1" htmlFor="loot-items">
//         {props.schema.title}
//         {props.required ? "*" : ""}
//       </Label>
//       <Combobox onChange={handleChange} values={state} id="loot-items" />
//       <div className="flex gap-2 mt-4 flex-wrap">
//         {items
//           ? props.formData?.map((itemHash: number) => {
//               const weapon = items[itemHash];
//               if (!weapon) return;
//               return (
//                 <div
//                   key={`${props.title}-selected-${itemHash}`}
//                   className="flex border items-center py-1 px-1 rounded border-grayBorder text-xs text-grayTextContrast"
//                 >
//                   <Avatar className="rounded-sm mr-2 relative h-4 w-4 ">
//                     <AvatarImage
//                       src={`https://bungie.net${weapon.displayProperties.icon}`}
//                     ></AvatarImage>
//                     <AvatarFallback className="rounded-sm"></AvatarFallback>
//                     <div
//                       className="absolute top-0 left-0 z-10 h-full w-full bg-cover"
//                       style={{
//                         backgroundImage: `url(https://bungie.net${
//                           (weapon.quality?.displayVersionWatermarkIcons
//                             ? weapon.quality.displayVersionWatermarkIcons[
//                                 weapon.quality.currentVersion
//                               ]
//                             : weapon.iconWatermark) ||
//                           weapon.iconWatermarkShelved
//                         })`,
//                       }}
//                     />
//                   </Avatar>
//                   {weapon.displayProperties.name}
//                   <Button
//                     className="ml-2 h-4 w-4 p-0.5 rounded-full"
//                     variant={"subtle"}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleChange(weapon.hash);
//                     }}
//                   >
//                     <Cross2Icon />
//                   </Button>
//                 </div>
//               );
//             })
//           : null}
//       </div>
//     </>
//   );
// };

// const fields: RegistryFieldsType = { itemCombobox: ItemCombobox };

export default function Felicity() {
  const handleSubmit = (fileText: string) => {
    fetch("/api/submit/felicity/rolls", {
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
  return (
    <>
      <Head>
        <title>Hot Metal // FOUNDRY</title>
        <meta name="description" content="Foundry's data editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <JsonEditor
          dataEndpoint={GITHUB_PVE_ACTIVITIES_API_DATA_URI}
          schemaEndpoint={GITHUB_PVE_ACTIVITIES_JSON_SCHEMA_URI}
          uiSchema={uiSchema}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
