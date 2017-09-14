import { Either } from './Either'
import { chainLeft } from './chainLeft'
import { curry2 } from '@typed/functions'

/**
 * Returns a `Either` that is the result of calling `f` with the resolved 
 * value of another `Either`.
 * @name mapLeft<A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<A C>
 */
export const mapLeft: EitherMapLeft = curry2(__mapLeft)

function __mapLeft<A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<C, B> {
  return chainLeft(value => Either.left(f(value)), either)
}

export type EitherMapLeft = {
  <A, B, C>(f: (value: A) => C, either: Either<A, B>): Either<C, B>
  <A, B, C>(f: (value: A) => C): (either: Either<A, B>) => Either<C, B>
}
