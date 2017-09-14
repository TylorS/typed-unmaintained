import { curry2 } from '@typed/functions'

/**
 * Add 2 numbers together
 * @name add(x: number, y: number): number
 */
export const add = curry2(__add)

function __add(x: number, y: number): number {
  return x + y
}
