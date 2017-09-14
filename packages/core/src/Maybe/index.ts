/**
 * Maybe type. Very useful when errors can occur.
 * @name Maybe<A>
 * @type
 */
export type Maybe<A> = Just<A> | Nothing

/**
 * A JSON-serializable Just data-structure
 * @name Just
 * @type
 */
export interface Just<A> {
  readonly '@typed/Just': A
}

/**
 * The Nothing type, used in place of nulls or undefined.
 * @name Nothing
 * @type
 */
export interface Nothing {
  readonly '@typed/Nothing': true
}
