import { Prop } from './types'
import { curry2 } from '@typed/functions'

/**
 * Returns the value of a property from an object.
 * @name prop<A, K extends keyof A = K>(key: K, obj: A): A[K]
 */
export const prop: Prop = curry2(<A, K extends keyof A>(key: K, obj: A): A[K] => obj[key])
