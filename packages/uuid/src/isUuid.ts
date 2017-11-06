import { Uuid } from './types'

const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/

/**
 * Returns `true` if a string is a UUID.
 * @name isUuid(value: string): value is Uuid
 */
export function isUuid(value: string | Uuid): value is Uuid {
  return uuidPattern.test(value as string)
}
