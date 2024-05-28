[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / numLeToBytes

# Function: numLeToBytes()

> **numLeToBytes**(`val`, `bytes`?): [`Bytes`](ccc.Type.Bytes.md)

Converts a NumLike value to a byte array in little-endian order.

## Parameters

• **val**: [`NumLike`](ccc.Type.NumLike.md)

The value to convert, which can be a string, number, bigint, or HexLike.

• **bytes?**: `number`

The number of bytes to use for the representation. If not provided, the exact number of bytes needed is used.

## Returns

[`Bytes`](ccc.Type.Bytes.md)

A Uint8Array containing the byte representation of the numeric value.

## Example

```typescript
const bytes = numLeToBytes(12345, 4); // Outputs Uint8Array [57, 48, 0, 0]
```

## Source

[num/index.ts:83](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/num/index.ts#L83)
