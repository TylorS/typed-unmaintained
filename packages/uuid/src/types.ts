/**
 * A Universally Unique identifier.
 *
 * **Note:** A Uuid will *not* actually have ._uuid property on it. This is only used to
 * differentiate type `Uuid` from type `string` for an improved type experience.
 * @name Uuid
 * @type
 */
export interface Uuid extends String {
  readonly _uuid: undefined
}
