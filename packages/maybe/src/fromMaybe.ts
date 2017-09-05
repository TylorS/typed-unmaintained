import { Maybe } from './Maybe'
import { fromJust } from './fromJust'
import { isJust } from './isJust'

/**
 * Given a default value and a Maybe returns the default value if the Maybe is a 
 * Nothing or the value contained in a Just.
 * @name fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A
 */
export const fromMaybe: FromMaybe = function fromMaybe<A>(defaultValue: A, maybe?: Maybe<A>) {
  if (!maybe) return (maybe: Maybe<A>) => __fromMaybe(defaultValue, maybe)

  return __fromMaybe(defaultValue, maybe)
}

function __fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A {
  return isJust(maybe) ? fromJust(maybe) : defaultValue
}

export interface FromMaybe {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}
