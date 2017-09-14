import * as types from '@typed/core'

export type Just<A> = types.Just<A>

export namespace Just {
  /**
   * Creates a Just given a value. 
   * @name Just.of<A>(value: A): Just<A>
   */
  export function of<A>(value: A): Just<A> {
    return { '@typed/Just': value }
  }
}
