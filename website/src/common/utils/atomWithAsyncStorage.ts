import { get, set, del } from "idb-keyval";
import { atomWithStorage } from "jotai/utils";

export function atomWithAsyncStorage<T>(key: string, initial: T) {
  // const store = new Store(undefined, storeName);
  return atomWithStorage<T>(key, initial, {
    setItem: (key, value) => set(key, value),
    getItem: (key) =>
      get<T>(key).then((value) => {
        // console.log("get1", value, initial, storeName);
        if (value !== undefined) {
          return value;
        }
        // console.log("get2", value, initial, storeName);
        if (initial !== undefined) {
          set(key, initial);
        }
        // console.log("get3", value, initial, storeName);
        return initial;
      }),
    removeItem: (key) => del(key),
  });
}
