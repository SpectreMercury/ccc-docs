[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / numLeFromBytes

# Function: numLeFromBytes()

> **numLeFromBytes**(`val`): [`Num`](ccc.Type.Num.md)

Converts a byte array to a Num (bigint) assuming little-endian order.

## Parameters

• **val**: [`BytesLike`](ccc.Type.BytesLike.md)

The byte array to convert.

## Returns

[`Num`](ccc.Type.Num.md)

A Num (bigint) representing the numeric value.

## Example

```typescript
const num = numLeFromBytes(new Uint8Array([57, 48, 0, 0])); // Outputs 12345n
```

## Source

[num/index.ts:137](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/num/index.ts#L137)
