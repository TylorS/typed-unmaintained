import { Disposable, Future } from './Future'

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
  let remaining = futureCount

  return Future.create<A, ReadonlyArray<B>>((reject, resolve) => {
    const disposables: Array<Disposable> = []

    for (let i = 0; i < futures.length; ++i) {
      const success = (value: B) => {
        values[i] = value
        --remaining

        if (remaining === 0) resolve(values)
      }

      disposables[i] = fork(reject, success, futures[i])
    }

    return { dispose: () => disposables.forEach(dispose) }
  })
}

function dispose(disposable: Disposable): void {
  disposable.dispose()
}
