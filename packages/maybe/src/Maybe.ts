import * as types from '@typed/core'

import { Just } from './Just'

export type Maybe<A> = types.Maybe<A>

export namespace Maybe {
  /**
   * Creates a Maybe containg a value
   * @name Maybe.of<A>(value: A): Maybe<A>
   */
  export const of: <A>(value: A) => Maybe<A> = Just.of
}
