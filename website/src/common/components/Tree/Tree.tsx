import { PropsWithChildren, useState } from "react";
import * as Collapsible from "@radix-ui/react-collapsible";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileTextIcon,
} from "@radix-ui/react-icons";
import { cn } from "@/common/utils";

export const File = ({
  name,
  path,
  active,
  onClick,
}: {
  name: string;
  path?: string;
  active?: boolean;
  onClick: () => void;
}) => (
  <button
    className={cn(
      "flex transition-colors gap-2 text-sm items-center pl-6 py-1 w-full rounded text-ellipsis overflow-hidden text-grayText hover:bg-grayBgHover hover:text-grayTextContrast",
      active ? "bg-grayBgActive text-grayTextContrast" : ""
    )}
    onClick={onClick}
  >
    <FileTextIcon className="h-4 w-4 shrink-0 opacity-50" /> {name}
  </button>
);

interface FolderProps {
  name: string;
}

export const Folder: React.FC<PropsWithChildren<FolderProps>> = ({
  children,
  name,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <Collapsible.Trigger className="flex transition-colors text-sm items-center py-1 gap-2 rounded w-full hover:bg-grayBgHover hover:text-grayTextContrast">
        {open ? (
          <ChevronDownIcon className="h-4 w-4 shrink-0 opacity-50" />
        ) : (
          <ChevronRightIcon className="h-4 w-4 shrink-0 opacity-50" />
        )}

        {name}
      </Collapsible.Trigger>
      <Collapsible.Content>{children}</Collapsible.Content>
    </Collapsible.Root>
  );
};

export const Root: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col text-grayTextContrast">{children}</div>
);
