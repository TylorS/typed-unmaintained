import { Future } from './Future'
import { chain } from './chain'
import { curry2 } from '@typed/functions'
import { map } from './map'

/**
 * Applies the function resolved from a `Future` to the value resolved from a
 * second `Future`.
 * @name ap<A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<A, C>
 */
export const ap: FutureAp = curry2(__ap)

function __ap<A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<A, C> {
  return chain(f => map(f, value), fn)
}

export type FutureAp = {
  <A, B, C>(fn: Future<A, (value: B) => C>, value: Future<A, B>): Future<A, C>
  <A, B, C>(fn: Future<A, (value: B) => C>): (value: Future<A, B>) => Future<A, C>
}
