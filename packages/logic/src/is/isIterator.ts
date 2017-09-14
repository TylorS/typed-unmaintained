/**
 * Returns true if value is an iterator.
 * @name isIterator<A>(x: any): x is Iterator<A>
 */
export function isIterator<A>(x: any): x is Iterator<A> {
  return x && typeof (x as Iterator<A>).next === 'function'
}
