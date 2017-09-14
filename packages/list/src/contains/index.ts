import { List } from '../types'
import { curry2 } from '@typed/functions'
import { fromMaybe } from '@typed/maybe'
import { indexOf } from '../indexOf'
import { map } from '@typed/maybe'

/**
 * Returns true if a list contains a value, false otherwise.
 * @name contains<A>(value: A, list: List<A>): boolean
 */
export const contains: Contains = curry2(__contains)

export type Contains = {
  <A>(value: A, list: List<A>): boolean
  <A>(value: A): (list: List<A>) => boolean
}

function __contains<A>(value: A, list: List<A>): boolean {
  return fromMaybe(false, map(() => true, indexOf(value, list)))
}
