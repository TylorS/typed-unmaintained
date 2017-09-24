/**
 * Returns the values of an object.
 * @name values<A>(obj: A): Array<A[keyof A]>
 */
export const values = <A>(obj: A): Array<A[keyof A]> =>
  Object.keys(obj).map(key => obj[key as keyof A])
