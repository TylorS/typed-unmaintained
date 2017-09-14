import {
  Arity1,
  Arity10,
  Arity2,
  Arity3,
  Arity4,
  Arity5,
  Arity6,
  Arity7,
  Arity8,
  Arity9,
  Curry10,
  Curry2,
  Curry3,
  Curry4,
  Curry5,
  Curry6,
  Curry7,
  Curry8,
  Curry9,
} from '../types'

import { curry2 } from './curry2'
import { curry3 } from './curry3'
import { curry4 } from './curry4'
import { curry5 } from './curry5'
import { curryN } from '../curryN'

/**
 * Given a function it returns a curried version of that function.
 * @name curry(fn: Fuction): CurriedFunction
 */
export const curry: CurryFn = function curry(fn: any) {
  switch (fn.length) {
    case 0:
      return fn
    case 1:
      return fn
    case 2:
      return curry2(fn as Curry2<any, any, any>)
    case 3:
      return curry3(fn as Curry3<any, any, any, any>)
    case 4:
      return curry4(fn as Curry4<any, any, any, any, any>)
    case 5:
      return curry5(fn as Curry5<any, any, any, any, any, any>)
    default:
      return curryN(fn.length, fn)
  }
}

export type CurryFn = {
  <A>(f: () => A): () => A
  <A, B>(f: Arity1<A, B>): Arity1<A, B>
  <A, B, C>(f: Arity2<A, B, C>): Curry2<A, B, C>
  <A, B, C, D>(f: Arity3<A, B, C, D>): Curry3<A, B, C, D>
  <A, B, C, D, E>(f: Arity4<A, B, C, D, E>): Curry4<A, B, C, D, E>
  <A, B, C, D, E, F>(f: Arity5<A, B, C, D, E, F>): Curry5<A, B, C, D, E, F>
  <A, B, C, D, E, F, G>(f: Arity6<A, B, C, D, E, F, G>): Curry6<A, B, C, D, E, F, G>
  <A, B, C, D, E, F, G, H>(f: Arity7<A, B, C, D, E, F, G, H>): Curry7<A, B, C, D, E, F, G, H>
  <A, B, C, D, E, F, G, H, I>(f: Arity8<A, B, C, D, E, F, G, H, I>): Curry8<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I
  >
  <A, B, C, D, E, F, G, H, I, J>(f: Arity9<A, B, C, D, E, F, G, H, I, J>): Curry9<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J
  >
  <A, B, C, D, E, F, G, H, I, J, K>(f: Arity10<A, B, C, D, E, F, G, H, I, J, K>): Curry10<
    A,
    B,
    C,
    D,
    E,
    F,
    G,
    H,
    I,
    J,
    K
  >
}
