import { BrowserGenerator, NodeGenerator, RandomNumberGenerator } from './RandomNumberGenerator'

import { isBrowser } from './isBrowser'

export const { randomUuidSeed }: RandomNumberGenerator = isBrowser
  ? new BrowserGenerator()
  : new NodeGenerator()
