import { Arity5, Curry5 } from '../types'

import { curry2 } from './curry2'
import { curry3 } from './curry3'
import { curry4 } from './curry4'

export function curry5<A, B, C, D, E, F>(fn: Arity5<A, B, C, D, E, F>): Curry5<A, B, C, D, E, F>
export function curry5(
  fn: Arity5<any, any, any, any, any, any>
): Curry5<any, any, any, any, any, any>

export function curry5<A, B, C, D, E, F>(fn: Arity5<A, B, C, D, E, F>): Curry5<A, B, C, D, E, F> {
  function curried(a: A, b: B, c: C, d: D, e: E): any {
    switch (arguments.length) {
      case 1:
        return curry4<B, C, D, E, F>((b: B, c: C, d: D, e: E) => fn(a, b, c, d, e))
      case 2:
        return curry3<C, D, E, F>((c: C, d: D, e: E) => fn(a, b, c, d, e))
      case 3:
        return curry2<D, E, F>((d: D, e: E) => fn(a, b, c, d, e))
      case 4:
        return (e: E) => fn(a, b, c, d, e)
      default:
        return fn(a, b, c, d, e)
    }
  }

  return curried as Curry5<A, B, C, D, E, F>
}
