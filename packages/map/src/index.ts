import { Stream, map as mapStream } from 'most';

import { curry2 } from '@typed/curry';
import { isArrayLike } from '@typed/is-array-like';
import { isStream } from '@typed/is-stream';

export const map: MapFnArity2 = curry2(
  function map<A, B>(f: (a: A, i: number) => B, functor: any): typeof functor {
    if (isArrayLike<A>(functor))
      return mapArrayLike<A, B>(f, functor);

    if (isStream<A>(functor))
      return mapStream(f as (a: A) => B, functor);

    return functor.map(f);
  },
);

function mapArrayLike<A, B>(f: (a: A, i: number) => B, functor: ArrayLike<A>): Array<B> {
  const count = functor.length;
  const b = Array(count);

  for (let i = 0; i < count; ++i)
    b[i] = f(functor[i], i);

  return b;
}

export interface MapFnArity2 {
  (): MapFnArity2;

  <A, B>(f: (a: A) => B, arrayLike: ArrayLike<A>): Array<B>;
  <A, B>(f: (a: A) => B, stream: Stream<A>): Stream<B>;
  <A, B>(f: (a: A) => B, functor: Functor<A>): Functor<B>;

  <A, B>(f: (a: A) => B): MapFnArity1<A, B>;
}

export interface MapFnArity1<A, B> {
  (): MapFnArity1<A, B>;

  (arrayLike: ArrayLike<A>): Array<B>;
  (stream: Stream<A>): Stream<B>;
  (functor: Functor<A>): Functor<B>;
}

export interface Functor<A> {
  map<B>(f: (a: A, i?: number) => B): Functor<B>;
}
