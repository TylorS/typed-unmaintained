import { Lens, pipeLenses } from '@typed/lenses'

import { LensPath } from './types'
import { apply } from '@typed/functions'
import { lensProp } from '../lensProp'

/**
 * Given a path to a value it returns a Lens that operates on that value.
 * @name lensPath<A, B>(path: Array<string>): Lens<A, B>
 */
export const lensPath: LensPath = function(path: ArrayLike<string>): Lens<any, any> {
  return apply(Array.from(path).map(lensProp), pipeLenses)
}
