import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-color-mode="dark">
      <Head>
        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"
          integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
          crossOrigin="anonymous"
        ></link> */}
      </Head>
      <body
        className="bg-grayBase text-grayTextContrast"
        data-color-mode="dark"
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
