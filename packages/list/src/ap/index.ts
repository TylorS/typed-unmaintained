import { Arity2, curry2 } from '@typed/functions'
import { Index, List } from '../types'

import { chain } from '../chain'
import { map } from '../map'

export const ap: ListAp = curry2(__ap)

export type ListAp = {
  <A, B>(fns: List<Arity2<A, Index, B>>, values: List<A>): List<B>
  <A, B>(fns: List<Arity2<A, Index, B>>): (values: List<A>) => List<B>
}

function __ap<A, B>(fns: List<Arity2<A, Index, B>>, values: List<A>): List<B> {
  return chain(fn => map(fn, values), fns)
}
