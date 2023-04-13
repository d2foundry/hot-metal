/**
 * @param {Pattern[]} patterns
 * @param {string} lang
 */
export function factory(
  patterns: Pattern[],
  lang: string
): (
  this: import('unified').Processor<void, import('nlcst').Root, void, void>,
  options?: Options | undefined
) =>
  | void
  | import('unified').Transformer<import('nlcst').Root, import('nlcst').Root>
export type Root = import('nlcst').Root
export type Sentence = import('nlcst').Sentence
export type SentenceContent = import('nlcst').SentenceContent
export type Content = import('nlcst').Content
export type Parent = import('nlcst').Parent
export type VFile = import('vfile').VFile
export type SearchHandle = import('nlcst-search').Handler
export type Pattern = import('./en.js').Pattern
export type Match = {
  type: string
  parent: Parent
  nodes: Content[]
  start: number
  end: number
}
export type Options = {
  ignore?: string[] | undefined
  noBinary?: boolean | undefined
}
