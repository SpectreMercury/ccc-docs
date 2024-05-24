[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [num](num.md) / numToHex

# Function: numToHex()

> **numToHex**(`val`): [`Hex`](hex.Type.Hex.md)

Converts a NumLike value to a hexadecimal string.

## Parameters

• **val**: [`NumLike`](num.Type.NumLike.md)

The value to convert, which can be a string, number, bigint, or HexLike.

## Returns

[`Hex`](hex.Type.Hex.md)

A Hex string representing the numeric value.

## Example

```typescript
const hex = numToHex(12345); // Outputs "0x3039"
```

## Source

[num/index.ts:50](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/num/index.ts#L50)
