import { Uuid } from './types'
import { generateRandomNumbers } from './generateRandomNumbers'
import { generateUuid } from './generateUuid'
import { pipe } from '@typed/functions'

/**
 * Creates a universally unique identifier that works in both browser and Node.js
 * environments.
 * @name createUuid(): Uuid
 */
export const createUuid = pipe(generateRandomNumbers, generateUuid) as () => Uuid
