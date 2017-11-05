import { UuidArray } from '../types'

export interface RandomNumberGenerator {
  readonly randomUuidSeed: () => UuidArray
}
