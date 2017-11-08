# @typed/uuid -- 1.0.0

Cross-platform TypeScript implementation of UUID

## Get it
```sh
yarn add @typed/uuid
# or
npm install --save @typed/uuid
```

## API Documentation

All functions are curried!

#### Uuid

<p>

A Universally Unique identifier.

**Note:** A Uuid will *not* actually have ._uuid property on it. This is only used to
differentiate type `Uuid` from type `string` for an improved type experience.

</p>


```typescript

export type Uuid = string & { readonly _uuid: undefined }

```


#### isUuid(value: string): value is Uuid

<p>

Returns `true` if a string is a UUID.

</p>


<details>
<summary>See the code</summary>

```typescript

export function isUuid(value: string | Uuid): value is Uuid {
  return uuidPattern.test(value as string)
}

```

</details>
<hr />


#### uuid(): Uuid

<p>

Creates a universally unique identifier that works in both browser and Node.js
environments.

</p>


<details>
<summary>See the code</summary>

```typescript

export const uuid = pipe(randomUuidSeed, uuid4) as () => Uuid

```

</details>
<hr />
