import { curry2 } from '@typed/functions'

/**
 * Applies `>=` to 2 values.
 * @name greaterThanOrEqual<A>(right: A, left: A): boolean
 */
export const greaterThanOrEqual: GreaterThanOrEqual = curry2(
  <A>(right: A, left: A) => left >= right
)

export type GreaterThanOrEqual = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
