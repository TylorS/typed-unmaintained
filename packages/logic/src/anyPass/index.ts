import { List, Predicate } from '../types'

import { curry2 } from '@typed/functions'

/**
 * Returns true if any predicates returns true, false otherwise.
 * @name anyPass<A>(predicates: List<Predicate<A>>, value: A): boolean
 */
export const anyPass: AnyPass = curry2(__anyPass)

export type AnyPass = {
  <A>(predicates: List<Predicate<A>>, value: A): boolean
  <A>(predicates: List<Predicate<A>>): (value: A) => boolean
}

function __anyPass<A>(predicates: List<Predicate<A>>, value: A): boolean {
  for (const predicate of Array.from(predicates)) if (predicate(value)) return true

  return false
}
