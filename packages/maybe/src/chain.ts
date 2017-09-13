import { Maybe } from './Maybe'
import { fromJust } from './fromJust'
import { isNothing } from './isNothing'

/**
 * Maps a `Maybe` to another `Maybe`.
 * @name chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
 */
export const chain: MaybeChain = function chain<A, B>(
  f: (value: A) => Maybe<B>,
  maybe?: Maybe<A>
): any {
  return maybe ? __chain(f, maybe) : (maybe: Maybe<A>) => __chain(f, maybe)
}

function __chain<A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B> {
  return isNothing(maybe) ? maybe : f(fromJust(maybe))
}

export interface MaybeChain {
  <A, B>(f: (value: A) => Maybe<B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: (value: A) => Maybe<B>): (maybe: Maybe<A>) => Maybe<B>
}
