import { Arity2, curry2 } from '@typed/functions'
import { Index, List } from '../types'

import { flatten } from '../flatten'
import { map } from '../map'

export const chain: ListChain = curry2(__chain)

export type ListChain = {
  <A, B>(f: Arity2<A, Index, List<B>>, list: List<A>): Array<B>
  <A, B>(f: Arity2<A, Index, List<B>>): (list: List<A>) => Array<B>
}

function __chain<A, B>(f: Arity2<A, Index, List<B>>, list: List<A>): Array<B> {
  return flatten<B>(map(f, list))
}
