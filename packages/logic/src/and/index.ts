import { Predicate } from '../types'
import { curry3 } from '@typed/functions'

/**
 * Applies `&&` between two predicate functions.
 * @name and<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
 */
export const and: And = curry3(__and)

export type And = {
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean
  <A>(predicate1: Predicate<A>, predicate2: Predicate<A>): Predicate<A>
  <A>(predicate1: Predicate<A>): {
    (predicate2: Predicate<A>, value: A): boolean
    (predicate2: Predicate<A>): Predicate<A>
  }
}

function __and<A>(predicate1: Predicate<A>, predicate2: Predicate<A>, value: A): boolean {
  return predicate1(value) && predicate2(value)
}
