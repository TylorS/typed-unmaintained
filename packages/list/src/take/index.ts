import { List } from '../types'
import { Maybe } from '@typed/maybe'
import { curry2 } from '@typed/functions'
import { slice } from '../slice'

/**
 * Takes the first `n` items of a `List`.
 * @name take<A>(n: number, list: List<A>): Array<A>
 */
export const take: Take = curry2(<A>(n: number, list: List<A>) =>
  slice(0, Maybe.of(n < 0 ? Infinity : n), list)
)

export type Take = {
  <A>(n: number, list: List<A>): Array<A>
  <A>(n: number): (list: List<A>) => List<A>
}
