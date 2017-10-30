import { RandomNumberGenerator } from './types'
import { UuidArray } from '../types'
import { VALID_UUID_LENGTH } from './constants'

export class NodeGenerator implements RandomNumberGenerator {
  private nodeCrypto: NodeCrypto
  constructor() {
    this.nodeCrypto = require('crypto')
  }

  randomUuidSeed = (): UuidArray => this.nodeCrypto.randomBytes(VALID_UUID_LENGTH)
}

type NodeCrypto = {
  randomBytes(length: typeof VALID_UUID_LENGTH): UuidArray
}
