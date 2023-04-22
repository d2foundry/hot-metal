"use client";
import {
  CodeIcon,
  DividerHorizontalIcon,
  FontBoldIcon,
  FontItalicIcon,
  HeadingIcon,
  ImageIcon,
  Link1Icon,
  ListBulletIcon,
  QuoteIcon,
  StrikethroughIcon,
} from "@radix-ui/react-icons";
import dynamic from "next/dynamic";
import { HTMLAttributes } from "react";
import katex from "katex";
import "katex/dist/katex.css";

const MDEditor = dynamic(
  () => import("@uiw/react-md-editor").then((mod) => mod.default),
  { ssr: false }
);

import { commands } from "@uiw/react-md-editor";

// why doesn't this worth with KaTeX
// import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

import { cn } from "@/common/utils";

export const MarkdownEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => (
  <MDEditor
    value={value}
    onChange={(v) => onChange(v ?? "")}
    draggable={false}
    // @ts-ignore
    overflow={true}
    enableScroll={false}
    extraCommands={[]}
    commands={[
      commands.group(
        [
          commands.title1,
          commands.title2,
          commands.title3,
          commands.title4,
          commands.title5,
          commands.title6,
        ],
        {
          name: "title",
          groupName: "title",
          icon: <HeadingIcon />,
          buttonProps: { "aria-label": "Insert title" },
        }
      ),
      commands.divider,
      { ...commands.bold, icon: <FontBoldIcon /> },
      { ...commands.italic, icon: <FontItalicIcon /> },
      { ...commands.strikethrough, icon: <StrikethroughIcon /> },
      { ...commands.hr, icon: <DividerHorizontalIcon /> },
      commands.divider,
      { ...commands.link, icon: <Link1Icon /> },
      { ...commands.quote, icon: <QuoteIcon /> },
      { ...commands.code, icon: <CodeIcon /> },
      {
        ...commands.codeBlock,
        buttonProps: {
          type: "button",
        },
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            height={15}
            width={15}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
            />
          </svg>
        ),
      },
      { ...commands.image, icon: <ImageIcon /> },
      commands.divider,
      {
        ...commands.orderedListCommand,
        icon: (
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.5 4.00001C4.22386 4.00001 4 4.22387 4 4.50001C4 4.77615 4.22386 5.00001 4.5 5.00001H13.5C13.7761 5.00001 14 4.77615 14 4.50001C14 4.22387 13.7761 4.00001 13.5 4.00001H4.5ZM4 7.50001C4 7.22387 4.22386 7.00001 4.5 7.00001H13.5C13.7761 7.00001 14 7.22387 14 7.50001C14 7.77615 13.7761 8.00001 13.5 8.00001H4.5C4.22386 8.00001 4 7.77615 4 7.50001ZM4 10.5C4 10.2239 4.22386 10 4.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7762 13.7761 11 13.5 11H4.5C4.22386 11 4 10.7762 4 10.5Z"
                fill="currentColor"
              />
              <path
                d="M1.37975 6.875V4.51598H1.36235L0.629039 4.97585V4.32457L1.42201 3.82244H2.1056V6.875H1.37975ZM0.322354 10.875V10.3256L1.53294 9.35866C1.62574 9.28243 1.70611 9.21366 1.77406 9.15234C1.842 9.09103 1.89503 9.02888 1.93315 8.96591C1.97127 8.90294 1.99032 8.83333 1.99032 8.7571C1.99032 8.63778 1.94144 8.54581 1.84366 8.48118C1.74589 8.41655 1.6274 8.38423 1.48819 8.38423C1.33904 8.38423 1.2189 8.42069 1.12775 8.49361C1.03826 8.56487 0.993519 8.66844 0.993519 8.80433H0.26021C0.26021 8.48615 0.376213 8.23674 0.608221 8.05611C0.840228 7.87382 1.13687 7.78267 1.49814 7.78267C1.74506 7.78267 1.95966 7.82576 2.14196 7.91193C2.32425 7.99645 2.46511 8.11162 2.56454 8.25746C2.66563 8.40329 2.71618 8.56652 2.71618 8.74716C2.71618 8.89299 2.68552 9.02888 2.6242 9.15483C2.56454 9.27912 2.47174 9.40175 2.34579 9.52273C2.2215 9.64205 2.06075 9.76716 1.86355 9.89808L1.42108 10.2262V10.2536H2.75098V10.875H0.322354Z"
                fill="currentColor"
              />
            </g>
          </svg>
        ),
      },
      {
        ...commands.unorderedListCommand,
        icon: <ListBulletIcon />,
      },
    ]}
    components={{
      preview: (props: HTMLAttributes<HTMLDivElement>) => <div {...props} />,
    }}
    previewOptions={{
      components: {
        code: ({ inline, children, className, ...props }) => {
          const txt = children[0] || "";
          if (inline) {
            if (typeof txt === "string" && /^\$\$(.*)\$\$/.test(txt)) {
              const html = katex.renderToString(
                txt.replace(/^\$\$(.*)\$\$/, "$1"),
                {
                  throwOnError: false,
                }
              );
              return (
                <code
                  className={cn(className, "not-prose")}
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            }
            return <code className={cn(className, "not-prose")}>{txt}</code>;
          }
          if (
            typeof txt === "string" &&
            typeof className === "string" &&
            /^language-katex/.test(className.toLocaleLowerCase())
          ) {
            const html = katex.renderToString(txt, {
              throwOnError: false,
            });
            console.log("props", txt, className, props);
            return (
              <code
                className={cn(className, "not-prose")}
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          }
          return <code className={String(className)}>{txt}</code>;
        },
      },
    }}
    height={800}
  />
);
