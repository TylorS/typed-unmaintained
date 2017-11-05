import { Future } from './Future'
import { curry2 } from '@typed/functions'

/**
 * Returns a `Future` that is the result of calling `f` with the rejected
 * value of another future. Similar to `Promise.catch`.
 * @name chainLeft<A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
 */
export const chainLeft: FutureChainLeft = curry2(__chainLeft)

function __chainLeft<A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B> {
  return Future.create((reject, resolve) =>
    future.fork(value => f(value).fork(reject, resolve), resolve)
  )
}

export type FutureChainLeft = {
  <A, B, C>(f: (value: A) => Future<C, B>, future: Future<A, B>): Future<C, B>
  <A, B, C>(f: (value: A) => Future<C, B>): (future: Future<A, B>) => Future<C, B>
}
