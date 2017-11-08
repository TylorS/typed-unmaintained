import { Just } from './Just'
import { Nothing } from './Nothing'
import { toMaybe } from './toMaybe'

export type Maybe<A> = Just<A> | Nothing

export namespace Maybe {
  /**
   * Creates a Maybe containing a value. If the value is `undefined` or `null`
   * a `Nothing` will be returned. All other values will be wrapped in a `Just`.
   * @name Maybe.of<A>(value: A): Maybe<A>
   */
  export const of: <A>(value: A) => Maybe<A> = toMaybe
}
