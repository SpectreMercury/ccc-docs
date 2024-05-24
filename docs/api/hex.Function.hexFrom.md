[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [hex](hex.md) / hexFrom

# Function: hexFrom()

> **hexFrom**(`hex`): [`Hex`](hex.Type.Hex.md)

Converts a HexLike value to a Hex string.

## Parameters

• **hex**: [`BytesLike`](bytes.Type.BytesLike.md)

The value to convert, which can be a string, Uint8Array, ArrayBuffer, or number array.

## Returns

[`Hex`](hex.Type.Hex.md)

A Hex string representing the value.

## Example

```typescript
const hexString = hexFrom("68656c6c6f"); // Outputs "0x68656c6c6f"
const hexStringFromBytes = hexFrom(new Uint8Array([104, 101, 108, 108, 111])); // Outputs "0x68656c6c6f"
```

## Source

[hex/index.ts:25](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/hex/index.ts#L25)
