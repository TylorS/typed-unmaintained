import { List } from '../types'

/**
 * @name Reducer
 * @type
 */
export type Reducer<A, B> = (seed: B, value: A, index: number) => B

export type ReduceArity3 = {
  <A, B>(f: Reducer<A, B>, seed: B, list: List<A>): B
  <A, B>(f: Reducer<A, B>, seed: B): ReduceArity1<A, B>
  <A, B>(f: Reducer<A, B>): ReduceArity2<A, B>
}

export type ReduceArity2<A, B> = {
  (seed: B, list: List<A>): B
  (seed: B): ReduceArity1<A, B>
}

export type ReduceArity1<A, B> = {
  (list: List<A>): B
}
