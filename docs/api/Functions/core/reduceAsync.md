[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / reduceAsync

# Function: reduceAsync()

## reduceAsync(values, accumulator)

> **reduceAsync**\<`T`, `V`\>(`values`, `accumulator`): `Promise`\<`T`\>

Similar to Array.reduce, but the accumulator can returns Promise.

### Type parameters

• **T**

• **V**

### Parameters

• **values**: `T`[]

The array to be reduced.

• **accumulator**

A callback to be called for each value. If it returns null, the previous result will be kept.

### Returns

`Promise`\<`T`\>

The accumulated result.

### Source

[utils/index.ts:86](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L86)

## reduceAsync(values, accumulator, init)

> **reduceAsync**\<`T`, `V`\>(`values`, `accumulator`, `init`): `Promise`\<`T`\>

Similar to Array.reduce, but the accumulator can returns Promise.

### Type parameters

• **T**

• **V**

### Parameters

• **values**: `V`[]

The array to be reduced.

• **accumulator**

A callback to be called for each value. If it returns null, the previous result will be kept.

• **init**: `T`

The initial value.

### Returns

`Promise`\<`T`\>

The accumulated result.

### Source

[utils/index.ts:101](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/utils/index.ts#L101)
