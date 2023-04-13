export default retextProfanitiesFr
export type Options = import('./factory.js').Options
declare const retextProfanitiesFr: (
  this: import('unified').Processor<void, import('nlcst').Root, void, void>,
  options?: import('./factory.js').Options | undefined
) =>
  | void
  | import('unified').Transformer<import('nlcst').Root, import('nlcst').Root>
