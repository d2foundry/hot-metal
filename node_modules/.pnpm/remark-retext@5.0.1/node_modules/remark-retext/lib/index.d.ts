export default remarkRetext
export type Node = import('unist').Node
export type MdastRoot = import('mdast').Root
export type ParserInstance = import('mdast-util-to-nlcst').ParserInstance
export type ParserConstructor = import('mdast-util-to-nlcst').ParserConstructor
export type Options = import('mdast-util-to-nlcst').Options
export type Processor = import('unified').Processor<any, any, any, any>
export type Parser = import('unified').Parser<any>
/**
 * Plugin to support retext.
 *
 * *   If a destination processor is given, runs the plugins attached to it with
 *     the new nlcst tree (bridge-mode).
 *     This given processor must have a parser attached (this can be done by
 *     using the plugin `retext-english` or similar) and should use other retext
 *     plugins.
 * *   If a parser is given, runs further plugins attached to the same processor
 *     with the new tree (mutate-mode).
 *     Such parsers are exported by packages like `retext-english` as `Parser`.
 *     You should use other retext plugins after `remark-retext`.
 *
 * @param destination
 *   Either a processor (`unified().use(retextEnglish)…`) or a parser.
 * @param options
 *   Configuration passed to `mdast-util-to-nlcst`.
 */
declare const remarkRetext: import('unified').Plugin<
  [Processor, Options?] | [Processor],
  MdastRoot,
  MdastRoot
> &
  import('unified').Plugin<[Parser, Options?] | [Parser], MdastRoot, Node>
