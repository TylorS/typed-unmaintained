import { Test, describe, it } from '@typed/test'

import { generateRandomNumbers } from './generateRandomNumbers'

export const test: Test = describe(`generateRandomNumbers`, [
  it(`returns an ArrayLike of numbers 16 values in length`, ({ equal }) => {
    const sut = generateRandomNumbers()
    const typeOf = <A>(type: string) => (value: A) => equal(type, typeof value)
    const isNumber = typeOf('number')
    const expectedLength = 16

    equal(expectedLength, sut.length)
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
