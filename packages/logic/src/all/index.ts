import { List, Predicate } from '../types'

import { curry2 } from '@typed/functions'
import { not } from '../not'

/**
 * Returns `true` if predicate function returns `true` for all values in a `List`.
 * @name all<A>(predicate: Predicate<A>, list: List<A>): boolean
 */
export const all = curry2(__all)

function __all<A>(predicate: Predicate<A>, list: List<A>): boolean {
  for (let i = 0; i < list.length; ++i) if (not(predicate(list[i]))) return false

  return true
}
