[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [num](num.md) / numFrom

# Function: numFrom()

> **numFrom**(`val`): [`Num`](num.Type.Num.md)

Converts a NumLike value to a Num (bigint).

## Parameters

• **val**: [`NumLike`](num.Type.NumLike.md)

The value to convert, which can be a string, number, bigint, or HexLike.

## Returns

[`Num`](num.Type.Num.md)

A Num (bigint) representing the value.

## Example

```typescript
const num = numFrom("12345"); // Outputs 12345n
const numFromHex = numFrom("0x3039"); // Outputs 12345n
```

## Source

[num/index.ts:27](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/num/index.ts#L27)
