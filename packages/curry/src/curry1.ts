import { Arity1, Curry1 } from './types';

export function curry1<A, B>( fn: Arity1<A, B> ): Curry1<A, B>;
export function curry1( fn: Arity1<any, any> ): Curry1<any, any>;

export function curry1<A, B>( fn: Arity1<A, B> ): Curry1<A, B> {
  function curried (a: A) {
    switch (arguments.length) {
      case 0: return curried;
      default: return fn(a);
    }
  }

  return curried as Curry1<A, B>;
};
