/**
 * Returns true if a value is an object.
 * @name isObject<A extends object = Object>(x: any): x is A
 */
export function isObject<A extends object = Object>(x: any): x is A {
  return x && typeof x === 'object'
}
