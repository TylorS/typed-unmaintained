# @typed/is-array-like

> Well-typed isArrayLike implementation

<!-- Write a short summary about your library here -->

## Let me have it!
```sh
npm install --save @typed/is-array-like
```

## API

### `isArrayLike<A>(x: any): x is ArrayLike<A>;

```typescript
import { isArrayLike } from '@typed/is-array-like';

isArrayLike([]) // true

function () {
  isArrayLike(arguments) // true
}

isArrayLike({}) // false
```