import { List } from '../types'
import { curry2 } from '@typed/functions'

/**
 * Takes a `List<string>` and concatenates them via with a defined
 * separator.
 * @name join(separator: string, list: List<string>): string
 */
export const join: Join = curry2(__join)

export type Join = {
  (separator: string, list: List<string>): string
  (separator: string): (list: List<string>) => string
}

function __join(separator: string, list: List<string>): string {
  const itemCount = list.length

  let str = ''

  if (itemCount === 0) return str

  str += list[0]

  if (itemCount === 1) return str

  for (let i = 1; i < itemCount; ++i) str += separator + list[i]

  return str
}
