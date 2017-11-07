import { Disposable, Future } from './Future'
import { append, reduce } from '@typed/list'

import { disposeAll } from '@most/disposable'
import { fork } from './fork'

/**
 * Creates a `Future` that concurrently forks all of the given `Futures` resolving
 * with an Array of their values, or rejecting if any of the futures reject. Conceptually
 * the same as to `Promise.all`.
 * @name all<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>>
 */
export function all<A, B>(futures: ArrayLike<Future<A, B>>): Future<A, ReadonlyArray<B>> {
  const { length: futureCount } = futures
  const values: Array<B> = Array(futureCount)
  const remaining: Remaining = { count: futureCount }

  return Future.create<A, ReadonlyArray<B>>((reject, resolve) =>
    disposeAll(reduce(forkFuture<A, B>(reject, resolve, values, remaining), [], futures))
  )
}

type Remaining = { count: number }

function forkFuture<A, B>(
  reject: (value: A) => void,
  resolve: (value: ReadonlyArray<B>) => void,
  values: Array<B>,
  remaining: Remaining
) {
  return (disposables: Array<Disposable>, future: Future<A, B>, index: number): Array<Disposable> =>
    append(
      fork(
        reject,
        value => {
          values[index] = value
          remaining.count--

          if (remaining.count === 0) resolve(values)
        },
        future
      ),
      disposables
    )
}
