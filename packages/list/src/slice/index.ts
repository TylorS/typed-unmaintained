import { Maybe, fromMaybe } from '@typed/Maybe'

import { List } from '../types'
import { arrayFrom } from '../arrayFrom'
import { curry3 } from '@typed/functions'

/**
 * Slices a list between two indexes.
 * @name slice<A>(start: number, end: Maybe<number>, list: List<A>): List<A>
 */
export const slice: Slice = curry3(__slice)

export type Slice = {
  <A>(startIndex: number, endIndex: Maybe<number>, list: List<A>): List<A>
  <A>(startIndex: number, endIndex: Maybe<number>): (list: List<A>) => List<A>
  <A>(startIndex: number): {
    (endIndex: Maybe<number>, list: List<A>): List<A>
    (endIndex: Maybe<number>): (list: List<A>) => List<A>
  }
}

function __slice<A>(startIndex: number, endIndex: Maybe<number>, list: List<A>): List<A> {
  return arrayFrom(list).slice(startIndex, fromMaybe(void 0, endIndex))
}
