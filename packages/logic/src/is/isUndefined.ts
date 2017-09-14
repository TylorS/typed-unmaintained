/**
 * Returns true if the value is undefined.
 * @name isUndefined(x: any): x is undefined
 */
export function isUndefined(x: any): x is undefined {
  return x === void 0
}
