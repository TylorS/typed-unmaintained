import { Maybe } from './Maybe'
import { curry2 } from '@typed/functions'
import { fromJust } from './fromJust'
import { isNothing } from './isNothing'

/**
 * Maps a `Maybe` to another `Maybe`.
 * @name chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
 */
export const chain: MaybeChain = curry2(__chain)

function __chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B> {
  return isNothing(maybe) ? maybe : f(fromJust(maybe))
}

export interface MaybeChain {
  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
}
