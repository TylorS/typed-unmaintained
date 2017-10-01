import { curry3 } from '@typed/functions'

/**
 * A curried function to call `String.prototype.substr`
 * @name substr(from: number, length: number | undefined, str: string): string
 */
export const substr: Substr = curry3(__substr)

export type Substr = {
  (from: number, length: number | undefined, str: string): string
  (from: number, length: number | undefined): (str: string) => string
  (from: number): {
    (length: number | undefined, str: string): string
    (length: number | undefined): (str: string) => string
  }
}

function __substr(from: number, length: number | undefined, str: string): string {
  return str.substr(from, length)
}
