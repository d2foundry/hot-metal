import { useAtom, useSetAtom } from "jotai";
import { inventoryItemsAtom } from "../store";
import { useEffect } from "react";
import { HttpClientConfig } from "bungie-api-ts/http";
import {
  DestinyManifest,
  getDestinyManifest,
  getDestinyManifestSlice,
} from "bungie-api-ts/destiny2";
import { atomWithAsyncStorage } from "../utils/atomWithAsyncStorage";

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
const manifestVersionAtom = atomWithAsyncStorage("manifest_version", "0");

async function getManifest() {
  const destinyManifest = await fetchManifest();
  return destinyManifest;
}

async function getManifestInventoryItemTable(destinyManifest: DestinyManifest) {
  const manifestTables = await getDestinyManifestSlice($http, {
    destinyManifest,
    tableNames: ["DestinyInventoryItemDefinition"],
    language: "en",
  });
  return manifestTables.DestinyInventoryItemDefinition;
}

export const useInventoryItems = () => {
  const setInventoryItems = useSetAtom(inventoryItemsAtom);
  const [lastManifestVersion, setManifestVersion] =
    useAtom(manifestVersionAtom);

  useEffect(() => {
    getManifest().then((res) => {
      if (res.version !== lastManifestVersion) {
        getManifestInventoryItemTable(res).then((invItems) => {
          setManifestVersion(res.version);
          setInventoryItems(invItems);
        });
      }
    });
  }, [lastManifestVersion, setManifestVersion, setInventoryItems]);
};
