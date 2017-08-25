import { clone } from '167'

/**
 * A JSON-serializable Just data-structure
 * @name Just
 * @type
 */
export interface Just<A> {
  readonly '@typed/Just': A
}

export namespace Just {
  /**
   * Creates a Just given a value. 
   * @name Just.of<A>(value: A): Just<A>
   * @example
   * import { Maybe, Just, Nothing } from '@typed/maybe'
   * 
   * function toMaybe<A>(value: A | null): Maybe<A> {
   *   return value === null ? Nothing : Just.of(value)
   * }
   */
  export function of<A>(value: A): Just<A> {
    return Object.freeze<Just<A>>({ '@typed/Just': value })
  }
}

/**
 * Extract the value contained in a Just
 * @name fromJust<A>(just: Just<A>): A
 * @example
 * import { fromJust, Just } from '@typed/maybe'
 * 
 * const value = fromJust(Just.of(1))
 * console.log(value) // logs '1'
 */
export function fromJust<A>(just: Just<A>): A {
  return clone(just['@typed/Just'] as any)
}
