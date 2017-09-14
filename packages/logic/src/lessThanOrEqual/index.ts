import { curry2 } from '@typed/functions'

/**
 * Compares 2 values using `<=`
 * @name lessThanOrEqual<A>(right: A, left: A): boolean
 */
export const lessThanOrEqual: LessThanOrEqual = curry2(<A>(right: A, left: A) => left <= right)

export type LessThanOrEqual = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
