/**
 * Alex (markdown).
 *
 * @param {Input} value
 * @param {Options} [config]
 */
export function markdown(value: Input, config?: Options): VFile
/**
 * Alex (MDX).
 *
 * @param {Input} value
 * @param {Options} [config]
 */
export function mdx(value: Input, config?: Options): VFile
/**
 * Alex (HTML).
 *
 * @param {Input} value
 * @param {Options} [config]
 */
export function html(value: Input, config?: Options): VFile
/**
 * Alex (plain text).
 *
 * @param {Input} value
 * @param {Options} [config]
 */
export function text(value: Input, config?: Options): VFile
export default markdown
export type Root = import('nlcst').Root
export type FilterOptions = import('./filter.js').Options
export type NoBinaryOption = boolean | undefined
export type SurenessOption = 0 | 1 | 2 | undefined
export type TextOptions = {
  noBinary: NoBinaryOption
  sureness: SurenessOption
}
export type OptionsObject = {
  noBinary?: NoBinaryOption
  profanitySureness?: SurenessOption
} & FilterOptions
export type Input = import('vfile').VFileCompatible
export type Options = OptionsObject | string[] | undefined
import {VFile} from 'vfile'
