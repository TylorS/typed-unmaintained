# @typed/is-stream

> Duck-typing check if a value is a Most.js Stream

<!-- Write a short summary about your library here -->

## Let me have it!
```sh
npm install --save @typed/is-stream
```

## Usage

```typescript
import { isStream } from '@typed/is-stream';
import { just } from 'most';


isStream(just(1)) // true
isStream([]) // false
isStream({}) // false 
```