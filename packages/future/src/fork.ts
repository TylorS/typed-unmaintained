import { Future } from './Future'
import { curry3 } from '@typed/functions'

/**
 * Activates a future (side-effectful).
 * @name fork<A, B>(left: (value: A) => any, right: (value: B) => any, future: Future<A, B>): void
 */
export const fork: ForkFn = curry3(forkFuture)

function forkFuture<A, B>(
  left: (value: A) => any,
  right: (value: B) => any,
  future: Future<A, B>
): void {
  future.fork(left, right)
}

export interface ForkFn {
  <A, B>(left: (value: A) => any, right: (value: B) => any, future: Future<A, B>): void
  <A, B>(left: (value: A) => any): (right: (value: B) => any, future: Future<A, B>) => void
  <A, B>(left: (value: A) => any, right: (value: B) => any): (future: Future<A, B>) => void
  <A, B>(left: (value: A) => any): (right: (value: B) => any) => (future: Future<A, B>) => void
}
