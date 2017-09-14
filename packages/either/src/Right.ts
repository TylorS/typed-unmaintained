import * as types from '@typed/core'

export type Right<A> = types.Right<A>

export namespace Right {
  /**
   * Creates a Right
   * @name Right.of<A>(value: A): Right<A>
   * @param {A}
   * @return {Right<A>}
   */
  export function of<A>(value: A): Right<A> {
    return { '@typed/Right': value }
  }
}

/**
 * Extracts the value contained in a Right.
 * @name fromRight<A>(right: Right<A>): A
 * @param right 
 */
export function fromRight<A>(right: Right<A>): A {
  return right['@typed/Right']
}
