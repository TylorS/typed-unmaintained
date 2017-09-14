import { IfElseArity4 } from './types'
import { curry4 } from '@typed/functions'

/**
 * Function for handling if/Else statements.
 * @name ifElse<A, B>(predicate: Predicate<A>, thenF: Arity1<A, B>, elseF: Arity1<A, B>, value: A): B
 */
export const ifElse: IfElseArity4 = curry4(__ifElse)

function __ifElse<A, B>(
  ifF: (value: A) => boolean,
  thenF: (value: A) => B,
  elseF: (value: A) => B,
  value: A
): B {
  return ifF(value) ? thenF(value) : elseF(value)
}
