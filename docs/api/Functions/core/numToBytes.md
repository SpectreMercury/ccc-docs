**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / numToBytes

# Function: numToBytes()

> **numToBytes**(`val`, `bytes`?): `Bytes`

Converts a NumLike value to a byte array in little-endian order.

## Parameters

• **val**: `NumLike`

The value to convert, which can be a string, number, bigint, or HexLike.

• **bytes?**: `number`

The number of bytes to use for the representation. If not provided, the exact number of bytes needed is used.

## Returns

`Bytes`

A Uint8Array containing the byte representation of the numeric value.

## Example

```typescript
const bytes = numToBytes(12345, 4); // Outputs Uint8Array [57, 48, 0, 0]
```

## Source

num/index.ts:67
