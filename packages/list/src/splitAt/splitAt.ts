import { Index, List } from '../types'

import { Maybe } from '@typed/maybe'
import { curry2 } from '@typed/functions'
import { slice } from '../slice'

/**
 * Splits a `List` at a given index.
 * @name splitAt<A>(index: Index, list: List<A>): [List<A>, List<A>]
 */
export const splitAt: SplitAt = curry2(__splitAt)

export type SplitAt = {
  <A>(index: Index, list: List<A>): [List<A>, List<A>]
  <A>(index: Index): (list: List<A>) => [List<A>, List<A>]
}

function __splitAt<A>(index: Index, list: List<A>): [List<A>, List<A>] {
  return [slice(0, Maybe.of(index), list), slice(index, Maybe.of(list.length), list)]
}
