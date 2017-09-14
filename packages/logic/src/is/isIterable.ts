import { isIterator } from './isIterator'

/**
 * Returns true if a value is an Iterable.
 * @name isIterable<A>(x: any): x is Iterable<A>
 */
export function isIterable<A>(x: any): x is Iterable<A> {
  return x && typeof x[Symbol.iterator] === 'function' && isIterator(x[Symbol.iterator]())
}
