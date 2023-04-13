/**
 * Quote a value.
 *
 * @param value
 *   Value(s) to wrap in quotes
 * @param [open='"']
 *   Opening quote
 * @param [close=open]
 *   Closing quote
 */
export const quotation =
  /**
   * @type {{
   *   (value: string, open?: string, close?: string): string
   *   (value: string[], open?: string, close?: string): string[]
   * }}
   */
  (
    /**
     * @param {string|Array<string>} value
     * @param {string} open
     * @param {string} close
     * @returns {string|string[]}
     */
    function (value, open, close) {
      const start = open || '"'
      const end = close || start
      /** @type {string[]} */
      const result = []
      let index = -1

      if (Array.isArray(value)) {
        while (++index < value.length) {
          result[index] = start + value[index] + end
        }

        return result
      }

      if (typeof value === 'string') {
        return start + value + end
      }

      throw new TypeError('Expected string or array of strings')
    }
  )
