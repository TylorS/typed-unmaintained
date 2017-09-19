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
   */
  export function of<A>(value: A): Just<A> {
    return { '@typed/Just': value }
  }
}
