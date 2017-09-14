import { Index, List } from '../types'
import { Maybe, map } from '@typed/maybe'

import { curry2 } from '@typed/functions'
import { findIndex } from '../findIndex'

/**
 * Find the value contained in a list.
 * @name find<A>(predicate: Predicate<A>, list: List<A>): Maybe<A>
 */
export const find: Find = curry2(__find) as Find

export type Find = {
  <A>(predicate: (value: any) => boolean, list: List<A>): Maybe<Readonly<A>>
  (predicate: (value: any) => boolean): <A>(list: List<A>) => Maybe<Readonly<A>>
}

const prop = <A>(list: List<A>) => (index: Index): A => list[index]

function __find<A>(predicate: (value: any) => boolean, list: List<A>): Maybe<A> {
  return map(prop(list), findIndex(predicate, list))
}
