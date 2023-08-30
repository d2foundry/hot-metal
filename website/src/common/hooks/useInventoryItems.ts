import { useSetAtom } from "jotai";
import { inventoryItemsAtom } from "../store";
import { useEffect } from "react";
import { HttpClientConfig } from "bungie-api-ts/http";
import {
  getDestinyManifest,
  getDestinyManifestSlice,
} from "bungie-api-ts/destiny2";

async function $http<T>(config: HttpClientConfig) {
  // fill in the API key, handle OAuth, etc., then make an HTTP request using the config.
  const res = await fetch(config.url, {});
  const data: T = await res.json();
  return data;
}

async function fetchManifest() {
  const data = await getDestinyManifest($http);
  return data.Response;
}

async function getManifestInventoryItemTable() {
  const destinyManifest = await fetchManifest();
  const manifestTables = await getDestinyManifestSlice($http, {
    destinyManifest,
    tableNames: ["DestinyInventoryItemDefinition"],
    language: "en",
  });
  return manifestTables.DestinyInventoryItemDefinition;
}

export const useInventoryItems = () => {
  const setInventoryItems = useSetAtom(inventoryItemsAtom);

  useEffect(() => {
    getManifestInventoryItemTable().then((res) => {
      setInventoryItems(res);
    });
  }, [setInventoryItems]);
};
