/**
 * The Nothing type, used in place of nulls or undefined.
 * @name Nothing
 * @type
 */
export interface Nothing {
  readonly '@typed/Nothing': true
}
export const Nothing: Nothing = Object.freeze<Nothing>({ '@typed/Nothing': true })
