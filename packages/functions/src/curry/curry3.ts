import { Arity3, Curry3 } from '../types'

import { curry2 } from './curry2'

export function curry3<A, B, C, D>(fn: Arity3<A, B, C, D>): Curry3<A, B, C, D>
export function curry3(fn: Arity3<any, any, any, any>): Curry3<any, any, any, any>

export function curry3<A, B, C, D>(fn: Arity3<A, B, C, D>): Curry3<A, B, C, D> {
  function curried(a: A, b: B, c: C, ...args: Array<any>): any {
    switch (arguments.length) {
      case 1:
        return curry2<B, C, D>((b: B, c: C) => fn(a, b, c))
      case 2:
        return (c: C, ...args: Array<any>) => fn(a, b, c, ...args)
      default:
        return fn(a, b, c, ...args)
    }
  }

  return curried as Curry3<A, B, C, D>
}
