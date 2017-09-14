import { curry2 } from '@typed/functions'

/**
 * Compares two values using `<`
 * @name lessThan<A>(right: A, left: A): boolean
 */
export const lessThan: LessThan = curry2(<A>(right: A, left: A) => left < right)

export type LessThan = {
  <A>(right: A, left: A): boolean
  <A>(right: A): (left: A) => boolean
}
