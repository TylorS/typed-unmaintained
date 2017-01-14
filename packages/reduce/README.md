# @typed/reduce

> Well-typed Reduce function

Reduce over arrays and array-like items.

## Let me have it!
```sh
npm install --save @typed/reduce
# or
yarn add @typed/reduce
```

## Basic usage
```typescript
import { reduce } from '@typed/reduce';

const sum = (x: number, y: number) => x + y;

const reduceSum = reduce(sum);

const reduceSumFromZero = reduceSum(0);

console.log(reduceSumFromZero([1, 2, 3])) // 6
```