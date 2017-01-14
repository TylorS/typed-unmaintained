import { Stream, filter as filterStream } from 'most';

import { curry2 } from '@typed/curry';
import { isArrayLike } from '@typed/is-array-like';
import { isStream } from '@typed/is-stream';

export const filter: FilterFnArity2 = curry2(
  function filter<A>(predicate: (a: A, i?: number) => boolean, filterable: any): typeof filterable {
    if (isArrayLike<A>(filterable))
      return filterArrayLike<A>(predicate, filterable);

    if (isStream<A>(filterable))
      return filterStream<A>(predicate as (a: A) => boolean, filterable);

    return filterable.filter(predicate);
  },
);

function filterArrayLike<A>(
  predicate: (a: A, i?: number) => boolean,
  arrayLike: ArrayLike<A>): Array<A>
{
  const length = arrayLike.length;
  const array = Array(length);

  let j = 0;
  for (let x, i = 0; i < length; ++i) {
    x = arrayLike[i];

    if (predicate(x, i)) {
      array[j] = x;
      ++j;
    }
  }

  array.length = j;

  return array;
}

export interface FilterFnArity2 {
  (): FilterFnArity2;

  <A>(predicate: (a: A, i?: number) => boolean, arrayLike: ArrayLike<A>): Array<A>;
  <A>(predicate: (a: A) => boolean, stream: Stream<A>): Stream<A>;
  <A>(predicate: (a: A) => boolean, filterable: Filterable<A>): Filterable<A>;

  <A>(predicate: (a: A) => boolean): FilterFnArity1<A>;
}

export interface FilterFnArity1<A> {
  (): FilterFnArity1<A>;

  (arrayLike: ArrayLike<A>): Array<A>;
  (stream: Stream<A>): Stream<A>;
  (filterable: Filterable<A>): Filterable<A>;
}

export interface Filterable<A> {
  filter(predicate: (a: A) => boolean): Filterable<A>;
}
