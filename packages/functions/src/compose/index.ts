import { Compose } from './types'
import { apply } from '../apply'
import { pipe } from '../pipe'

/**
 * Right-to-left function composition.
 * @name compose<A, B>(...fns: Array<Function>): (value: A) => B
 */
export const compose: Compose = (...fns: Array<(value: any) => any>) => apply(fns.reverse(), pipe)
