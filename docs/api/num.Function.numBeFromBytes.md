[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [num](num.md) / numBeFromBytes

# Function: numBeFromBytes()

> **numBeFromBytes**(`val`): [`Num`](num.Type.Num.md)

Converts a byte array to a Num (bigint) assuming big-endian order.

## Parameters

• **val**: [`BytesLike`](bytes.Type.BytesLike.md)

The byte array to convert.

## Returns

[`Num`](num.Type.Num.md)

A Num (bigint) representing the numeric value.

## Example

```typescript
const num = numBeFromBytes(new Uint8Array([0, 0, 48, 57])); // Outputs 12345n
```

## Source

[num/index.ts:152](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/num/index.ts#L152)
