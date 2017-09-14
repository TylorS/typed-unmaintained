import { Arity1, Either, List, Maybe } from '@typed/core'

import { chain } from './chain'
import { curry2 } from '@typed/functions'
import { map } from './map'

/**
 * Apply the function contained in an Applicative to the values contained
 * in another Applicative. Works with all data structures supported by `chain` and 
 * `map`.
 * @name ap<A, B>(fn: List<Arity1<A, B>>, values: List<A>): List<B>
 */
export const ap: Ap = curry2(__ap)

function __ap<A, B>(fn: List<Arity1<A, B>>, value: List<A>): List<B> {
  return chain(f => map(f, value), fn)
}

export type Ap = {
  <A, B>(fn: List<Arity1<A, B>>, list: List<A>): List<B>
  <A, B>(fn: Maybe<Arity1<A, B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>, promise: PromiseLike<A>): Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>, either: Either<A, B>): Either<A, C>

  <A, B>(fn: List<Arity1<A, B>>): (list: List<A>) => List<B>
  <A, B>(fn: Maybe<Arity1<A, B>>): (maybe: Maybe<A>) => Maybe<B>
  <A, B>(fn: PromiseLike<Arity1<A, B>>): (promise: PromiseLike<A>) => Promise<B>
  <A, B, C>(fn: Either<A, Arity1<B, C>>): (either: Either<A, B>) => Either<A, C>
}
