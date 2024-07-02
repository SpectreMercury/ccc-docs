**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / hexFrom

# Function: hexFrom()

> **hexFrom**(`hex`): `Hex`

Converts a HexLike value to a Hex string.

## Parameters

• **hex**: `BytesLike`

The value to convert, which can be a string, Uint8Array, ArrayBuffer, or number array.

## Returns

`Hex`

A Hex string representing the value.

## Example

```typescript
const hexString = hexFrom("68656c6c6f"); // Outputs "0x68656c6c6f"
const hexStringFromBytes = hexFrom(new Uint8Array([104, 101, 108, 108, 111])); // Outputs "0x68656c6c6f"
```

## Source

hex/index.ts:25
