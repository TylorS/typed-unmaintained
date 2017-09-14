import { Test, describe, it } from '@typed/test'

import { pipe } from './pipe'

export const test: Test = describe(`pipe`, [
  it('pipes functions', ({ equal }) => {
    const f = (x: number) => x + 1
    const g = (x: number) => x * 2

    equal(pipe(f)(1), 2)
    equal(pipe(f, g)(1), 4)
    equal(pipe(f, g, g)(1), 8)
    equal(pipe(f, g, g, f)(1), 9)
    equal(pipe(f, g, g, f, g, g, f)(1), 37)
  }),
])
