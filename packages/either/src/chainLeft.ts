import { Either, isLeft } from './Either'

import { curry2 } from '@typed/functions'
import { fromLeft } from './Left'

/**
 * Returns a `Either` that is the result of calling `f` with the rejected 
 * value of another `Either`.
 * @name chainLeft<A, B, C>(f: (value: B) => Either<C, B>, either: Either<A, B>): Either<A C>
 */
export const chainLeft: EitherChainLeft = curry2(__chainLeft)

function __chainLeft<A, B, C>(f: (value: A) => Either<C, B>, either: Either<A, B>): Either<C, B> {
  return isLeft(either) ? f(fromLeft(either)) : either
}

export type EitherChainLeft = {
  <A, B, C>(f: (value: A) => Either<C, B>, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => Either<C, B>): (either: Either<A, B>) => Either<C, B>
}
