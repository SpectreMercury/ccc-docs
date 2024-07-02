[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / fixedPointToString

# Function: fixedPointToString()

> **fixedPointToString**(`val`, `decimals`): `string`

Converts a FixedPointLike value to its string representation with fixed-point decimals.

## Parameters

• **val**: [`FixedPointLike`](ccc.Type.FixedPointLike.md)

The value to convert, which can be a bigint, string, or number.

• **decimals**: `number`= `8`

The number of decimal places for the fixed-point representation. Default is 8.

## Returns

`string`

A string representing the fixed-point value.

## Example

```typescript
const str = fixedPointToString(123456789n, 8); // Outputs "1.23456789"
const strFromString = fixedPointToString("123456789", 8); // Outputs "1.23456789"
const strFromNumber = fixedPointToString(123456789, 8); // Outputs "1.23456789"
```

## Source

[fixedPoint/index.ts:29](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/fixedPoint/index.ts#L29)
