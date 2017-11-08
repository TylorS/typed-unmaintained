import { curry3 } from '@typed/functions'

/**
 * Returns the value at a given key if an object has that property, otherwise
 * returns the defaultValue.
 * @name propOr<A, K extends string>(defaultValue: A, key: K, obj: { [Key in K]: A }): A
 */
export const propOr: PropOr = curry3(__propOr)

function __propOr<A, K extends string>(defaultValue: A, key: K, obj: { [Key in K]: A }): A {
  return obj.hasOwnProperty(key) ? obj[key] : defaultValue
}

export type PropOr = {
  <A, K extends string>(defaultValue: A, key: K, obj: { [Key in K]: A }): A
  <A, K extends string>(defaultValue: A, key: K): (obj: { [Key in K]: A }) => A
  <A>(defaultValue: A): {
    <K extends string>(key: K, obj: { [Key in K]: A }): A
    <K extends string>(key: K): (obj: { [Key in K]: A }) => A
  }
}
