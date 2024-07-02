**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / numLeFromBytes

# Function: numLeFromBytes()

> **numLeFromBytes**(`val`): `Num`

Converts a byte array to a Num (bigint) assuming little-endian order.

## Parameters

• **val**: `BytesLike`

The byte array to convert.

## Returns

`Num`

A Num (bigint) representing the numeric value.

## Example

```typescript
const num = numLeFromBytes(new Uint8Array([57, 48, 0, 0])); // Outputs 12345n
```

## Source

num/index.ts:137
