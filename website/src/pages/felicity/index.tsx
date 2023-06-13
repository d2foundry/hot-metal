import { JsonEditor } from "@/common/components/JsonEditor";
import { UiSchema } from "@rjsf/utils";
import Head from "next/head";

const GITHUB_FELICITY_ROLLS_API_DATA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/api/felicity/rolls.json";
const GITHUB_FELICITY_ROLLS_JSON_SCHEMA_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/data/schemas/felicity/roll_schema.json";

const uiSchema: UiSchema = {
  "ui:submitButtonOptions": {
    norender: true,
    submitText: "Save",
  },
};

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
          dataEndpoint={GITHUB_FELICITY_ROLLS_API_DATA_URI}
          schemaEndpoint={GITHUB_FELICITY_ROLLS_JSON_SCHEMA_URI}
          uiSchema={uiSchema}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
