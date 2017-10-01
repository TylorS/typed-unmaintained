import { curry2 } from '@typed/functions'

/**
 * Curried function to call `String.prototype.split`
 * @name split(search: string | RegExp, str: string): Array<string>
 */
export const split: Split = curry2(__split)

export type Split = {
  (separator: string | RegExp, str: string): Array<string>
  (separator: string | RegExp): (str: string) => Array<string>
}

function __split(separator: string | RegExp, str: string): Array<string> {
  return str.split(separator)
}
