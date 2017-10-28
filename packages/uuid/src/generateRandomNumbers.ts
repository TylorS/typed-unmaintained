const isBrowser = typeof process === 'undefined'

const ARRAY_SIZE = 16

declare const msCrypto: Crypto

export const generateRandomNumbers: () => UuidArray = isBrowser
  ? () => (crypto || msCrypto).getRandomValues(new Uint8Array(ARRAY_SIZE))
  : () => require('crypto').randomBytes(ARRAY_SIZE)

// Represents random numbers used to generate UUID
export interface UuidArray {
  readonly 0: number
  readonly 1: number
  readonly 2: number
  readonly 3: number
  readonly 4: number
  readonly 5: number
  readonly 6: number
  readonly 7: number
  readonly 8: number
  readonly 9: number
  readonly 10: number
  readonly 11: number
  readonly 12: number
  readonly 13: number
  readonly 14: number
  readonly 15: number

  readonly length: 16
}
