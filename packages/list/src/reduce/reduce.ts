import { List } from '../types'
import { ReduceArity3 } from './types'
import { curry3 } from '@typed/functions'

/**
 * Fold over the values in an array-like object.
 * @name reduce<A, B>(f: (accumulator: B, value: A) => B, seed: B, list: List<A>): B
 */
export const reduce: ReduceArity3 = curry3(function reduce<A, B>(
  f: (acc: B, value: A, index: number) => B,
  seed: B,
  list: List<A>
) {
  const length = list.length
  let acc: B = seed

  for (let i = 0; i < length; ++i) acc = f(acc, list[i], i)

  return acc
})
