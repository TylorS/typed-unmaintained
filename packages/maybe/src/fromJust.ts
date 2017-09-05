import { Just } from './Just'

/**
 * Extract the value contained in a Just
 * @name fromJust<A>(just: Just<A>): A
 * @example
 * import { fromJust, Just } from '@typed/maybe'
 * 
 * const value = fromJust(Just.of(1))
 * console.log(value) // logs '1'
 */
export function fromJust<A>(just: Just<A>): A {
  return just['@typed/Just']
}
