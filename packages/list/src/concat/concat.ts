import { Concat } from './types'
import { List } from '../types'
import { curry2 } from '@typed/functions'

/**
 * Returns the result of concatenating the given lists or strings.
 * @name concat<A>(list1: List<A>, list2: List<B>): Array<B>
 */
export const concat: Concat = curry2(function<A>(list1: List<A>, list2: List<A>): Array<A> {
  const length1 = list1.length
  const length2 = list2.length
  const newList = Array(length1 + length2)

  for (let i = 0; i < length1; ++i) newList[i] = list1[i]

  for (let i = 0; i < length2; ++i) newList[i + length1] = list2[i]

  return newList
})
