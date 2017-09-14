import { Either } from './Either'
import { chain } from './chain'
import { curry2 } from '@typed/functions'

/**
 * Returns a `Either` that is the result of calling `f` with the resolved 
 * value of another `Either`.
 * @name map<A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A C>
 */
export const map: EitherMap = curry2(__map)

function __map<A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C> {
  return chain(value => Either.of(f(value)), either)
}

export type EitherMap = {
  <A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => C): (either: Either<A, B>) => Either<A, C>
}
