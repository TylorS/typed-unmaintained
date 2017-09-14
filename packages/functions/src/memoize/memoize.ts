/**
 * Memoizes a function.
 * @name memoize<F extends Function>(f: F): F
 */
export const memoize = function<F extends Function>(f: F): F {
  const cache = new Map<any, any>()

  return (function(...args: Array<any>): any {
    const key = args.reduce((x, y) => x + JSON.stringify(y), '')

    if (cache.has(key)) return cache.get(key)

    let result = f.apply(this, args)

    if (typeof result === 'function') result = memoize(result)

    cache.set(key, result)

    return result
  } as any) as F
}
