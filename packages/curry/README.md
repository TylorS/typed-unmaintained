# @typed/curry

> A typescript version of curry for functional programming

## Let me have it
```sh
npm install --save @typed/curry
# or
yarn add @typed/curry
```

One caveat is that it only accepts functions of arity 5 or less, as I believe
functions with more than 3, and especially 5, parameters to be an anti-pattern.

## Basic usage
```typescript
import { curry } from '@typed/curry';

const add = curry((a: number, b: number) => a + b);

const add1 = add(1);
const add2 = add(2);

console.log(add1(5)) // 6
console.log(add2(5)) // 7
```