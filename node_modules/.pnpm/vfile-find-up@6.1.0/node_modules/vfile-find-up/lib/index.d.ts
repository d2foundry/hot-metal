/**
 * Include this file.
 */
export const INCLUDE: 1
/**
 * Stop searching.
 */
export const BREAK: 4
/**
 * Find files or folders upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 *
 * @param test
 *   Things to search for.
 * @param path
 *   Place to search from.
 * @param callback
 *   Callback called when done.
 * @returns
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   files.
 */
export const findUp: ((
  test: Test,
  path: string | null | undefined,
  callback: Callback
) => void) &
  ((test: Test, callback: Callback) => void) &
  ((test: Test, path?: string | null | undefined) => Promise<Array<VFile>>)
/**
 * Find the first file or folder upwards.
 *
 * > 👉 **Note**: files are not read (their `value` is not populated).
 *
 * @param test
 *   Things to search for.
 * @param path
 *   Place to search from.
 * @param callback
 *   Callback called when done.
 * @returns
 *   Nothing when `callback` is given, otherwise a promise that resolves to
 *   a file or `null`.
 */
export const findUpOne: ((
  test: Test,
  path: string | null | undefined,
  callback: CallbackOne
) => void) &
  ((test: Test, callback: CallbackOne) => void) &
  ((test: Test, path?: string | null | undefined) => Promise<VFile | null>)
export type VFile = import('vfile').VFile
/**
 * Handle a file.
 */
export type Assert = (file: VFile) => boolean | null | number | undefined | void
/**
 * Callback called when done.
 */
export type Callback = (error: Error | null, files: Array<VFile>) => void
/**
 * Callback called when done finding one file.
 */
export type CallbackOne = (error: Error | null, file: VFile | null) => void
/**
 * Things to search for.
 *
 * For strings, the `basename` or `extname` of files must match them.
 * For arrays, any test in them must match.
 */
export type Test = Array<Assert | string> | Assert | string
