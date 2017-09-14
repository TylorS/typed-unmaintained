import { ComposeLenses } from './types'
import { Lens } from '../types'
import { pipeLenses } from '../pipeLenses'

/**
 * Right-to-left lens composition.
 * @name composeLenses(...lens: Array<Lens<any, any>): Lens<any, any>
 */
export const composeLenses: ComposeLenses = function(
  ...lenses: Array<Lens<any, any>>
): Lens<any, any> {
  return pipeLenses.apply(this, lenses.reverse())
}
