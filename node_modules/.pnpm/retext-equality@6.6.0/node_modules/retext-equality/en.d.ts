export default retextEquality
declare const retextEquality: (
  this: import('unified').Processor<void, import('nlcst').Root, void, void>,
  options?: import('./lib/factory.js').Options | undefined
) =>
  | void
  | import('unified').Transformer<import('nlcst').Root, import('nlcst').Root>
