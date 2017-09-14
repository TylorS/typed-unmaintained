/**
 * Given a value returns a function that will always return that value.
 * @name always<A>(a: A): (...args: Array<any>) => A
 */
export function always<A>(a: A) {
  function constant(...args: Array<any>): A
  function constant(): A {
    return a
  }

  return constant
}
