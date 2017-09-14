import { Index, List } from '../types'
import { Maybe, map } from '@typed/maybe'

import { curry2 } from '@typed/functions'
import { findLastIndex } from '../findLastIndex'

/**
 * Find the last value contained in a list.
 * @name findLast<A>(predicate: Predicate<A>, list: List<A>): Maybe<A>
 */
export const findLast: FindLast = curry2(__findLast)

export type FindLast = {
  <A>(predicate: (value: any) => boolean, list: List<A>): Maybe<A>
  <A>(predicate: (value: any) => boolean): (list: List<A>) => Maybe<A>
}

const propFlipped = <A>(list: List<A>) => (index: Index): A => list[index]

function __findLast<A>(predicate: (value: any) => boolean, list: List<A>): Maybe<A> {
  return map(propFlipped(list), findLastIndex(predicate, list))
}
