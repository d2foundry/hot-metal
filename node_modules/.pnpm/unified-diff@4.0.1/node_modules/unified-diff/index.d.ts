/** @type {import('unified').Plugin<[]>} */
export default function diff():
  | void
  | import('unified').Transformer<
      import('unist').Node<import('unist').Data>,
      import('unist').Node<import('unist').Data>
    >
