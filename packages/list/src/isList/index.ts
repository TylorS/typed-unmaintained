import { List } from '../types'

/**
 * Returns true if a value is a `List`.
 * @name isList<A = any>(x: any): x is List<A>
 */
export function isList<A = any>(x: any): x is List<A> {
  if (Array.isArray(x)) return true
  if (!x || typeof x !== 'object' || typeof x === 'string') return false
  if (x.nodeType === 1) return !!x.length
  if (x.length === 0) return true
  if (x.length > 0) return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1)
  return false
}
