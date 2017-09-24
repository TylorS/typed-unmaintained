import { Arity2, curry2 } from '@typed/functions'
import { Index, List } from '../types'

import { chain } from '../chain'
import { map } from '../map'

export const ap: ListAp = curry2(__ap)

export type ListAp = {
  <A, B>(fns: List<Arity2<A, Index, B>>, values: List<A>): Array<B>
  <A, B>(fns: List<Arity2<A, Index, B>>): (values: List<A>) => Array<B>
}

function __ap<A, B>(fns: List<Arity2<A, Index, B>>, values: List<A>): Array<B> {
  return chain((fn: Arity2<A, Index, B>) => map(fn, values), fns)
}
