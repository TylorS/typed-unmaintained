import { Maybe } from './Maybe'
import { Nothing } from './Nothing'

/**
 * Given a Maybe<A> it returns false if the Maybe<A> is Just<A> or 
 * true if it is a Nothing.
 * @name isNothing<A>(maybe: Maybe<A>): maybe is Nothing
 * @example
 * import { isNothing, Maybe, Nothing } from '@typed/maybe'
 * 
 * console.log(isNothing(Nothing)) // logs true
 * console.log(isNothing(Maybe.of(1))) // logs false
 */
export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
  return (maybe as Nothing)['@typed/Nothing'] === true
}
