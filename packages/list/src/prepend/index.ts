import { List } from '../types'
import { curry2 } from '@typed/functions'
import { length } from '../length'

/**
 * Puts at value at the beginning of a `List`.
 * @name prepend<A>(value: A, list: List<A>): List<A>
 */
export const prepend = curry2(__prepend)

function __prepend<A>(value: A, list: List<A>): List<A> {
  const itemCount = length(list) + 1
  const newList = Array(itemCount)

  newList[0] = value

  for (let i = 1; i < itemCount; ++i) newList[i] = list[i - 1]

  return newList
}
