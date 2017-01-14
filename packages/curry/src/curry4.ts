import { Arity4, Curry4 } from './types';
import { curry1 } from './curry1';
import { curry2 } from './curry2';
import { curry3 } from './curry3';

export function curry4<A, B, C, D, E>(fn: Arity4<A, B, C, D, E>): Curry4<A, B, C, D, E>;
export function curry4(fn: Arity4<any, any, any, any, any>): Curry4<any, any, any, any, any>;

export function curry4<A, B, C, D, E>(fn: Arity4<A, B, C, D, E>): Curry4<A, B, C, D, E> {
  function curried (a: A, b: B, c: C, d: D): any {
    switch (arguments.length) {
      case 0: return curried;
      case 1: return curry3<B, C, D, E>((b: B, c: C, d: D) => fn(a, b, c, d));
      case 2: return curry2<C, D, E>((c: C, d: D) => fn(a, b, c, d));
      case 3: return curry1<D, E>((d: D) => fn(a, b, c, d));
      default: return fn(a, b, c, d);
    }
  }

  return curried as Curry4<A, B, C, D, E>;
}
