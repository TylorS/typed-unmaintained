import { Future } from './Future'
import { chainLeft } from './chainLeft'

/**
 * Returns a `Future` that is the result of calling `f` with the rejected 
 * value of another future. Similar to `Promise.catch`.
 * @name mapLeft<A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
 */
export const mapLeft: FutureMapLeft = function mapLeft<A, B, C>(
  f: (value: A) => C,
  future?: Future<A, B>
): any {
  if (!future) return (future: Future<A, B>) => __mapLeft(f, future)

  return __mapLeft(f, future)
}

function __mapLeft<A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B> {
  return chainLeft(value => Future.reject(f(value)), future)
}

export type FutureMapLeft = {
  <A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => C): (future: Future<A, B>) => Future<C, B>
}
