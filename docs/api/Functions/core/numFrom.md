**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / numFrom

# Function: numFrom()

> **numFrom**(`val`): `Num`

Converts a NumLike value to a Num (bigint).

## Parameters

• **val**: `NumLike`

The value to convert, which can be a string, number, bigint, or HexLike.

## Returns

`Num`

A Num (bigint) representing the value.

## Example

```typescript
const num = numFrom("12345"); // Outputs 12345n
const numFromHex = numFrom("0x3039"); // Outputs 12345n
```

## Source

num/index.ts:27
