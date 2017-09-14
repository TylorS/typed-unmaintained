import { invoker } from '@typed/objects'

/**
 * Curried function to call `String.prototype.endsWith`
 * @name endsWith(search: string, str: string): boolean
 */
export const endsWith = invoker(1, 'endsWith')
/**
 * Curried function to call `String.prototype.includes`
 * @name includes(search: string, str: string): boolean
 */
export const includes = invoker(1, 'includes')
/**
 * Curried function to call `String.prototype.startsWith`
 * @name startsWith(search: string, str: string): boolean
 */
export const startsWith = invoker(1, 'startsWith')
/**
 * Curried function to call `String.prototype.trim`
 * @name trim(str: string): string
 */
export const trim = invoker(0, 'trim')
/**
 * Curried function to call `String.prototype.split`
 * @name split(search: string | RegExp, str: string): List<string>
 */
export const split = invoker(1, 'split')
/**
 * Curried function to call `String.prototype.toLowerCase`
 * @name toLowerCase(str: string): string
 */
export const toLowerCase = invoker(0, 'toLowerCase')
/**
 * Curried function to call `String.prototype.toUpperCase`
 * @name toUpperCase(str: string): string
 */
export const toUpperCase = invoker(0, 'toUpperCase')
/**
 * Curried function to call `String.prototype.substring`
 * @name endsWith(startIndex: number, endIndex: number | void, str: string): boolean
 */
export const substring = invoker(2, 'substring')
/**
 * Curried function to call `String.prototype.substr`
 * @name substr(startIndex: number, length: number | void, str: string): boolean
 */
export const substr = invoker(2, 'substr')
