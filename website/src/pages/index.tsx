import Head from "next/head";

export default function Home() {
  const handleSubmit = (fileText: string) => {
    return fetch("/api/submit/pve_activities", {
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
      <div className="flex flex-col gap-2 max-w-prose mx-auto pt-4">
        <h2 className="text-2xl tracking-tight font-bold mb-1">Welcome!</h2>
        <p>
          This is the home of Foundry&apos;s editors for additional data and
          documentation.
        </p>
        <p>
          By giving permission to GitHub, it lets us fork the main repo if you
          have not already, and creates a PR on submission.
        </p>
        <p>
          Make sure to check out{" "}
          <a
            href="https://github.com/d2foundry/hot-metal"
            rel="noopener noreferrer"
            target="_blank"
            className="text-grayText hover:text-accentText underline"
          >
            the repo on GitHub
          </a>{" "}
          for more info or to see the source code for this very web app!
        </p>
      </div>
    </>
  );
}
