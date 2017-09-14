import { Future } from './Future'
import { chainLeft } from './chainLeft'
import { curry2 } from '@typed/functions'

/**
 * Returns a `Future` that is the result of calling `f` with the rejected 
 * value of another future. Similar to `Promise.catch`.
 * @name mapLeft<A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
 */
export const mapLeft: FutureMapLeft = curry2(__mapLeft)

function __mapLeft<A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B> {
  return chainLeft(value => Future.reject(f(value)), future)
}

export type FutureMapLeft = {
  <A, B, C>(f: (value: A) => C, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => C): (future: Future<A, B>) => Future<C, B>
}
