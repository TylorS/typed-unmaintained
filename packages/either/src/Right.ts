/**
 * A JSON-serializable Right data-structure.
 * @name Right
 * @type
 */
export interface Right<A> {
  readonly '@typed/Right': A
}

export namespace Right {
  /**
   * Creates a Right
   * @name Right.of<A>(value: A): Right<A>
   * @param {A}
   * @return {Right<A>}
   */
  export function of<A>(value: A): Right<A> {
    return Object.freeze<Right<A>>({ '@typed/Right': value })
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
