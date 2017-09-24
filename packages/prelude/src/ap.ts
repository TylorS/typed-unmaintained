import { Arity1, curry2 } from '@typed/functions'

import { Either } from '@typed/either'
import { List } from '@typed/list'
import { Maybe } from '@typed/maybe'
import { chain } from './chain'
import { map } from './map'

/**
 * Apply the function contained in an Applicative to the values contained
 * in another Applicative. Works with all data structures supported by `chain` and 
 * `map`.
 * @name ap<A, B>(fn: List<Arity1<A, B>>, values: List<A>): Array<B>
 */
export const ap: Ap = curry2(__ap)

function __ap<A, B>(fn: List<Arity1<A, B>>, value: List<A>): Array<B> {
  return chain((f: Arity1<A, B>) => map(f, value), fn)
}

export type Ap = {
  <A, B>(fn: List<Arity1<A, B>>, list: List<A>): Array<B>
  <A, B>(fn: Maybe<Arity1<A, B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>, either: Either<A, B>): Either<A, C>

  <A, B>(fn: List<Arity1<A, B>>): (list: List<A>) => Array<B>
  <A, B>(fn: Maybe<Arity1<A, B>>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>): (either: Either<A, B>) => Either<A, C>
}
