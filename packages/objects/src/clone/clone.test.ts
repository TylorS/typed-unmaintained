import { Test, describe, given, it } from '@typed/test'

import { clone } from './clone'

export const test: Test = describe(`clone`, [
  given(`an object`, [
    it(`returns a cloned object`, ({ equal, notOk }) => {
      const obj = {
        a: {
          b: {
            c: {
              d: 1,
              e: {
                f: 2,
              },
            },
          },
        },
      }

      const clonedObj = clone(obj)

      equal(clonedObj, obj)
      notOk(obj.a === clonedObj.a)
      notOk(obj.a.b === clonedObj.a.b)
      notOk(obj.a.b.c === clonedObj.a.b.c)
      notOk(obj.a.b.c.e === clonedObj.a.b.c.e)
    }),
  ]),

  given(`an array`, [
    it('returns a cloned array', ({ notOk, equal }) => {
      const array = [[1, 2], [2, 3], [[4, 5]]]

      const clonedArray = clone(array)

      equal(array, clonedArray)
      notOk(array[0] === clonedArray[0])
      notOk(array[1] === clonedArray[1])
      notOk(array[2] === clonedArray[2])
      notOk(array[2][0] === clonedArray[2][0])
    }),
  ]),
])
