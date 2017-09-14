/**
 * Returns true if a value is PromiseLike
 * @name isPromiseLike<A = any>(x: any): x is PromiseLike<A>
 */
export function isPromiseLike<A = any>(x: any): x is PromiseLike<A> {
  return x && typeof x.then === 'function'
}
