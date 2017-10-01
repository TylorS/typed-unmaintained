import { List } from '../types'
import { curry2 } from '@typed/functions'
import { length } from '../length'

/**
 * Returns true if a List starts with a search value.
 * @name startsWith<A>(search: List<A>, list: List<A>): boolean
 */
export const startsWith: StartsWith = curry2(__startsWith)

export type StartsWith = {
  <A>(search: List<A>, list: List<A>): boolean
  <A>(search: List<A>): (list: List<A>) => boolean
}

function __startsWith<A>(search: List<A>, list: List<A>): boolean {
  const searchCount = length(search)

  for (let i = 0; i < searchCount; ++i) if (search[i] !== list[i]) return false

  return true
}
