import { Maybe } from './Maybe'
import { chain } from './chain'
import { map } from './map'

/**
 * Applies the function contained in a `Maybe` to the value contained in a 
 * second `Maybe`.
 * @name ap<A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B> 
 */
export const ap: MaybeAp = function ap<A, B>(fn: Maybe<(value: A) => B>, maybe?: Maybe<A>): any {
  return maybe ? __ap(fn, maybe) : (maybe: Maybe<A>) => __ap(fn, maybe)
}

function __ap<A, B>(fn: Maybe<(value: A) => B>, maybe: Maybe<A>): Maybe<B> {
  return chain(f => map(f, maybe), fn)
}

export interface MaybeAp {
  <A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
  <A, B>(fn: Maybe<(value: A) => B>): (value: Maybe<A>) => Maybe<B>
}
