import { RandomNumberGenerator } from './types'
import { UuidArray } from '../types'
import { VALID_UUID_LENGTH } from './constants'

export class BrowserGenerator implements RandomNumberGenerator {
  private browserCrypto: Crypto
  constructor() {
    this.browserCrypto = crypto || msCrypto
  }

  randomUuidSeed = (): UuidArray =>
    this.browserCrypto.getRandomValues(new Uint8Array(VALID_UUID_LENGTH))
}

declare global {
  export interface Crypto {
    getRandomValues(view: ArrayBufferView): UuidArray
  }

  // Adds support for IE 11.
  export const msCrypto: Crypto
}
