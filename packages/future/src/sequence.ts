import { Future } from './Future'
import { chain } from './chain'
import { map } from './map'

/**
 * Creates a `Future` that will lazily fork each `Future` one after another.
 * Similar to `all` except that concurrency is always 1.
 * @name sequence<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>>
 */
export function sequence<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>> {
  let seed = Future.of<Array<B>, A>([])

  for (let i = 0; i < futures.length; ++i) {
    const future = futures[i]

    seed = chain(values => map(value => values.concat(value), future), seed)
  }

  return seed
}
