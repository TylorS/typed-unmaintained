import { Uuid } from './types'
import { pipe } from '@typed/functions'
import { randomUuidSeed } from './randomUuidSeed'
import { uuid4 } from './uuid4'

/**
 * Creates a universally unique identifier that works in both browser and Node.js
 * environments.
 * @name uuid(): Uuid
 */
export const uuid = pipe(randomUuidSeed, uuid4) as () => Uuid
