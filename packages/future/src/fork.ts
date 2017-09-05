import { Future } from './Future'

/**
 * Activates a future (side-effectful).
 * @name fork<A, B>(left: (value: A) => any, right: (value: B) => any, future: Future<A, B>): void
 */
export const fork: ForkFn = function fork<A, B>(
  left: (value: A) => any,
  right?: (value: B) => any,
  future?: Future<A, B>
) {
  if (right === void 0)
    return (right: (value: B) => any, future?: Future<A, B>) => fork(left, right, future)

  if (future === void 0) return (future: Future<A, B>) => forkFuture(left, right, future)

  return forkFuture(left, right, future)
} as ForkFn

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
