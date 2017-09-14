import { List } from '@typed/core'

/**
 * Returns the values of an object.
 * @name values<A>(obj: A): List<A[keyof A]>
 */
export const values = <A>(obj: A): List<A[keyof A]> =>
  Object.keys(obj).map(key => obj[key as keyof A])
