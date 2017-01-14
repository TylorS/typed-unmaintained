# @typed/filter

> Well-typed filtering

Filter ArrayLike objects and Arrays, but also [most.js](https://github.com/cujojs/most)
Streams and Filterables!

## Let me have it!
```sh
npm install --save @typed/filter
```

## Usage
```typescript
import { filter } from '@typed/filter';
import { from } from 'most';

const evens = filter(x => x % 2 === 0);

const array = [0, 1, 2, 3, 4];

evens(array) === [0, 2, 4];
evens(from(array)).observe(console.log) // 0, 2, 4
```

## Types
```typescript
export interface Filterable<A> {
  filter(predicate: (a: A) => boolean): Filterable<A>;
}
```