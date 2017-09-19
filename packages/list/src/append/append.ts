import { List } from '../types'
import { curry2 } from '@typed/functions'
import { length } from '../length'

/**
 * Appends a value to the end of a list.
 * @name append<A>(value: A, list: List<A>): Array<A>
 */
export const append: Append = curry2(__append)

export type Append = {
  <A>(value: A, list: List<A>): Array<A>
  <A>(value: A): (list: List<A>) => List<A>
}

function __append<A>(value: A, list: List<A>): Array<A> {
  const itemCount = length(list)
  const newList = Array(itemCount + 1)

  for (let i = 0; i < itemCount; ++i) newList[i] = list[i]

  newList[itemCount] = value

  return newList
}
