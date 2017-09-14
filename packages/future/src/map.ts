import { Future } from './Future'
import { chain } from './chain'
import { curry2 } from '@typed/functions'

/**
 * Maps the value of a Future. Similar to `Promise.then`.
 * @name map<A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>
 */
export const map: FutureMap = curry2(__map)

function __map<A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C> {
  return chain(b => Future.of(f(b)), future)
}

export type FutureMap = {
  <A, B, C>(f: (value: B) => C, future: Future<A, B>): Future<A, C>
  <A, B, C>(f: (value: B) => C): (future: Future<A, B>) => Future<A, C>
}
