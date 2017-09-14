import { ReduceRightArity3, RightReducer } from './types'

import { List } from '../types'
import { curry3 } from '@typed/functions'

/**
 * Fold over the values in a list from right-to-left.
 * @name reduceRight<A, B>(f: (value: A, acc: B) => B, seed: B, list: List<A>): B
 */
export const reduceRight: ReduceRightArity3 = curry3(function reduce<A, B>(
  f: RightReducer<A, B>,
  seed: B,
  list: List<A>
): B {
  const length = list.length
  let acc: B = seed

  for (let i = length - 1; i >= 0; --i) acc = f(list[i], acc, i)

  return acc
})
