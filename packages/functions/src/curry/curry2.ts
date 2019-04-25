import { Arity2, Curry2 } from '../types'

export function curry2<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C>
export function curry2(fn: Arity2<any, any, any>): Curry2<any, any, any>

export function curry2<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C> {
  function curried(a: A, b: B): any {
    switch (arguments.length) {
      case 1:
        return (b: B) => fn(a, b)
      default:
        return fn(a, b)
    }
  }

  return curried as Curry2<A, B, C>
}
