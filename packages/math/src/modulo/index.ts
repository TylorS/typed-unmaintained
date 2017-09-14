import { curry2 } from '@typed/functions'

/**
 * Applies `%` to 2 numbers.
 * @name modulo(right: number, left: number): number
 */
export const modulo = curry2(__modulo)

function __modulo(right: number, left: number): number {
  return left % right
}
