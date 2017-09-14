import * as types from '@typed/core'

export type Left<A> = types.Left<A>

export namespace Left {
  /**
   * Create a Left<A>
   * @name Left.of<A>(value: A): Left<A>
   */
  export function of<A>(value: A): types.Left<A> {
    return { '@typed/Left': value }
  }
}

/**
 * Extracts the value contained in a Left.
 * @name fromLeft<A>(left: Left<A>): A
 */
export function fromLeft<A>(left: types.Left<A>): A {
  return left['@typed/Left']
}
