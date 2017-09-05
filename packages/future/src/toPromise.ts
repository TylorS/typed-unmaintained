import { Future } from './Future'

/**
 * Forks a `Future` into a Promise
 * @name toPromise<A>(future: Future<any, A>): Promise<A>
 */
export function toPromise<A>(future: Future<any, PromiseLike<A>>): Promise<A>
export function toPromise<A>(future: Future<any, A>): Promise<A>
export function toPromise<A>(future: Future<any, A>): Promise<A> {
  return new Promise<A>((resolve, reject) => future.fork(reject, resolve))
}
