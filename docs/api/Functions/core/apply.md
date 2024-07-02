[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / apply

# Function: apply()

## apply(transformer, value)

> **apply**\<`T`, `R`\>(`transformer`, `value`): `undefined`

A type safe way to apply a transformer on a value if it's not empty.

### Type parameters

• **T**

• **R**

### Parameters

• **transformer**

The transformer.

• **value**: `undefined`

The value to be transformed.

### Returns

`undefined`

If the value is empty, it remains its type. Otherwise it will be transformed.

### Source

[utils/index.ts:8](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L8)

## apply(transformer, value)

> **apply**\<`T`, `R`\>(`transformer`, `value`): `null`

A type safe way to apply a transformer on a value if it's not empty.

### Type parameters

• **T**

• **R**

### Parameters

• **transformer**

The transformer.

• **value**: `null`

The value to be transformed.

### Returns

`null`

If the value is empty, it remains its type. Otherwise it will be transformed.

### Source

[utils/index.ts:19](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L19)

## apply(transformer, value)

> **apply**\<`T`, `R`\>(`transformer`, `value`): `R`

A type safe way to apply a transformer on a value if it's not empty.

### Type parameters

• **T**

• **R**

### Parameters

• **transformer**

The transformer.

• **value**: `T`

The value to be transformed.

### Returns

`R`

If the value is empty, it remains its type. Otherwise it will be transformed.

### Source

[utils/index.ts:27](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L27)

## apply(transformer, value)

> **apply**\<`T`, `R`\>(`transformer`, `value`): `R` \| `undefined`

A type safe way to apply a transformer on a value if it's not empty.

### Type parameters

• **T**

• **R**

### Parameters

• **transformer**

The transformer.

• **value**: `undefined` \| `T`

The value to be transformed.

### Returns

`R` \| `undefined`

If the value is empty, it remains its type. Otherwise it will be transformed.

### Source

[utils/index.ts:35](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L35)

## apply(transformer, value)

> **apply**\<`T`, `R`\>(`transformer`, `value`): `R` \| `null`

A type safe way to apply a transformer on a value if it's not empty.

### Type parameters

• **T**

• **R**

### Parameters

• **transformer**

The transformer.

• **value**: `null` \| `T`

The value to be transformed.

### Returns

`R` \| `null`

If the value is empty, it remains its type. Otherwise it will be transformed.

### Source

[utils/index.ts:46](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L46)

## apply(transformer, value)

> **apply**\<`T`, `R`\>(`transformer`, `value`): `undefined` \| `null`

A type safe way to apply a transformer on a value if it's not empty.

### Type parameters

• **T**

• **R**

### Parameters

• **transformer**

The transformer.

• **value**: `undefined` \| `null`

The value to be transformed.

### Returns

`undefined` \| `null`

If the value is empty, it remains its type. Otherwise it will be transformed.

### Source

[utils/index.ts:57](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L57)
