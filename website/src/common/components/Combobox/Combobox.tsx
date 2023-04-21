"use client";

import * as React from "react";
import { CheckIcon, CaretSortIcon } from "@radix-ui/react-icons";

import { cn } from "@/common/utils";
import { Button } from "@/common/components/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
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

interface ComboboxProps {
  onChange: (value?: number) => void;
  values: number[];
  id: string;
}

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
          <span className="text-graySolid">{"Select weapons..."}</span>
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0">
        <Command loop>
          <CommandInput placeholder="Search weapons..." />
          <CommandEmpty>No weapons found.</CommandEmpty>
          <CommandList>
            {weapons.map((weapon, idx) => (
              <CommandItem
                key={`${weapon.hash}-${idx}`}
                value={`${weapon.displayProperties.name} : ${weapon.hash}`}
                onSelect={(currentValue) => {
                  const valueToSet =
                    value === weapon.hash ? undefined : weapon.hash;
                  setValue(valueToSet);
                  if (onChange) {
                    onChange(valueToSet);
                  }
                  // setOpen(false);
                }}
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
                    values.includes(weapon.hash) ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
