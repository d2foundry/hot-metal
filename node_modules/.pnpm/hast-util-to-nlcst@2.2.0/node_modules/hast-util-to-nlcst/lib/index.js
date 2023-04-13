/**
 * @typedef {import('unist').Point} Point
 *
 * @typedef {import('nlcst').Root} NlcstRoot
 * @typedef {import('nlcst').Paragraph} NlcstParagraph
 * @typedef {import('nlcst').WhiteSpace} NlcstWhiteSpace
 * @typedef {import('nlcst').Source} NlcstSource
 * @typedef {import('nlcst').Content} NlcstContent
 * @typedef {import('nlcst').SentenceContent} NlcstSentenceContent
 * @typedef {NlcstRoot|NlcstContent} NlcstNode
 *
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Content} HastContent
 * @typedef {import('hast').ElementContent} HastElementContent
 * @typedef {HastRoot|HastContent} HastNode
 * @typedef {Extract<HastNode, import('unist').Parent>} HastParent
 *
 * @typedef {import('vfile').VFile} VFile
 *
 * @typedef {{
 *   parse(nodes: NlcstContent[]): NlcstRoot
 *   tokenizeSource(value: string): NlcstSource
 *   tokenizeWhiteSpace(value: string): NlcstWhiteSpace
 *   tokenizeParagraph(nodes: NlcstSentenceContent[]): NlcstParagraph
 *   tokenize(value: string): NlcstSentenceContent[]
 * }} ParserInstance
 * @typedef {new () => ParserInstance} ParserConstructor
 */

import {embedded} from 'hast-util-embedded'
import {convertElement} from 'hast-util-is-element'
import {phrasing} from 'hast-util-phrasing'
import {toString} from 'hast-util-to-string'
import {whitespace} from 'hast-util-whitespace'
import {toString as nlcstToString} from 'nlcst-to-string'
import {pointStart} from 'unist-util-position'
import {location} from 'vfile-location'

