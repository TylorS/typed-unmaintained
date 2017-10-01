import { List } from '../types'
import { curry2 } from '@typed/functions'
import { length } from '../length'

/**
 * Returns true if a list ends with a certain search.
 * @name endsWith<A>(expected: List<A>, list: List<A>): boolean
 */
export const endsWith: EndsWith = curry2(__endsWith)

export type EndsWith = {
  <A>(expected: List<A>, list: List<A>): boolean
  <A>(expected: List<A>): (list: List<A>) => boolean
}

function __endsWith<A>(expected: List<A>, list: List<A>): boolean {
  const itemCount = length(list)
  const expectedCount = length(expected)
  const startingIndex = itemCount - expectedCount

  if (startingIndex < 0) return false

  for (let i = 0; i < expectedCount; ++i) if (expected[i] !== list[startingIndex + i]) return false

  return true
}
