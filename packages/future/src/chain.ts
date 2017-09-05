import { Future } from './Future'

/**
 * Returns a `Future` that is the result of calling `f` with the resolved 
 * value of another future. Similar to `Promise.then`.
 * @name chain<A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A C>
 */
export const chain: FutureChain = function chain<A, B, C>(
  f: (value: B) => Future<A, C>,
  future?: Future<A, B>
): any {
  if (!future) return (future: Future<A, B>) => __chain(f, future)

  return __chain(f, future)
}

function __chain<A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C> {
  return Future.create((reject, resolve) => {
    future.fork(reject, value => f(value).fork(reject, resolve))
  })
}

export type FutureChain = {
  <A, B, C>(f: (value: B) => Future<A, C>, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => Future<A, C>): (future: Future<A, B>) => Future<A, C>
}
