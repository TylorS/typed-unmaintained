import { Maybe } from './Maybe'
import { chain } from './chain'

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
