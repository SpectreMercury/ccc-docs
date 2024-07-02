**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / numToHex

# Function: numToHex()

> **numToHex**(`val`): `Hex`

Converts a NumLike value to a hexadecimal string.

## Parameters

• **val**: `NumLike`

The value to convert, which can be a string, number, bigint, or HexLike.

## Returns

`Hex`

A Hex string representing the numeric value.

## Example

```typescript
const hex = numToHex(12345); // Outputs "0x3039"
```

## Source

num/index.ts:50
