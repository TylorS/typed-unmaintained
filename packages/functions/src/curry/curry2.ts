import { Arity2, Curry2 } from '../types'

export function curry2<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C>
export function curry2(fn: Arity2<any, any, any>): Curry2<any, any, any>

export function curry2<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C> {
  function curried(a: A, b: B, ...args: Array<any>): any {
    switch (arguments.length) {
      case 1:
        return (b: B, ...args: Array<any>) => fn(a, b, ...args)
      default:
        return fn(a, b, ...args)
    }
  }

  return curried as Curry2<A, B, C>
}
