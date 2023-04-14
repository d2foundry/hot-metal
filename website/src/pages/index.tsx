import Head from "next/head";
import styles from "@/styles/Home.module.css";

import useSWR from "swr";
import { UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/core";

const GITHUB_JSON_SCHEMA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/source_schema.json";

// const data = {
//   $schema: "http://json-schema.org/draft-07/schema#",
//   title: "Activities",
//   type: "array",
//   items: {
//     $ref: "#/definitions/activity",
//   },
//   additionalItems: {
//     type: "boolean",
//   },
//   definitions: {
//     activity: {
//       title: "Activity",
//       type: "object",
//       description:
//         "Top-level activity from which there can be multiple loot sources.",
//       properties: {
//         name: {
//           title: "Activity Name",
//           type: "string",
//         },
//         description: {
//           title: "Activity Description",
//           type: "string",
//         },
//         rotationStartDate: {
//           title: "Rotation Start Date",
//           type: "string",
//           description:
//             "If this activity has sources that rotate, the date at reset where the rotation starts.",
//           format: "date-time",
//         },
//         rotationDuration: {
//           title: "Rotation Duration (ms)",
//           type: "integer",
//           description: "The time between each rotation change in millisconds",
//         },
//         lootSources: {
//           title: "Loot Sources",
//           type: "array",
//           items: {
//             $ref: "#/definitions/lootSource",
//           },
//         },
//       },
//       required: ["description", "name"],
//     },
//     lootSource: {
//       type: "object",
//       title: "Loot Source",
//       description:
//         "An encounter, rotator instance, etc from which a group of items can drop.",
//       properties: {
//         name: {
//           title: "Source Name",
//           type: "string",
//         },
//         description: {
//           title: "Source Description",
//           type: "string",
//         },
//         lootItems: {
//           title: "Loot Items",
//           type: "array",
//           items: {
//             description: "Bungie InventoryItem hash for the loot item",
//             type: "integer",
//           },
//         },
//       },
//       required: ["description", "name", "lootItems"],
//     },
//     activityType: {
//       type: "string",
//       enum: ["raid", "dungeon"],
//     },
//   },
// };
const uiSchema: UiSchema = {
  // activities: {
  //   "ui:widget": "select", // could also be "select"
  // },
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(GITHUB_JSON_SCHEMA_URI, fetcher);
  return (
    <>
      <Head>
        <title>Hot Metal // FOUNDRY</title>
        <meta name="description" content="Foundry's data editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Hot Metal</h1>
        <div>
          {data ? (
            <Form schema={data} validator={validator} uiSchema={uiSchema} />
          ) : null}
        </div>
      </div>
    </>
  );
}
