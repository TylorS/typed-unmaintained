import { Index, List } from '../types'

import { Maybe } from '@typed/maybe'
import { curry2 } from '@typed/functions'
import { equals } from '@typed/logic'
import { findLastIndex } from '../findLastIndex'

/**
 * Finds the last index of a value in a `List`.
 * @name lastIndexOf<A>(value: A, list: List<A>): Maybe<Index>
 */
export const lastIndexOf: LastIndexOf = curry2(__lastIndexOf)

export type LastIndexOf = {
  <A>(value: A, list: List<A>): Maybe<Index>
  <A>(value: A): (list: List<A>) => Maybe<Index>
}

function __lastIndexOf<A>(value: A, list: List<A>): Maybe<Index> {
  return findLastIndex(equals(value), list)
}
