import { List } from '../types'

export type UpdateArity3 = {
  <A>(index: number, value: A, list: List<A>): Array<A>

  (index: number): UpdateArity2
  <A>(index: number, value: A): UpdateArity1<A>
}

export type UpdateArity2 = {
  <A>(value: A, list: List<A>): Array<A>
  <A>(value: A): UpdateArity1<A>
}

export type UpdateArity1<A> = {
  (list: List<A>): Array<A>
}
