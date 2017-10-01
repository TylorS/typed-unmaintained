import { curry2 } from '@typed/functions'

/**
 * Applies a base to the exponent power.
 * @name pow(exponent: number, base: number): number
 */
export const pow: Pow = curry2(__pow)

export type Pow = {
  (exponent: number, base: number): number
  (exponent: number): (base: number) => number
}

function __pow(exponent: number, base: number): number {
  return Math.pow(base, exponent)
}
