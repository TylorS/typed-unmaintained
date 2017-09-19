import { Arity2, curry2 } from '@typed/functions'
import { Index, List } from '../types'

export const map: Map = curry2(__map)

export type Map = {
  <A, B>(f: Arity2<A, Index, B>, list: List<A>): Array<B>
  <A, B>(f: Arity2<A, Index, B>): (list: List<A>) => List<B>
}

function __map<A, B>(f: Arity2<A, Index, B>, list: List<A>): Array<B> {
  const itemCount = list.length
  const newList = Array(itemCount)

  for (let i = 0; i < itemCount; ++i) newList[i] = f(list[i], i)

  return newList
}
