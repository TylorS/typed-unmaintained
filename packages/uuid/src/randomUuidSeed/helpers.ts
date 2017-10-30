import { isUndefined, not } from '@typed/logic'

import { pipe } from '@typed/functions'

export const isNotUndefined = pipe(isUndefined, not)
