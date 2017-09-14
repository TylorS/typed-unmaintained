import { List } from '../types'
import { curry2 } from '@typed/functions'

/**
 * Applies a function to each item in a `List`, returning the list after.
 * @name forEach<A>(f: (value: A, index: number) => any, list: List<A>): List<A>
 */
export const forEach: ForEach = curry2(__forEach)

export type ForEach = {
  <A>(f: (value: A, index: number) => any, list: List<A>): List<A>
  <A>(f: (value: A, index: number) => any): (list: List<A>) => List<A>
}

function __forEach<A>(f: (value: A, index: number) => any, list: List<A>): List<A> {
  for (let i = 0; i < list.length; ++i) f(list[i], i)

  return list
}
