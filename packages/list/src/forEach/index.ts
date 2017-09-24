import { List } from '../types'
import { arrayFrom } from '../arrayFrom'
import { curry2 } from '@typed/functions'

/**
 * Applies a function to each item in a `List`, returning the list after.
 * @name forEach<A>(f: (value: A, index: number) => any, list: List<A>): Array<A>
 */
export const forEach: ForEach = curry2(__forEach)

export type ForEach = {
  <A>(f: (value: A, index: number) => any, list: List<A>): Array<A>
  <A>(f: (value: A, index: number) => any): (list: List<A>) => Array<A>
}

function __forEach<A>(f: (value: A, index: number) => any, list: List<A>): Array<A> {
  for (let i = 0; i < list.length; ++i) f(list[i], i)

  return arrayFrom(list)
}
