import { List, Predicate } from '../types'

import { Any } from './types'
import { curry2 } from '@typed/functions'

/**
 * Returns `true` if predicate function returns `true` for any value contained 
 * in a `List`.
 * @name any<A>(predicate: Predicate<A>, list: List<A>): boolean
 */
export const any: Any = curry2(__any)

function __any<A>(predicate: Predicate<A>, list: List<A>): boolean {
  for (let i = 0; i < list.length; ++i) if (predicate(list[i])) return true

  return false
}
