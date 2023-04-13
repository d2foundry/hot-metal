export default rehypeRetext
export type Node = import('unist').Node
export type HastRoot = import('hast').Root
export type ParserInstance =
  import('hast-util-to-nlcst/lib/index.js').ParserInstance
export type ParserConstructor =
  import('hast-util-to-nlcst/lib/index.js').ParserConstructor
export type Processor = import('unified').Processor<any, any, any, any>
export type Parser = import('unified').Parser<any>
/**
 * Plugin to bridge or mutate to retext.
 *
 * If a destination processor is given, runs the destination with the new nlcst
 * tree (bridge-mode).
 * If a parser is given, returns the nlcst tree: further plugins run on that
 * tree (mutate-mode).
 *
 * @param options
 *   Either a processor (`unified().use(retextEnglish)…`) or a parser.
 */
declare const rehypeRetext: import('unified').Plugin<
  [import('unified').Processor<any, any, any, any>],
  import('hast').Root,
  import('hast').Root
> &
  import('unified').Plugin<
    [Parser],
    import('hast').Root,
    import('unist').Node<import('unist').Data>
  >
