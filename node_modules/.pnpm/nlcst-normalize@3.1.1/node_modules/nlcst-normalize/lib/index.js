/**
 * @typedef {import('nlcst').Root} Root
 * @typedef {import('nlcst').Content} Content
 * @typedef {Root|Content} Node
 *
 * @typedef Options
 *   Configuration.
 * @property {boolean | null | undefined} [allowDashes=false]
 *   Do not strip hyphens (`-`).
 *
 *   The default is to remove the hyphen-minus character.
 * @property {boolean | null | undefined} [allowApostrophes=false]
 *   Do not strip apostrophes (`'`).
 *
 *   The default is to remove apostrophes.
 */

import {toString} from 'nlcst-to-string'

/**
 * Normalize a word for easier comparison.
 *
 * Always normalizes smart apostrophes (`’`) to straight apostrophes (`'`) and
 * lowercases alphabetical characters (`[A-Z]`).
 *
 * @param {string | Node | Array<Content>} value
 *   Word.
 * @param {Options | null | undefined} [options]
 *   Configuration.
 * @returns {string}
 *   Normalized word.
 */
export function normalize(value, options) {
  let result = (typeof value === 'string' ? value : toString(value))
    .toLowerCase()
    .replace(/’/g, "'")

  if (!options || !options.allowDashes) {
    result = result.replace(/-/g, '')
  }

  if (!options || !options.allowApostrophes) {
    result = result.replace(/'/g, '')
  }

  return result
}
