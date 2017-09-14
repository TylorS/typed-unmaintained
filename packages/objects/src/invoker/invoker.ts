import { curry2, curryN } from '@typed/functions'

import { InvokerFn } from './types'

/**
 * Turns a named method with a specified arity into a function that can be 
 * called directly supplied with arguments and a target object. The returned 
 * function is curried and accepts arity + 1 parameters where the final 
 * parameter is the target object.
 * @param arity 
 * @param method 
 * @name invoker<O>(arity: number, method: keyof O): (...args, object: O) => A
 */
export const invoker: InvokerFn = (curry2(<O, R>(arity: number, method: keyof O) =>
  curryN((arity + 1) as any, function(): R {
    const target = arguments[arity]

    return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity))
  })
) as any) as InvokerFn
