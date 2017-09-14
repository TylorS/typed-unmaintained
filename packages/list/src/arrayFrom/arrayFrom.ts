import { List } from '../types'

/**
 * Converts any `Iterable`, `Iterator` or `ArrayLike` to an `Array`.
 * @name arrayFrom<A>(iterable: Iterable<A> | Iterator<A> | List<A>): Array<A> 
 */
export function arrayFrom<A>(iterable: Iterable<A> | Iterator<A> | List<A>): Array<A> {
  if (Array.isArray(iterable)) return iterable

  if (isIterator(iterable)) return Array.from(toIterable(iterable))

  return Array.from(iterable as Iterable<A>)
}

function isIterator<A>(x: any): x is Iterator<A> {
  return x && typeof (x as Iterator<A>).next === 'function'
}

function toIterable<A>(iterator: Iterator<A>): Iterable<A> {
  return {
    [Symbol.iterator]() {
      return iterator
    },
  }
}
