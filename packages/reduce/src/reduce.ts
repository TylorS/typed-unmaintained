import { curry3 } from '@typed/curry';

export const reduce: ReduceArity3 = curry3(
  function reduce<A, B>(f: ReduceFn<A, B>, seed: B, arrayLike: ArrayLike<A>): B {
    let r: B = seed;

    for (let i = 0; i < arrayLike.length; ++i)
      r = f(r, arrayLike[i], i);

    return r;
  },
);

export type ReduceFn<A, B> = (accumulated: B, value: A, index?: number) => B;

export interface ReduceArity3 {
  <A, B>(f: ReduceFn<A, B>, seed: B, arrayLike: ArrayLike<A>): B;
  <A, B>(f: ReduceFn<A, B>, seed: B): ReduceArity1<A, B>;
  <A, B>(f: ReduceFn<A, B>): ReduceArity2<A, B>;
}

export interface ReduceArity2<A, B> {
  (seed: B, arrayLike: ArrayLike<A>): B;
  (seed: B): ReduceArity1<A, B>;
}

export interface ReduceArity1<A, B> {
  (arrayLike: ArrayLike<A>): B;
}