const source = convertElement(['code', dataNlcstSourced])
const ignore = convertElement([
  'script',
  'style',
  'svg',
  'math',
  'del',
  dataNlcstIgnore
])
const explicit = convertElement(['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

const flowAccepting = convertElement([
  'body',
  'article',
  'section',
  'blockquote',
  'nav',
  'aside',
  'header',
  'footer',
  'address',
  'li',
  'dt',
  'dd',
  'figure',
  'figcaption',
  'div',
  'main',
  'caption',
  'td',
  'th',
  'form',
  'fieldset',
  'details',
  'dialog'
])

/**
 * Transform `tree` to nlcst.
 *
 * @param {HastNode} tree
 * @param {VFile} file
 * @param {ParserInstance|ParserConstructor} Parser
 * @returns {NlcstRoot}
 */
export function toNlcst(tree, file, Parser) {
  // Warn for invalid parameters.
  if (!tree || !tree.type) {
    throw new Error('hast-util-to-nlcst expected node')
  }

  if (!file || !file.messages) {
    throw new Error('hast-util-to-nlcst expected file')
  }

  // Construct parser.
  if (!Parser) {
    throw new Error('hast-util-to-nlcst expected parser')
  }

  if (!pointStart(tree).line || !pointStart(tree).column) {
    throw new Error('hast-util-to-nlcst expected position on nodes')
  }

  const doc = String(file)
  const loc = location(doc)
  const parser = 'parse' in Parser ? Parser : new Parser()
  /** @type {NlcstContent[]} */
  const results = []

  find(tree)

  return {
    type: 'RootNode',
    children: results,
    position: {start: loc.toPoint(0), end: loc.toPoint(doc.length)}
  }

  /**
   * @param {HastNode} node
   */
  function find(node) {
    if (node.type === 'root') {
      findAll(node.children)
    } else if (node.type === 'element' && !ignore(node)) {
      if (explicit(node)) {
        // Explicit paragraph.
        add(node)
      } else if (flowAccepting(node)) {
        // Slightly simplified version of: <https://html.spec.whatwg.org/#paragraphs>.
        implicit(flattenAll(node.children))
      } else {
        // Dig deeper.
        findAll(node.children)
      }
    }
  }

  /**
   * @param {HastContent[]} children
   */
  function findAll(children) {
    let index = -1

    while (++index < children.length) {
      find(children[index])
    }
  }

  /**
   * @param {HastElementContent[]} children
   * @returns {HastElementContent[]}
   */
  function flattenAll(children) {
    /** @type {HastElementContent[]} */
    const results = []
    let index = -1

    while (++index < children.length) {
      const child = children[index]

      // See: <https://html.spec.whatwg.org/multipage/dom.html#paragraphs>
      if (
        child.type === 'element' &&
        (child.tagName === 'a' ||
          child.tagName === 'ins' ||
          child.tagName === 'del' ||
          child.tagName === 'map')
      ) {
        results.push(...flattenAll(child.children))
      } else {
        results.push(child)
      }
    }

    return results
  }

  /**
   * @param {HastElementContent|HastElementContent[]} node
   */
  function add(node) {
    /** @type {NlcstSentenceContent[]|undefined} */
    const result = Array.isArray(node) ? all(node) : one(node)

    if (result && result.length > 0) {
      results.push(parser.tokenizeParagraph(result))
    }
  }

  /**
   * @param {HastElementContent[]} children
   */
  function implicit(children) {
    let index = -1
    let start = -1
    /** @type {boolean|undefined} */
    let viable

    while (++index <= children.length) {
      const child = children[index]

      if (child && phrasing(child)) {
        if (start === -1) start = index

        if (!viable && !embedded(child) && !whitespace(child)) {
          viable = true
        }
      } else if (child && start === -1) {
        find(child)
        start = index + 1
      } else if (start !== -1) {
        ;(viable ? add : findAll)(children.slice(start, index))

        if (child) {
          find(child)
        }

        viable = undefined
        start = -1
      }
    }
  }

  /**
   * Convert `node` (hast) to nlcst.
   *
   * @param {HastContent} node
   * @returns {NlcstSentenceContent[]|undefined}
   */
  function one(node) {
    /** @type {NlcstSentenceContent[]|undefined} */
    let replacement
    /** @type {boolean|undefined} */
    let change

    if (node.type === 'text') {
      replacement = parser.tokenize(node.value)
      change = true
    } else if (node.type === 'element' && !ignore(node)) {
      if (node.tagName === 'wbr') {
        replacement = [parser.tokenizeWhiteSpace(' ')]
        change = true
      } else if (node.tagName === 'br') {
        replacement = [parser.tokenizeWhiteSpace('\n')]
        change = true
      } else if (source(node)) {
        replacement = [parser.tokenizeSource(toString(node))]
        change = true
      } else {
        replacement = all(node.children)
      }
    }

    return change && replacement
      ? patch(replacement, loc, loc.toOffset(pointStart(node)))
      : replacement
  }

  /**
   * Convert all `children` (hast) to nlcst.
   *
   * @param {HastContent[]} children
   * @returns {NlcstSentenceContent[]}
   */
  function all(children) {
    /** @type {NlcstSentenceContent[]} */
    const results = []
    let index = -1

    while (++index < children.length) {
      results.push(...(one(children[index]) || []))
    }

    return results
  }

  /**
   * Patch a position on each node in `nodes`.
   * `offset` is the offset in `file` this run of content starts at.
   *
   * Note that nlcst nodes are concrete, meaning that their starting and ending
   * positions can be inferred from their content.
   *
   * @template {NlcstContent[]} T
   * @param {T} nodes
   * @param {ReturnType<location>} location
   * @param {number} offset
   * @returns {T}
   */
  function patch(nodes, location, offset) {
    let index = -1
    let start = offset

    while (++index < nodes.length) {
      const node = nodes[index]

      if ('children' in node) {
        patch(node.children, location, start)
      }

      const end = start + nlcstToString(node).length

      node.position = {
        start: location.toPoint(start),
        end: location.toPoint(end)
      }

      start = end
    }

    return nodes
  }
}

/**
 * @param {HastElement} node
 * @returns {boolean}
 */
function dataNlcstSourced(node) {
  return Boolean(node.properties && node.properties.dataNlcst === 'source')
}

/**
 * @param {HastElement} node
 * @returns {boolean}
 */
function dataNlcstIgnore(node) {
  return Boolean(node.properties && node.properties.dataNlcst === 'ignore')
}
