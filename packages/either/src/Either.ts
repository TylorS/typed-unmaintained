import { Arity1, curry2, pipe } from '167'
import { Right, fromRight } from './Right'

import { Left } from './Left'

/**
 * Either data structure. Extremely useful for handling errors or different 
 * logic paths without the use of if-statements.
 * @name Either
 * @type
 */
export type Either<A, B> = Left<A> | Right<B>

export namespace Either {
  /**
   * Creates an Either<A, B> that is of type Right<B>
   * @name Either.of<A, B>(value: B): Either<A, B>
   */
  export const of = <A, B>(value: B): Either<A, B> => Right.of(value)
  /**
   * Creates an Either<A, B> that is of type Left<A>
   * @name Either.left<A, B>(value: A): Either<A, B> 
   */
  export const left = <A, B>(value: A): Either<A, B> => Left.of(value)

  /**
   * Returns true if an Either<A, B> is type Left<A>
   * @name Either.isLeft<A, B>(either: Either<A, B>): Either is Left<A>
   */
  export function isLeft<A, B>(either: Either<A, B>): either is Left<A> {
    return either.hasOwnProperty('@typed/Left')
  }

  /**
   * Returns true if an Either<A, B> is type Right<B>
   * @name Either.isRight<A, B>(either: Either<A, B>): either is Right<B>
   */
  export function isRight<A, B>(either: Either<A, B>): either is Right<B> {
    return either.hasOwnProperty('@typed/Right')
  }

  /**
   * Create a new Either<A, C> by calling a function `f` with the value of 
   * the given Either<A, B> if that Either is Right<B> and not Left<A>. If the 
   * given Either<A, B> is Left<A> it is simply returned.
   * @name Either.chain<A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
   */
  export const chain: EitherChain = curry2(function chain<A, B, C>(
    f: (value: B) => Either<A, C>,
    either: Either<A, B>
  ): Either<A, C> {
    return isLeft<A, B>(either) ? either : f(fromRight(either))
  })

  /**
   * Maps the value of a Right<B> either to type Either<A, C>
   * @name Either.map<A, B, C>(f: (value: B) => C, either: Either<A, B>): Either<A, C>
   */
  export const map: EitherMap = curry2(function map<A, B, C>(
    f: Arity1<B, C>,
    either: Either<A, B>
  ): Either<A, C> {
    return chain<A, B, C>(pipe<B, C, Either<A, C>>(f, Either.of), either)
  })

  /**
   * Applies the function contained in a Right Either, to the value of contained
   * in another Right Either.
   * @name Either.ap<A, B, C>(fn: Either<A, Arity1<B, C>>, value: Either<A, B>): Either<A, C>
   */
  export const ap: EitherAP = curry2(function ap<A, B, C>(
    fn: Either<A, Arity1<B, C>>,
    value: Either<A, B>
  ): Either<A, C> {
    return chain(f => map(f, value), fn)
  })
}

export interface EitherChain {
  <A, B, C>(f: (value: B) => Either<A, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: (value: B) => Either<A, C>): (either: Either<A, B>) => Either<A, C>
}

export interface EitherMap {
  <A, B, C>(f: Arity1<B, C>, either: Either<A, B>): Either<A, C>
  <A, B, C>(f: Arity1<B, C>): (either: Either<A, B>) => Either<A, C>
}

export interface EitherAP {
  <A, B, C>(fn: Either<A, Arity1<B, C>>, either: Either<A, B>): Either<A, C>
  <A, B, C>(fn: Either<A, Arity1<B, C>>): (either: Either<A, B>) => Either<A, C>
}
