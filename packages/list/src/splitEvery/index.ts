import { List } from '../types'
import { Maybe } from '@typed/maybe'
import { curry2 } from '@typed/functions'
import { slice } from '../slice'

/**
 * Splits a list into a list of lists containing `n` number of values.
 * @name splitEvery<A>(amount: number, list: List<A>): List<List<A>>
 */
export const splitEvery: SplitEvery = curry2(function splitEvery<A>(
  amount: number,
  list: List<A>
): List<List<A>> {
  if (amount <= 0) return [list]

  const result = []
  let i = 0

  while (i < list.length) result.push(slice(i, Maybe.of((i += amount)), list))

  return result
})

export type SplitEvery = {
  <A>(amount: number, list: List<A>): List<List<A>>
  <A>(amount: number): (list: List<A>) => List<List<A>>
}
