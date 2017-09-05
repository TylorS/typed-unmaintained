import { Just } from './Just'
import { Maybe } from './Maybe'

/**
 * Given a Maybe<A> it returns true if the Maybe<A> is Just<A> or 
 * false if it is a Nothing.
 * @name isJust<A>(maybe: Maybe<A>): maybe is Just<A>
 * @example
 * import { isJust, Nothing, Maybe } from '@typed/maybe'
 * 
 * console.log(isJust(Nothing)) // logs false
 * console.log(isJust(Maybe.of(1))) // logs true
 */
export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
  return maybe.hasOwnProperty('@typed/Just')
}
