**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / reduceAsync

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

utils/index.ts:86

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

utils/index.ts:101
