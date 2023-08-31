"use client";

import * as React from "react";
import { CheckIcon, CaretSortIcon } from "@radix-ui/react-icons";

import { cn } from "@/common/utils";
import { Button } from "@/common/components/Button";
import {
  Command,
  CommandEmpty,
  // CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/common/components/Command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/common/components/Popover";
import { useWeapons } from "@/common/store";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { DestinyInventoryItemDefinition } from "bungie-api-ts/destiny2";
import { useCommandState } from "cmdk";

interface ComboboxProps {
  onChange: (value?: number) => void;
  values?: number[];
  id: string;
}
const SubItem = (props: any) => {
  const search = useCommandState((state) => state.search);
  if (!search) return null;
  return <CommandItem {...props} />;
};
const WeaponCommandItem = ({
  weapon,
  idx,
  onSelect,
  selected,
}: {
  weapon: DestinyInventoryItemDefinition;
  idx: number;
  isEmpty?: boolean;
  onSelect: (currentValue: string) => void;
  selected?: boolean;
}) => {
  return (
    <SubItem
      key={`${weapon.hash}-${idx}`}
      value={`${weapon.displayProperties.name} : ${weapon.hash}`}
      onSelect={onSelect}
    >
      <Avatar className="rounded-sm mr-2 h-8 w-8 relative">
        <AvatarImage
          src={`https://bungie.net${weapon.displayProperties.icon}`}
        ></AvatarImage>
        <AvatarFallback className="rounded-sm"></AvatarFallback>
        <div
          className="absolute top-0 left-0 z-10 h-full w-full bg-cover"
          style={{
            backgroundImage: `url(https://bungie.net${
              (weapon.quality?.displayVersionWatermarkIcons
                ? weapon.quality.displayVersionWatermarkIcons[
                    weapon.quality.currentVersion
                  ]
                : weapon.iconWatermark) || weapon.iconWatermarkShelved
            })`,
          }}
        />
      </Avatar>
      {weapon.displayProperties.name}
      <CheckIcon
        className={cn(
          "ml-auto h-4 w-4",
          selected ? "opacity-100" : "opacity-0"
        )}
      />
    </SubItem>
  );
};
export const EmptyState = () => {
  const search = useCommandState((state) => state.search);

  return (
    <CommandEmpty>
      {!search
        ? "Search for a weapon by name."
        : `No results found for ${search}.`}
    </CommandEmpty>
  );
};
export const Combobox: React.FC<ComboboxProps> = ({ onChange, values, id }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState<number>();
  const weapons = useWeapons();
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild id={id}>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-80 justify-between"
        >
          <span className="text-graySolid">
            {values
              ? "Select weapons..."
              : weapons.find((w) => w.hash === value)?.displayProperties.name}
          </span>
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <Command loop>
          <CommandInput placeholder="Search weapons..." />
          <EmptyState />
          <CommandList>
            {weapons.map((weapon, idx) => (
              <WeaponCommandItem
                weapon={weapon}
                idx={idx}
                key={`${weapon.hash}-${idx}`}
                selected={
                  Array.isArray(values)
                    ? values?.includes(weapon.hash)
                    : weapon.hash === values
                }
                onSelect={(currentValue) => {
                  const valueToSet =
                    value === weapon.hash ? undefined : weapon.hash;
                  setValue(valueToSet);
                  if (onChange) {
                    onChange(valueToSet);
                  }
                  // setOpen(false);
                }}
              />
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
