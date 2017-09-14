import { ArityN } from '../types'
import { CurryNFn } from './types'

/**
 * Curries a function to `n` arity.
 * @name curryN(arity: number, f: Function): CurriedFunction
 */
export const curryN: CurryNFn = curriedN(
  2,
  (arity: number, f: ArityN<any>) => curriedN(arity, f, []),
  []
)

function curriedN(arity: number, f: ArityN<any>, previousArgs: Array<any>): ArityN<any> {
  if (arity <= 1) return f

  return function(...args: Array<any>) {
    const concatArgs = previousArgs.concat(args)

    if (concatArgs.length >= arity) return f.apply(this, concatArgs)

    return curriedN(arity, f, concatArgs)
  }
}
