import { Uuid } from '../types'
import { UuidArray } from '../randomUuidSeed'

export function uuid4(randomNumbers: UuidArray): Uuid {
  return (
    randomNumbers[0].toString(16) +
    randomNumbers[1].toString(16) +
    randomNumbers[2].toString(16) +
    randomNumbers[3].toString(16) +
    '-' +
    randomNumbers[4].toString(16) +
    randomNumbers[5].toString(16) +
    '-' +
    ((randomNumbers[6] & 0x0f) | 0x40).toString(16) +
    randomNumbers[7].toString(16) +
    '-' +
    ((randomNumbers[8] & 0xbf) | 0x80).toString(16) +
    randomNumbers[9].toString(16) +
    '-' +
    randomNumbers[10].toString(16) +
    randomNumbers[11].toString(16) +
    randomNumbers[12].toString(16) +
    randomNumbers[13].toString(16) +
    randomNumbers[14].toString(16) +
    randomNumbers[15].toString(16)
  )
}
