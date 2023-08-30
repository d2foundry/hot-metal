import React, { PropsWithChildren } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "@/common/components/Button";
import { ExitIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import {
  AvatarFallback,
  Avatar,
  AvatarImage,
} from "@/common/components/Avatar";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { cn } from "@/common/utils";

import styles from "./Layout.module.css";
import { Separator } from "../Separator";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { data: session } = useSession();

  const { pathname } = useRouter();

  const isAuthed = !!(session && session.user);

  return (
    <>
      <div className="max-w-screen-2xl flex flex-col mx-auto min-h-screen px-4 py-4 mb-20">
        <div className="">
          <header className="flex justify-between items-center mb-2">
            <h1 className="text-4xl font-extrabold tracking-tight flex items-center">
              <span className={cn("rounded mr-4", styles.shineIcon)}>
                <Image
                  src={"/foundry_simple_logo.png"}
                  height={48}
                  width={48}
                  alt=""
                />
              </span>
              Hot Metal
            </h1>
            <div>
              {isAuthed ? (
                <div className="flex justify-between gap-4">
                  <Avatar>
                    {session?.user?.image ? (
                      <AvatarImage src={session.user.image} />
                    ) : null}{" "}
                    <AvatarFallback>{session?.user?.name}</AvatarFallback>
                  </Avatar>
                  <Button onClick={() => signOut()} variant={"outline"}>
                    <ExitIcon className="mr-2 h-4 w-4" /> Sign out
                  </Button>
                </div>
              ) : (
                <Button onClick={() => signIn()}>
                  <GitHubLogoIcon className="mr-2 h-4 w-4" /> Sign in
                </Button>
              )}
            </div>
          </header>
          <nav>
            <ul className="flex gap-4 border-b border-grayBorder">
              <Link
                href="/"
                className={cn(
                  "text-grayText hover:text-accentText border-b border-transparent mb-[-1px] py-2",
                  pathname === "/"
                    ? "text-grayTextContrast  border-grayTextContrast"
                    : ""
                )}
              >
                Home
              </Link>
              <Link
                href="/fits"
                className={cn(
                  "text-grayText hover:text-accentText border-b border-transparent mb-[-1px] py-2",
                  pathname === "/fits"
                    ? "text-grayTextContrast  border-grayTextContrast"
                    : ""
                )}
              >
                Item Tagging
              </Link>
              <Link
                href="/sources"
                className={cn(
                  "text-grayText hover:text-accentText border-b border-transparent mb-[-1px] py-2",
                  pathname === "/sources"
                    ? "text-grayTextContrast  border-grayTextContrast"
                    : ""
                )}
              >
                Sources
              </Link>
              <Link
                href="/activities"
                className={cn(
                  "text-grayText hover:text-accentText border-b border-transparent mb-[-1px] py-2",
                  pathname === "/activities"
                    ? "text-grayTextContrast  border-grayTextContrast"
                    : ""
                )}
              >
                PVE Activities
              </Link>
              <Link
                href={"/docs"}
                className={cn(
                  "text-grayText hover:text-accentText border-b border-transparent mb-[-1px] py-2",
                  pathname === "/docs"
                    ? "text-grayTextContrast  border-grayTextContrast"
                    : ""
                )}
              >
                Docs
              </Link>
              <Separator orientation="vertical" className="h-5 mx-2 my-auto" />
              <Link
                href={"/felicity"}
                className={cn(
                  "text-grayText hover:text-accentText border-b border-transparent mb-[-1px] py-2",
                  pathname === "/felicity"
                    ? "text-grayTextContrast  border-grayTextContrast"
                    : ""
                )}
              >
                Felicity
              </Link>
            </ul>
          </nav>
        </div>
        {isAuthed ? (
          children
        ) : (
          <div className="text-center mt-20">Sign in to Github to edit</div>
        )}
      </div>
    </>
  );
};
