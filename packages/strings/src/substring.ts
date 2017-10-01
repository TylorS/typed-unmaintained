import { curry3 } from '@typed/functions'

/**
 * A curried function to call `String.prototype.substring`
 * @name substring(from: number, to: number | undefined, str: string)
 */
export const substring: Substring = curry3(__substring)

export type Substring = {
  (from: number, to: number | undefined, str: string): string
  (from: number, to: number | undefined): (str: string) => string
  (from: number): {
    (to: number | undefined, str: string): string
    (to: number | undefined): (str: string) => string
  }
}

function __substring(from: number, to: number | undefined, str: string): string {
  return str.substring(from, to)
}
