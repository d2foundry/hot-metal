/**
 * @typedef {import('vfile').VFile} VFile
 */

/**
 * @callback Assert
 *   Handle a file.
 * @param {VFile} file
 *   File to handle.
 * @returns {boolean | null | number | undefined | void}
 *   How to handle this file.
 *
 *   `true` is treated as `INCLUDE`.
 *
 * @callback Callback
 *   Callback called when done.
 * @param {Error | null} error
 *   Error.
 *
 *   > 👉 **Note**: Errors are currently never passed.
 * @param {Array<VFile>} files
 *   Files.
 * @returns {void}
 *   Nothing.
 *
 * @callback CallbackOne
 *   Callback called when done finding one file.
 * @param {Error | null} error
 *   Error.
 *
 *   > 👉 **Note**: Errors are currently never passed
 * @param {VFile | null} file
 *   File.
 * @returns {void}
 *   Nothing.
 *
 * @typedef {Array<Assert | string> | Assert | string} Test
 *   Things to search for.
 *
 *   For strings, the `basename` or `extname` of files must match them.
 *   For arrays, any test in them must match.
 */

// Note: using callback style is likely faster here as we could walk into tons
// of folders.
import fs from 'node:fs'
import path from 'node:path'
import process from 'node:process'
import {toVFile} from 'to-vfile'

// To do: use `URL`?
// To do: next major: rename to `findUpAll`?

/**
 * Include this file.
 */
export const INCLUDE = 1

/**
 * Stop searching.
 */
export const BREAK = 4

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
export const findUp =
  /**
   * @type {(
   *   ((test: Test, path: string | null | undefined, callback: Callback) => void) &
   *   ((test: Test, callback: Callback) => void) &
   *   ((test: Test, path?: string | null | undefined) => Promise<Array<VFile>>)
   * )}
   */
  (
    /**
     * @param {Test} test
     * @param {Callback | string | null | undefined} [path]
     * @param {Callback | null | undefined} [callback]
     * @returns {Promise<Array<VFile>> | undefined}
     */
    function (test, path, callback) {
      /** @type {Callback | null | undefined} */
      let callbackAll
      /** @type {Promise<Array<VFile>>} */
      let promise

      if (typeof path === 'function') {
        callbackAll = path
        promise = find(test, undefined, false)
      } else {
        callbackAll = callback
        promise = find(test, path || undefined, false)
      }

      if (!callbackAll) {
        return promise
      }

      // @ts-expect-error: `callbackAll` is defined.
      promise.then((files) => callbackAll(null, files), callbackAll)
    }
  )

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
export const findUpOne =
  /**
   * @type {(
   *   ((test: Test, path: string | null | undefined, callback: CallbackOne) => void) &
   *   ((test: Test, callback: CallbackOne) => void) &
   *   ((test: Test, path?: string | null | undefined) => Promise<VFile | null>)
   * )}
   */
  (
    /**
     * @param {Test} test
     * @param {CallbackOne | string | null | undefined} [path]
     * @param {CallbackOne | null | undefined} [callback]
     * @returns {Promise<VFile | null> | undefined}
     */
    function (test, path, callback) {
      /** @type {CallbackOne | null | undefined} */
      let callbackOne
      /** @type {Promise<Array<VFile>>} */
      let promise

      if (typeof path === 'function') {
        callbackOne = path
        promise = find(test, undefined, true)
      } else {
        callbackOne = callback
        promise = find(test, path || undefined, true)
      }

      if (!callbackOne) {
        return promise.then(one)
      }

      // @ts-expect-error: `callbackOne` is defined.
      promise.then((files) => callbackOne(null, one(files)), callbackOne)
    }
  )

/**
 * Find files.
 *
 * @param {Test} test
 *   Things to search for.
 * @param {string | undefined} base
 *   Place to search from.
 * @param {boolean} one
 *   Stop at one file.
 * @returns {Promise<Array<VFile>>}
 *   Promise that resolves to files.
 */
async function find(test, base, one) {
  const assert = convert(test)
  /** @type {Array<VFile>} */
  const results = []

  let current = base ? path.resolve(base) : process.cwd()

  return new Promise(executor)

  /**
   * @param {(files: Array<VFile>) => void} resolve
   */
  function executor(resolve) {
    once(current)

    /**
     * Test a file and check what should be done with the resulting file.
     *
     * @param {string} filePath
     * @returns {boolean | undefined}
     */
    function handle(filePath) {
      const file = toVFile(filePath)
      const result = Number(assert(file))

      if ((result & INCLUDE) === INCLUDE) {
        if (one) {
          resolve([file])
          return true
        }

        results.push(file)
      }

      if ((result & BREAK) === BREAK) {
        resolve(one ? [] : results)
        return true
      }
    }

    /**
     * Check one directory.
     *
     * @param {string} child
     * @returns {void}
     */
    function once(child) {
      if (handle(current) === true) {
        return
      }

      fs.readdir(current, function (error, entries) {
        let index = -1

        if (error) {
          entries = []
        }

        while (++index < entries.length) {
          const entry = entries[index]

          if (
            entry !== child &&
            handle(path.resolve(current, entry)) === true
          ) {
            return
          }
        }

        child = current
        current = path.dirname(current)

        if (current === child) {
          resolve(one ? [] : results)
          return
        }

        once(path.basename(child))
      })
    }
  }
}

/**
 * Convert `test`
 *
 * @param {Test} test
 * @returns {Assert}
 */
function convert(test) {
  return typeof test === 'function'
    ? test
    : typeof test === 'string'
    ? testString(test)
    : multiple(test)
}

/**
 * Check multiple tests.
 *
 * @param {Array<string|Assert>} test
 * @returns {Assert}
 */
function multiple(test) {
  /** @type {Array<Assert>} */
  const tests = []
  let index = -1

  while (++index < test.length) {
    tests[index] = convert(test[index])
  }

  return check

  /** @type {Assert} */
  function check(file) {
    let index = -1

    while (++index < tests.length) {
      const result = tests[index](file)

      if (result) {
        return result
      }
    }

    return false
  }
}

/**
 * Wrap a string given as a test.
 *
 * @param {string} test
 * @returns {Assert}
 */
function testString(test) {
  return check

  /** @type {Assert} */
  function check(file) {
    return test === file.basename || test === file.extname
  }
}

/**
 * @param {Array<VFile>} files
 * @returns {VFile | null}
 */
function one(files) {
  return files[0] || null
}
