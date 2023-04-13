/**
 * @typedef Pattern
 * @property {string} id
 * @property {'or'|'basic'} type
 * @property {string[]} categories
 * @property {Record<string, string>} [considerate]
 * @property {Record<string, string>} inconsiderate
 * @property {string} [condition]
 * @property {string} [note]
 * @property {boolean} [apostrophe]
 */
/** @type {Pattern[]} */
export const patterns: Pattern[]
export type Pattern = {
  id: string
  type: 'or' | 'basic'
  categories: string[]
  considerate?: Record<string, string> | undefined
  inconsiderate: Record<string, string>
  condition?: string | undefined
  note?: string | undefined
  apostrophe?: boolean | undefined
}
