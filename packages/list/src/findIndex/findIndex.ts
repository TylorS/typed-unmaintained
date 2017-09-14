import { Index, List } from '../types'
import { Maybe, Nothing } from '@typed/maybe'

import { curry2 } from '@typed/functions'
import { length } from '../length'

/**
 * Find the index of a value in a list.
 * @name findIndex<A>(predicate: Predicate<A>, list: List<A>): Maybe<Index>
 */
export const findIndex: FindIndex = curry2(__findIndex)

export type FindIndex = {
  <A>(predicate: (value: any) => boolean, list: List<A>): Maybe<Index>
  (predicate: (value: any) => boolean): <A>(list: List<A>) => Maybe<Index>
}

function __findIndex<A>(predicate: (value: A) => boolean, list: List<A>): Maybe<Index> {
  const itemCount = length(list)

  for (let i = 0; i < itemCount; ++i) if (predicate(list[i])) return Maybe.of(i)

  return Nothing
}
