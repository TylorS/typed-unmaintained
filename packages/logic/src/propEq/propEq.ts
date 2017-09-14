import { PropEq } from './types'
import { curry3 } from '@typed/functions'
import { equals } from '../equals'

/**
 * Returns `true` if a given object's key value is equal to the given `value`.
 * @name propEq<O, K extends keyof O>(key: K, value: O[K], obj: O): boolean
 */
export const propEq: PropEq = curry3(function<O, K extends keyof O>(
  key: K,
  value: O[K],
  obj: O
): boolean {
  return equals(obj[key], value)
})
