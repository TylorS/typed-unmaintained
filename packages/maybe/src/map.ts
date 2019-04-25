import { Maybe } from './Maybe'
import { chain } from './chain'
import { curry2 } from '@typed/functions'

/**
 * Applies a function to the value possibly contained in a `Maybe`. If the
 * maybe is a `Nothing` just the `Nothing` is returned.
 * @name map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
 */
export const map: MaybeMap = curry2(__map)

function __map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B> {
  return chain(a => Maybe.of(f(a)), maybe)
}

export interface MaybeMap {
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B): (maybe: Maybe<A>) => Maybe<B>
}
