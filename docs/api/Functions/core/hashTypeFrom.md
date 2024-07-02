**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / hashTypeFrom

# Function: hashTypeFrom()

> **hashTypeFrom**(`val`): `HashType`

Converts a HashTypeLike value to a HashType.

## Parameters

• **val**: `HashTypeLike`

The value to convert, which can be a string, number, or bigint.

## Returns

`HashType`

The corresponding HashType.

## Throws

Will throw an error if the input value is not a valid hash type.

## Example

```typescript
const hashType = hashTypeFrom(1); // Outputs "data"
const hashType = hashTypeFrom("type"); // Outputs "type"
```

## Source

ckb/script.ts:28
