# @typed/map

> Map over data structures with types :fire:

This works over the usual Arrays and ArrayLike objects, but also
over [most.js](https://github.com/cujojs/most) Streams, or
any other data structures that implement `Functor`.

## Let me have it!
```sh
npm install --save @typed/map
```

## Usage

```typescript
import { map, Functor } from '@typed/map';
import { just } from 'most';

const add1 = map(x => x + 1);

add1(just(1)).observe(console.log) // 2
add1([1, 2, 3]) // [ 2, 3, 4 ]

class MyFunctor<A> implements Functor<A> {
  map<B>(f: (a: A) => B): MyFunctor<B> {
    return mapOverMyDataStructure(f, this.data);
  }
}

add1(new MyFunctor(...)) // totally depends on your data structure but it will work! :)
```

## Types

### Functor
```typescript
export interface Functor<A> {
  map<B>(f: (a: A) => B): Functor<B>;
}
```