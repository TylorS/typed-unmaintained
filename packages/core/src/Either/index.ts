/**
 * Either data structure. Extremely useful for handling errors or different 
 * logic paths without the use of if-statements.
 * @name Either
 * @type
 */
export type Either<A, B> = Left<A> | Right<B>

/**
 * A JSON-serializable Left<A> data-structure.
 * @name Left
 * @type
 */
export interface Left<A> {
  readonly '@typed/Left': A
}

/**
 * A JSON-serializable Right data-structure.
 * @name Right
 * @type
 */
export interface Right<A> {
  readonly '@typed/Right': A
}
