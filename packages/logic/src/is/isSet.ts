/**
 * Returns true if a value is a Set.
 * @name isSet<A = any>(x: any): x is Set<A>
 */
export function isSet<A = any>(x: any): x is Set<A> {
  return x && typeof (x as Set<A>).delete === 'function' && typeof (x as Set<A>).add === 'function'
}
