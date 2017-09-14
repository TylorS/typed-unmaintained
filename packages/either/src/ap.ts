import { Either } from './Either'
import { chain } from './chain'
import { curry2 } from '@typed/functions'
import { map } from './map'

/**
 * Applies the function contains in an `Either` to the value contained in a 
 * second `Either`.
 * @name ap<A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>
 */
export const ap: EitherAp = curry2(__ap)

function __ap<A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C> {
  return chain(f => map(f, value), fn)
}

export type EitherAp = {
  <A, B, C>(fn: Either<A, (value: B) => C>, value: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Either<A, (value: B) => C>): (value: Either<A, B>) => Either<A, C>
}
