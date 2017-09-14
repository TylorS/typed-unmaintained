/**
 * Returns true if a value is a `Map`.
 * @name isMap<A = any, B = any>(x: any): x is Map<A, B>
 */
export function isMap<A = any, B = any>(x: any): x is Map<A, B> {
  return (
    x && typeof (x as Map<A, B>).delete === 'function' && typeof (x as Map<A, B>).set === 'function'
  )
}
