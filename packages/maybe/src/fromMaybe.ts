import { Maybe } from './Maybe'
import { curry2 } from '@typed/functions'
import { fromJust } from './fromJust'
import { isJust } from './isJust'

/**
 * Given a default value and a Maybe returns the default value if the Maybe is a
 * Nothing or the value contained in a Just.
 * @name fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A
 */
export const fromMaybe: FromMaybe = curry2(__fromMaybe)

function __fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A {
  return isJust(maybe) ? fromJust(maybe) : defaultValue
}

export interface FromMaybe {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}
