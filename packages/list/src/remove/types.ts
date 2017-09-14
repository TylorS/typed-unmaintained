import { List } from '../types'

export type RemoveArity3 = {
  <A>(index: number, amount: number, list: List<A>): List<A>
  (index: number, amount: number): RemoveArity1
  (index: number): RemoveArity2
}

export type RemoveArity2 = {
  <A>(amount: number, list: List<A>): List<A>
  (amount: number): RemoveArity1
}

export type RemoveArity1 = <A>(list: List<A>) => List<A>
