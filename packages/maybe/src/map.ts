import { Maybe } from './Maybe'
import { chain } from './chain'

/**
 * Applies a function to the value possibly contained in a `Maybe`. If the 
 * maybe is a `Nothing` just the `Nothing` is returned.
 * @name map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B> 
 */
export const map: MaybeMap = function map<A, B>(f: (value: A) => B, maybe?: Maybe<A>): any {
  return maybe ? __map(f, maybe) : (maybe: Maybe<A>) => __map(f, maybe)
}

function __map<A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B> {
  return chain(a => Maybe.of(f(a)), maybe)
}

export interface MaybeMap {
  <A, B>(f: (value: A) => B, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => B): (maybe: Maybe<A>) => Maybe<B>
}
