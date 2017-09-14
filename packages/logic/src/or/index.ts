import { Predicate } from '../types'
import { curry3 } from '@typed/functions'

/**
 * Applies `||` between two predicate functions.
 * @name or<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
 */
export const or: Or = curry3(__or)

export type Or = {
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __or<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) || predicate2(value)
}
