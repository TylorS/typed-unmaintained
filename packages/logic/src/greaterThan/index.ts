import { curry2 } from '@typed/functions'

/**
 * Applies `>` to 2 values.
 * @name greaterThan<A>(right: A, left: A): boolean
 */
export const greaterThan: GreaterThan = curry2(<A>(right: A, left: A) => left > right)

export type GreaterThan = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
