import Head from "next/head";
import styles from "@/styles/Home.module.css";
// import validator from "@rjsf/validator-ajv8";
// import Form from "@rjsf/core";

export default function Home() {
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
        <div></div>
      </div>
    </>
  );
}
