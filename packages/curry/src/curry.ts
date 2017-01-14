import {
  Arity1,
  Arity2,
  Arity3,
  Arity4,
  Arity5,
  Curry1,
  Curry2,
  Curry3,
  Curry4,
  Curry5,
} from './types';

import { curry1 } from './curry1';
import { curry2 } from './curry2';
import { curry3 } from './curry3';
import { curry4 } from './curry4';
import { curry5 } from './curry5';

export function curry<A, B>(fn: Arity1<A, B>): Curry1<A, B>;
export function curry( fn: Arity1<any, any> ): Curry1<any, any>;

export function curry<A, B, C>(fn: Arity2<A, B, C>): Curry2<A, B, C>;
export function curry(fn: Arity2<any, any, any>): Curry2<any, any, any>;

export function curry<A, B, C, D>(fn: Arity3<A, B, C, D>): Curry3<A, B, C, D>;
export function curry(fn: Arity3<any, any, any, any>): Curry3<any, any, any, any>;

export function curry<A, B, C, D, E>(fn: Arity4<A, B, C, D, E>): Curry4<A, B, C, D, E>;
export function curry(fn: Arity4<any, any, any, any, any>): Curry4<any, any, any, any, any>;

export function curry<A, B, C, D, E, F>(fn: Arity5<A, B, C, D, E, F>): Curry5<A, B, C, D, E, F>;
export function curry(fn: Arity5<any, any, any, any, any, any>): Curry5<any, any, any, any, any, any>;

export function curry(fn: Function) {
  switch (fn.length) {
    case 0: return fn;
    case 1: return curry1(fn as Arity1<any, any>);
    case 2: return curry2(fn as Arity2<any, any, any>);
    case 3: return curry3(fn as Arity3<any, any, any, any>);
    case 4: return curry4(fn as Arity4<any, any, any, any, any>);
    case 5: return curry5(fn as Arity5<any, any, any, any, any, any>);
    default: throw new Error(`Its highly suggested that you do not write functions with more than 5 parameters.`);
  }
}
