import { Future } from './Future'
import { toPromise } from './toPromise'

/**
 * Creates a `Future` that concurrently forks all of the given `Futures` resolving
 * with an Array of their values, or rejecting if any of the futures reject. Conceptually 
 * the same as to `Promise.all`.
 * @name all<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>>
 */
export function all<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>> {
  return Future.create<A, ReadonlyArray<B>>((reject, resolve) => {
    const promises: Array<Promise<B>> = []

    for (let i = 0; i < futures.length; ++i) promises[i] = toPromise(futures[i])

    Promise.all(promises).then(resolve).catch(reject)
  })
}
