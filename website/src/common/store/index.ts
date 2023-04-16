import { DestinyInventoryItemDefinition } from "bungie-api-ts/destiny2";
import { atom, useAtomValue } from "jotai";

export const inventoryItemsAtom = atom<{
  [key: number]: DestinyInventoryItemDefinition;
}>({});
export const weaponsAtom = atom((get) => {
  const itemDefs = get(inventoryItemsAtom);
  let res = [];
  for (const itemDef of Object.values(itemDefs)) {
    if (
      itemDef.itemCategoryHashes?.includes(1) &&
      !itemDef.itemCategoryHashes.includes(3109687656)
    ) {
      res.push(itemDef);
    }
  }
  return res;
});
export const useWeapons = () => useAtomValue(weaponsAtom);
