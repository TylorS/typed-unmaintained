/**
 * An immutable List type.
 * @name List
 * @type
 */
export interface List<A> {
  readonly [key: number]: A
  readonly length: number
}

/**
 * A type-alias for numbers representing a List index
 * @name Index
 * @type
 */
export type Index = number
