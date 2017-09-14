import { clone } from '../clone'
import { curry3 } from '@typed/functions'

/**
 * Sets the property on an object.
 * @name set<Key extends string, A, O extends Record<Key, A>>(key: Key, value: A, obj: O): O
 */
export const set: SetArity3 = curry3(function __set<
  Key extends string,
  A,
  O extends { readonly: { [K in Key]: A } }
>(key: Key, value: A, obj: O): O {
  const clonedObj = clone(obj)
  ;(clonedObj as any)[key] = value

  return clonedObj
})

export type SetArity3 = {
  <A, O extends { readonly [key: number]: A }>(key: number, value: A, obj: O): O
  <Key extends string, A, O extends Readonly<Record<Key, A>>>(key: Key, value: A, obj: O): O

  <A>(key: number, value: A): <O extends { readonly [key: number]: A }>(obj: O) => O
  <Key extends string, A>(key: Key, value: A): SetArity1<Key, A>

  (key: number): SetArity2Number
  <Key extends string>(key: Key): SetArity2<Key>
}

export type SetArity2Number = {
  <A, O extends { readonly [key: number]: A }>(value: A, obj: O): O
  <A>(value: A): <O extends { readonly [key: number]: A }>(obj: O) => O
  <A, O extends { readonly [key: number]: A }>(value: A): (obj: O) => O
}

export type SetArity2<Key extends string> = {
  <A, O extends Readonly<Record<Key, A>>>(value: A, obj: O): O
  <A>(value: A): SetArity1<Key, A>
}

export type SetArity1<Key extends string, A> = {
  <O extends Readonly<Record<Key, A>>>(obj: O): O
}
