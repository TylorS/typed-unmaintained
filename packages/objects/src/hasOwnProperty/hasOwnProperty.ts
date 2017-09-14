import { invoker } from '../invoker'

/**
 * Given a property key and an object returns true if that object has a property
 * at the given property key.
 * @name hasOwnProperty<A>(key: PropertyKey, object: A): boolean
 */
export const hasOwnProperty: HasOwnProperty = invoker<Object, PropertyKey, boolean>(
  1,
  'hasOwnProperty'
)

export type HasOwnProperty = {
  <O extends object>(key: PropertyKey, object: O): boolean
  <O extends object>(key: PropertyKey): (object: O) => boolean
  (key: PropertyKey): <O>(object: O) => boolean
}
