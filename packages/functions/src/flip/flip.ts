import { Flip } from './types'
import { apply } from '../apply'
import { curry } from '../curry'

/**
 * Flips the first 2 arguments of a function.
 * @name flip<A, B, C>(fn: (a: A, b: B) => C): Curry2<B, A, C>
 */
export const flip: Flip = function flip<A, B, C>(f: (a: A, b: B, ...args: Array<any>) => C) {
  return curry(function(b: B, a: A, ...args: Array<any>): C {
    return apply([a, b, ...args], f)
  })
}
