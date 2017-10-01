import { Index, List } from '../types'

import { curry2 } from '@typed/functions'
import { drop } from '../drop'
import { length } from '../length'

/**
 * Returns true if a list contains a search value.
 * @name include<A>(search: List<A>, list: List<A>): boolean
 */
export const includes: Includes = curry2(__includes)

export type Includes = {
  <A>(search: List<A>, list: List<A>): boolean
  <A>(search: List<A>): (list: List<A>) => boolean
}

function __includes<A>(search: List<A>, list: List<A>): boolean {
  const indexes = __indexesOf(search[0], list)

  return indexes.some(__includesFromIndex(drop(1, search), list))
}

function __includesFromIndex<A>(search: List<A>, list: List<A>) {
  const searchCount = length(search)

  return function(index: Index): boolean {
    for (let i = 1; i < searchCount; ++i) if (search[i] !== list[index + i]) return false

    return true
  }
}

function __indexesOf<A>(value: A, list: List<A>): Array<Index> {
  const itemCount = length(list)
  const indexes = []

  for (let i = 0; i < itemCount; ++i) if (list[i] === value) indexes.push(i)

  return indexes
}
