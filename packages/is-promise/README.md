# @typed/is-promise

> Check if a value is PromiseLike

## Let me have it!
```sh
npm install --save @typed/is-promise
```

## API

```typescript
import { isPromise } from '@typed/is-promise';

isPromise(1) // false
isPromise(Promise.resolve(1)) // true
```
