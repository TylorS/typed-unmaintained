import { List } from '../types'

/**
 * @name RightReducer
 * @type
 */
export type RightReducer<A, B> = (value: A, accumulator: B, index: number) => B

export type ReduceRightArity3 = {
  <A, B>(f: RightReducer<A, B>, seed: B, list: List<A>): B
  <A, B>(f: RightReducer<A, B>, seed: B): ReduceRightArity1<A, B>
  <A, B>(f: RightReducer<A, B>): ReduceRightArity2<A, B>
}

export interface ReduceRightArity2<A, B> {
  (seed: B, list: List<A>): B
  (seed: B): ReduceRightArity1<A, B>
}

export interface ReduceRightArity1<A, B> {
  (list: List<A>): B
}
