import { Maybe } from './Maybe'
import { chain } from './chain'
import { curry2 } from '@typed/functions'
import { map } from './map'

/**
 * Applies the function contained in a `Maybe` to the value contained in a
 * second `Maybe`.
 * @name ap<A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
 */
export const ap: MaybeAp = curry2(__ap)

function __ap<A, B>(fn: Maybe<(value: A) => B>, maybe: Maybe<A>): Maybe<B> {
  return chain(f => map(f, maybe), fn)
}

export interface MaybeAp {
  <A, B>(fn: Maybe<(value: A) => B>, value: Maybe<A>): Maybe<B>
  <A, B>(fn: Maybe<(value: A) => B>): (value: Maybe<A>) => Maybe<B>
}
