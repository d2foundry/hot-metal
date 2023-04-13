/**
 * @param {Config} config
 */
export function factory(
  config: Config
): (
  this: import('unified').Processor<void, import('nlcst').Root, void, void>,
  options?: Options | undefined
) =>
  | void
  | import('unified').Transformer<import('nlcst').Root, import('nlcst').Root>
export type Root = import('nlcst').Root
export type Config = {
  lang: string
  cuss: Record<string, number>
  pluralize?:
    | {
        singular: (word: string) => string
        plural: (word: string) => string
      }
    | undefined
  ignorePluralize?: string[] | undefined
  regular?: string[] | undefined
}
/**
 * Configuration.
 */
export type Options = {
  /**
   * Phrases *not* to warn about.
   */
  ignore?: string[] | undefined
  /**
   * Minimum *sureness* to warn about, see `cuss`.
   */
  sureness?: 0 | 1 | 2 | undefined
}
