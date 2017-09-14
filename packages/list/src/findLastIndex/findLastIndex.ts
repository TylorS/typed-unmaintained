import { Index, List } from '../types'
import { Maybe, Nothing } from '@typed/maybe'

import { curry2 } from '@typed/functions'
import { length } from '../length'

/**
 * Find the last index of a value in a list.
 * @name findLastIndex<A>(predicate: Predicate<A>, list: List<A>): Maybe<Index>
 */
export const findLastIndex: FindLastIndex = curry2(__findLastIndex)

export type FindLastIndex = {
  <A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index>
  <A>(predicate: (value: A) => boolean): (list: List<A>) => Maybe<Index>
}

function __findLastIndex<A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index> {
  const itemCount = length(list)

  for (let i = itemCount - 1; i >= 0; --i) if (predicate(list[i])) return Maybe.of(i)

  return Nothing
}
