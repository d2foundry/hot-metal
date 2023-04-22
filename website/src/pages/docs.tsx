import { Button } from "@/common/components/Button";

import Head from "next/head";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import useSwr from "swr";

import * as Tree from "@/common/components/Tree";
import matter from "gray-matter";
import { Input } from "@/common/components/Input";
import { Label } from "@/common/components/Label";
import { cn } from "@/common/utils";
import { PinLeftIcon, PinRightIcon } from "@radix-ui/react-icons";

const MarkdownEditor = dynamic(
  () =>
    import("@/common/components/MarkdownEditor").then(
      (mod) => mod.MarkdownEditor
    ),
  { ssr: false }
);
// const commands = dynamic(
//   () => import("@uiw/react-md-editor").then((mod) => mod.commands),
//   { ssr: false }
// );

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
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [filePath, setFilePath] = useState("");
  const [isNew, setIsNew] = useState(false);
  const [fileName, setFileName] = useState("");

  const [hasChanges, setHasChanges] = useState(false);

  const [matterData, setMatterData] = useState<null | MatterData>();
  const [value, setValue] = useState("");

  const { data: manifest } = useSwr(GITHUB_DOCS_MANIFEST_URI, fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const { data: mdFile } = useSwr(
    !!(filePath && !isNew) ? `${GITHUB_DOCS_BASE_URI}${filePath}` : null,
    mdFetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    }
  );

  const handleSubmit = () => {
    const fileText = matter.stringify(value, matterData ?? {});

    let apiPath = "";
    if (isNew) {
      // oh baby, we're writing some javascript!!!
      apiPath = filePath
        .split("/")
        .slice(1, -1)
        .concat(fileName)
        .join("/")
        .split(".md")[0];
    } else {
      apiPath = filePath.split("/").slice(1).join("/").split(".md")[0];
    }

    fetch("/api/docs/" + apiPath, {
      method: "POST",
      body: fileText,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    })
      .then((res) => res.json())
      .then((value) => {
        const pullUrl = value?.data?.html_url;
        if (pullUrl) {
          setHasChanges(false);
          window.open(pullUrl);
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (mdFile) {
      const gm = matter(mdFile);

      setMatterData(gm.data as MatterData);
      setValue(gm.content);
    }
  }, [mdFile]);

  const handleFileSelect = (v: string) => {
    setFilePath(v);
    const fileName = (v ? v.split("/").at(-1) ?? "" : "").split(".md")[0];
    setFileName(fileName);
  };

  const fileSelected = !!matterData;

  const handleEditorChange = (newValue: string) => {
    if (!hasChanges) {
      setHasChanges(true);
    }
    setValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Hot Metal // FOUNDRY</title>
        <meta name="description" content="Foundry's data editor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col h-full flex-1">
        <div className="flex flex-col flex-1 md:flex-row gap-6">
          {manifest ? (
            <div
              className={cn(
                "md:max-w-xs w-full border-r border-grayBorder pt-2 px-2",
                !sidebarOpen ? "w-auto" : ""
              )}
            >
              <div className="flex justify-between mb-2 items-center">
                {sidebarOpen ? (
                  <a
                    className="text-xs text-grayText hover:underline"
                    href="https://github.com/d2foundry/hot-metal/tree/main/docs"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    hot-metal/main/docs
                  </a>
                ) : null}
                <Button
                  onClick={() => setSidebarOpen((curr) => !curr)}
                  // disabled={!element.hasMoveDown}
                  className="h-8 w-8 p-0 z-10"
                  variant={"ghost"}
                >
                  {sidebarOpen ? <PinLeftIcon /> : <PinRightIcon />}
                  {/* <ArrowDownIcon /> */}
                </Button>
              </div>
              <div className={cn(!sidebarOpen ? "hidden" : "")}>
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
                                onClick={() => {
                                  if (hasChanges) {
                                    if (
                                      confirm(
                                        "You have changes on this file you haven't submitted that will be lost. Are you sure you want to continue?"
                                      )
                                    ) {
                                      setHasChanges(false);
                                    } else {
                                      return;
                                    }
                                  }
                                  setIsNew(false);
                                  handleFileSelect(r?.path || "");
                                }}
                              />
                            ))
                          : null}
                        <Tree.File
                          name={"New file..."}
                          newFile
                          onClick={() => {
                            handleFileSelect(
                              (route.path ?? "/") + "/untitled.md"
                            );
                            setIsNew(true);
                            setMatterData({ description: "" });
                            setValue("");
                          }}
                        />
                      </Tree.Folder>
                    ) : (
                      <Tree.Folder name={route?.title} key={route?.title} />
                    )
                  )}
                </Tree.Root>
              </div>
            </div>
          ) : null}
          <div
            className="flex flex-col gap-2 w-full max-w-[130ch] pt-4 relative"
            data-color-mode="dark"
          >
            {matterData ? (
              <div className="flex flex-col gap-2 mb-2">
                <div>
                  <Label htmlFor="file-path">File Name</Label>
                  <Input
                    id="file-path"
                    value={fileName}
                    // readOnly
                    onChange={(e) => setFileName(e.target.value)}
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
              <MarkdownEditor value={value} onChange={handleEditorChange} />
            ) : (
              <div className="w-full flex justify-center items-center text-graySolid h-full">
                Select a file.
              </div>
            )}
            <div className="flex justify-end mt-8">
              <Button disabled={!fileSelected} onClick={handleSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Docs;
