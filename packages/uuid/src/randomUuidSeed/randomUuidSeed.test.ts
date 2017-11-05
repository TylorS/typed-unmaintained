import { Test, describe, it } from '@typed/test'

import { randomUuidSeed } from './randomUuidSeed'

export const test: Test = describe(`randomUuidSeed`, [
  it(`returns an object with keys numbered 0-15 with values of type number`, ({ equal }) => {
    const sut = randomUuidSeed()
    const typeOf = <A>(type: string) => (value: A) => equal(type, typeof value)
    const isNumber = typeOf('number')

    isNumber(sut[0])
    isNumber(sut[1])
    isNumber(sut[2])
    isNumber(sut[3])
    isNumber(sut[4])
    isNumber(sut[5])
    isNumber(sut[6])
    isNumber(sut[7])
    isNumber(sut[8])
    isNumber(sut[9])
    isNumber(sut[10])
    isNumber(sut[11])
    isNumber(sut[12])
    isNumber(sut[13])
    isNumber(sut[14])
    isNumber(sut[15])
  }),
])
