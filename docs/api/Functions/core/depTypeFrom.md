**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / depTypeFrom

# Function: depTypeFrom()

> **depTypeFrom**(`val`): `DepType`

Converts a DepTypeLike value to a DepType.

## Parameters

• **val**: `DepTypeLike`

The value to convert, which can be a string, number, or bigint.

## Returns

`DepType`

The corresponding DepType.

## Throws

Will throw an error if the input value is not a valid dep type.

## Example

```typescript
const depType = depTypeFrom(1); // Outputs "code"
const depType = depTypeFrom("depGroup"); // Outputs "depGroup"
```

## Source

ckb/transaction.ts:37
