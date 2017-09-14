import { typeOf } from './typeOf'

/**
 * Returns a deep clone of a value.
 * @name clone<A>(obj: A): A
 */
export function clone<A>(obj: A): A {
  return _clone(obj, [], [], true)
}

function _clone(value: any, refFrom: Array<any>, refTo: Array<any>, deep: boolean): any {
  function copy(copiedValue: any) {
    const length = refFrom.length
    let i = 0

    for (; i < length; ++i) if (value === refFrom[i]) return refTo[i]

    refFrom[i + 1] = value
    refTo[i + 1] = copiedValue

    for (const key in value) {
      if (!value.hasOwnProperty(key)) continue

      copiedValue[key] = deep ? _clone(value[key] as any, refFrom, refTo, true) : value[key]
    }

    return copiedValue
  }

  switch (typeOf(value)) {
    case 'Object':
      return copy({})
    case 'Array':
      return copy([])
    case 'Date':
      return new Date(value.valueOf())
    case 'RegExp':
      return cloneRegexp(value)
    default:
      return value
  }
}

function cloneRegexp(pattern: RegExp): RegExp {
  return new RegExp(
    pattern.source,
    (pattern.global ? 'g' : '') +
      (pattern.ignoreCase ? 'i' : '') +
      (pattern.multiline ? 'm' : '') +
      (pattern.sticky ? 'y' : '') +
      (pattern.unicode ? 'u' : '')
  )
}
