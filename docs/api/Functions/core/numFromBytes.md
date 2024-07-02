[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / numFromBytes

# Function: numFromBytes()

> **numFromBytes**(`val`): [`Num`](ccc.Type.Num.md)

Converts a byte array to a Num (bigint) assuming little-endian order.

## Parameters

• **val**: [`BytesLike`](ccc.Type.BytesLike.md)

The byte array to convert.

## Returns

[`Num`](ccc.Type.Num.md)

A Num (bigint) representing the numeric value.

## Example

```typescript
const num = numFromBytes(new Uint8Array([57, 48, 0, 0])); // Outputs 12345n
```

## Source

[num/index.ts:122](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/num/index.ts#L122)
