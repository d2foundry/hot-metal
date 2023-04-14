import Head from "next/head";
import styles from "@/styles/Home.module.css";

import useSWR from "swr";
import { UiSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";
import Form, { FormProps } from "@rjsf/core";
import { useState } from "react";

const GITHUB_JSON_SCHEMA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/source_schema.json";

const GITHUB_ACTIVITY_JSON_SCHEMA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/activity_schema.json";

const filename = "sources";

const formData = {
  activities: [
    {
      name: "Dares of Eternity",
      description: "Chill with your homie Xur",
    },
  ],
};

const uiSchema: UiSchema = {
  activities: {
    // "ui:widget": "CustomSelect", // could also be "select"
  },
  "ui:submitButtonOptions": {
    norender: false,
    submitText: "Save",
  },
};

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const [formState, setFormState] = useState(formData);
  const [activityIdx, setActivityIdx] = useState(0);
  // const { data, error, isLoading } = useSWR(GITHUB_JSON_SCHEMA_URI, fetcher);
  const { data: activitySchema } = useSWR(
    GITHUB_ACTIVITY_JSON_SCHEMA_URI,
    fetcher
  );

  const handleSubmit: FormProps["onSubmit"] = (data) => {
    setFormState((curr) => {
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

  const handleSubmitPullRequest = () => {
    const fileText = JSON.stringify(formState, undefined, 2);
    console.log(fileText);
    const encodedFileText = encodeURIComponent(fileText);
    const githubQueryLink =
      "https://github.com/d2foundry/hot-metal/new/main/data/api/new?value=" +
      encodedFileText +
      "&filename=" +
      filename;
    window.open(githubQueryLink);
  };

  const handleAdd = () => {
    setActivityIdx(formState.activities.length);
    setFormState((curr) => {
      return {
        ...curr,
        activities: [
          ...curr.activities,
          {
            name: "New Activity",
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
      <div className={styles.main}>
        <h1>Hot Metal</h1>
        <p>First, log into Github. Then make your changes here!</p>
        <div>
          {activitySchema ? (
            <>
              <select
                value={activityIdx}
                onChange={(e) => setActivityIdx(parseInt(e.target.value) || 0)}
              >
                {formState.activities.map((item, index) => (
                  <option key={index} value={index} id="custom-select">
                    {item.name}
                  </option>
                ))}
              </select>
              <button onClick={handleAdd}>Add new Activity +</button>
              <Form
                formData={formState.activities[activityIdx]}
                schema={activitySchema}
                validator={validator}
                uiSchema={uiSchema}
                onSubmit={handleSubmit}
              />
              <button onClick={handleSubmitPullRequest}>
                Submit All Changes
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
