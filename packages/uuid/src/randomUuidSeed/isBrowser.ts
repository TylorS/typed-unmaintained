import { isNotUndefined } from './helpers'

export const isBrowser: boolean = isNotUndefined(crypto) || isNotUndefined(msCrypto)
