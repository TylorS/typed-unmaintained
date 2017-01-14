# @typed/compose

> Well-typed compose function for TypeScript

## Let me have it
```sh
npm install --save @typed/compose
# or
yarn add @typed/compose
```

## Basic usage
```typescript
import { compose } from '@typed/compose';

function squared (x: number): number {
  return x * x;
}

console.log(compose(squared, squared)(2)) // 16
```
