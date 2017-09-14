import { Apply } from './types'
import { List } from '@typed/core'

/**
 * Given a list of arguments and a function, applies the function with 
 * the given arguments.
 * @name apply<A>(list: List<any>, fn: (...args: Array<any>) => A): A
 */
export const apply: Apply = function<A>(list: List<any>, f?: (...args: Array<any>) => A) {
  if (!f) return (f: (...args: Array<any>) => A) => __apply(list, f)

  return __apply(list, f)
}

function __apply<A>(list: List<any>, f: (...args: Array<any>) => A) {
  switch (list.length) {
    case 0:
      return f()
    case 1:
      return f(list[0])
    case 2:
      return f(list[0], list[1])
    case 3:
      return f(list[0], list[1], list[2])
    case 4:
      return f(list[0], list[1], list[2], list[3])
    case 5:
      return f(list[0], list[1], list[2], list[3], list[4])
    default:
      return f.apply(null, list)
  }
}
