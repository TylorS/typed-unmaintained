import { Arity1, always, curry2, ifElse, pipe } from '167'
import { Just, fromJust } from './Just'

import { Nothing } from './Nothing'

/**
 * Maybe type. Very useful when errors can occur.
 * @name Maybe<A>
 * @type
 */
export type Maybe<A> = Just<A> | Nothing

export namespace Maybe {
  /**
   * Creates a Maybe containg a value
   * @name Maybe.of<A>(value: A): Maybe<A>
   * @example
   * import { Maybe } from '@typed/maybe'
   * 
   * const maybe: Maybe<number> = Maybe.of(1)
   */
  export function of<A>(value: A): Maybe<A> {
    return Just.of(value)
  }

  /**
   * Returns a instance of Nothing.
   * @name Maybe.nothing<A = any>(): Maybe<A>
   */
  export function nothing<A = any>(): Maybe<A> {
    return Nothing
  }

  /**
   * Given a Maybe<A> it returns true if the Maybe<A> is Just<A> or 
   * false if it is a Nothing.
   * @name Maybe.isJust<A>(maybe: Maybe<A>): maybe is Just<A>
   * @example
   * import { Maybe } from '@typed/maybe'
   * 
   * console.log(Maybe.isJust(Maybe.nothing())) // logs false
   * console.log(Maybe.isJust(Maybe.of(1))) // logs true
   */
  export function isJust<A>(maybe: Maybe<A>): maybe is Just<A> {
    return maybe.hasOwnProperty('@typed/Just')
  }

  /**
   * Given a Maybe<A> it returns false if the Maybe<A> is Just<A> or 
   * true if it is a Nothing.
   * @name Maybe.isNothing<A>(maybe: Maybe<A>): maybe is Nothing
   * @example
   * import { Maybe, Nothing } from '@typed/maybe'
   * 
   * console.log(Maybe.isNothing(Nothing)) // logs true
   * console.log(Maybe.isNothing(Maybe.of(1))) // logs false
   */
  export function isNothing<A>(maybe: Maybe<A>): maybe is Nothing {
    return !!(maybe as Nothing)['@typed/Nothing']
  }

  /**
   * Given a value returns true if it is a Maybe
   * @name isMaybe<A>(x: any): x is Maybe<A>
   */
  export function isMaybe<A>(x: any): x is Maybe<A> {
    return isJust(x) || isNothing(x)
  }

  /**
   * Create a new Maybe from another Maybe's value.
   * @name Maybe.chain<A, B>(f: Arity1<A, Maybe<B>>, maybe: Maybe<A>): Maybe<B>
   */
  export const chain: MaybeChain = curry2(function<A, B>(
    f: Arity1<A, Maybe<B>>,
    maybe: Maybe<A>
  ): Maybe<B> {
    return ifElse<Maybe<A>, Maybe<B>>(Maybe.isJust, pipe(fromJust, f), always(Nothing), maybe)
  })

  /**
   * Map the value of a Maybe.
   * @name Maybe.map<A, B>(f: Arity1<A, B>, maybe: Maybe<A>): Maybe<B>
   */
  export const map: MaybeMap = curry2(function map<A, B>(
    f: Arity1<A, B>,
    maybe: Maybe<A>
  ): Maybe<B> {
    return Maybe.chain(pipe(f, Just.of), maybe)
  })

  /**
   * Apply a function contained in a Maybe to a value contained in another Maybe.
   * @name Maybe.ap<A, B>(fn: Maybe<Arity1<A, B>>, value: Maybe<A>): Maybe<B>
   */
  export const ap: MaybeAP = curry2(function ap<A, B>(
    fn: Maybe<Arity1<A, B>>,
    value: Maybe<A>
  ): Maybe<B> {
    return Maybe.chain(f => Maybe.map(f, value), fn)
  })
}

/**
 * Given a default value and a Maybe returns the default value if the Maybe is a 
 * Nothing or the value contained in a Just.
 * @name fromMaybe<A>(defaultValue: A, maybe: Maybe<A>): A
 */
export const fromMaybe: FromMaybe = curry2(function fromMaybe<A>(
  defaultValue: A,
  maybe: Maybe<A>
): A {
  return ifElse<Maybe<A>, A>(Maybe.isJust, fromJust, always(defaultValue), maybe)
})

export interface FromMaybe {
  <A>(defaultValue: A, maybe: Maybe<A>): A
  <A>(defaultValue: A): (maybe: Maybe<A>) => A
}

export interface MaybeMap {
  <A, B>(f: Arity1<A, B>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: Arity1<A, B>): (maybe: Maybe<A>) => Maybe<B>
}

export interface MaybeChain {
  <A, B>(f: Arity1<A, Maybe<B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: Arity1<A, Maybe<B>>): (maybe: Maybe<A>) => Maybe<B>
}

export interface MaybeAP {
  <A, B>(fn: Maybe<Arity1<A, B>>, maybe: Maybe<A>): Maybe<B>
  <A, B>(f: Maybe<Arity1<A, B>>): (maybe: Maybe<A>) => Maybe<B>
}
