/**
 * Returns true if value is a number.
 * @name isNumber(x: any): x is number
 */
export function isNumber(x: any): x is number {
  return typeof x === 'number'
}
