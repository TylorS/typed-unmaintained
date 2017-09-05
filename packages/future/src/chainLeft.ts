import { Future } from './Future'

/**
 * Returns a `Future` that is the result of calling `f` with the rejected 
 * value of another future. Similar to `Promise.catch`.
 * @name chainLeft<A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
 */
export const chainLeft: FutureChainLeft = function chainLeft<A, B, C>(
  f: (value: A) => Future<C, B>,
  future?: Future<A, B>
): any {
  if (!future) return (future: Future<A, B>) => __chainLeft(f, future)

  return __chainLeft(f, future)
}

function __chainLeft<A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B> {
  return Future.create((reject, resolve) => {
    future.fork(value => f(value).fork(reject, resolve), resolve)
  })
}

export type FutureChainLeft = {
  <A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => Future<C, B>): (future: Future<A, B>) => Future<C, B>
}
