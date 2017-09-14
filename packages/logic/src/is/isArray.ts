/**
 * Returns true if given value is an Array.
 * @name isArray<A = any>(x: any): x is Array<A>
 */
export function isArray<A = any>(x: any): x is Array<A> {
  return Array.isArray(x)
}
