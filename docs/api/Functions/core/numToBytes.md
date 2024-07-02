[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / numToBytes

# Function: numToBytes()

> **numToBytes**(`val`, `bytes`?): [`Bytes`](ccc.Type.Bytes.md)

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
const bytes = numToBytes(12345, 4); // Outputs Uint8Array [57, 48, 0, 0]
```

## Source

[num/index.ts:67](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/num/index.ts#L67)
