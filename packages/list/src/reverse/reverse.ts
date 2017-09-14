import { List } from '../types'
import { Reverse } from './types'
import { length } from '../length'

/**
 * Reverses the order of values contained in a List.
 * @name reverse<A>(list: List<A>): List<A>
 */
export const reverse: Reverse = function reverse<A>(list: List<A>): List<A> {
  const itemCount = length(list)
  const reversedList = Array(itemCount)

  for (let index = 0; index < itemCount; ++index) reversedList[index] = list[itemCount - 1 - index]

  return reversedList
}
