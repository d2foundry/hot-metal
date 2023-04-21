import { Button } from "@/common/components/Button";

import Head from "next/head";

import dynamic from "next/dynamic";
import { HTMLAttributes, useEffect, useState } from "react";
import useSwr from "swr";
import rehypeSanitize from "rehype-sanitize";
import * as Tree from "@/common/components/Tree";
import matter from "gray-matter";
import { Input } from "@/common/components/Input";
import { Label } from "@/common/components/Label";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const GITHUB_DOCS_MANIFEST_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main/docs/manifest.json";
const GITHUB_DOCS_BASE_URI =
  "https://raw.githubusercontent.com/d2foundry/hot-metal/main";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

interface ManifestRoute {
  heading?: boolean;
  title: string;
  routes?: ManifestRoute[];
  path?: string;
}

const mdFetcher = (url: string) => fetch(url).then((r) => r.text());
interface MatterData {
  description: string;
}
const Docs = () => {
  const [filePath, setFilePath] = useState("");

  const [matterData, setMatterData] = useState<null | MatterData>();
  const [value, setValue] = useState("**Hello world!!!**");

  const { data: manifest } = useSwr(GITHUB_DOCS_MANIFEST_URI, fetcher);
  const { data: mdFile } = useSwr(
    filePath ? `${GITHUB_DOCS_BASE_URI}${filePath}` : null,
    mdFetcher
  );

  // console.log(filePath);

  useEffect(() => {
    if (mdFile) {
      const gm = matter(mdFile);
      // console.log(matter(mdFile));
      setMatterData(gm.data as MatterData);
      setValue(gm.content);
    }
  }, [mdFile]);

  const handleFileSelect = (v: string) => {
    setFilePath(v);
  };

  const fileSelected = !!(mdFile && matterData);

  return (
    <>
      <Head>
        <title>Hot Metal // FOUNDRY</title>
        <meta name="description" content="Foundry's data editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {manifest ? (
            <div className="md:max-w-xs w-full border-r border-grayBorder pt-4 px-2">
              <Tree.Root>
                {manifest?.routes?.map((route: ManifestRoute) =>
                  route.heading ? (
                    <Tree.Folder name={route?.title} key={route?.title}>
                      {route?.routes?.length
                        ? route.routes.map((r) => (
                            <Tree.File
                              key={r?.title}
                              name={r?.title}
                              active={r?.path === filePath}
                              onClick={() => handleFileSelect(r?.path || "")}
                            />
                          ))
                        : null}
                    </Tree.Folder>
                  ) : (
                    <Tree.Folder name={route?.title} key={route?.title} />
                  )
                )}
              </Tree.Root>
            </div>
          ) : null}
          <div
            className="flex flex-col gap-2 w-full max-w-[130ch] pt-4"
            data-color-mode="dark"
          >
            {matterData ? (
              <div className="flex flex-col gap-2 mb-2">
                <div>
                  <Label htmlFor="file-path">File</Label>
                  <Input
                    id="file-path"
                    value={filePath}
                    readOnly
                    // onChange={(e) =>
                    //   setMatterData((curr) => ({
                    //     ...curr,
                    //     description: e.target.value,
                    //   }))
                    // }
                  />
                </div>
                <div>
                  <Label htmlFor="matter-desc">Description</Label>
                  <Input
                    id="matter-desc"
                    value={matterData.description}
                    onChange={(e) =>
                      setMatterData((curr) => ({
                        ...curr,
                        description: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>
            ) : null}
            {fileSelected ? (
              <MDEditor
                value={value}
                onChange={(v) => setValue(v ?? "")}
                draggable={false}
                // @ts-ignore
                overflow={true}
                enableScroll={false}
                components={{
                  preview: (props: HTMLAttributes<HTMLDivElement>) => (
                    <div {...props} />
                  ),
                }}
                previewOptions={{
                  rehypePlugins: [[rehypeSanitize]],
                }}
                height={800}
                // visibleDragbar={false}

                // textareaProps={{
                //   // className: "bg-neutral-900",
                //   placeholder: "Please enter Markdown text",
                // }}
              />
            ) : (
              <div className="w-full flex justify-center items-center text-graySolid h-96">
                Select a file.
              </div>
            )}
            <div className="flex justify-end mt-8">
              <Button disabled={!fileSelected}>Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
