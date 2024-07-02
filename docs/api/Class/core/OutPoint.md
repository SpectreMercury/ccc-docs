[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / OutPoint

# Class: OutPoint

## Constructors

### new OutPoint()

> **new OutPoint**(`txHash`, `index`): [`OutPoint`](ccc.Class.OutPoint.md)

Creates an instance of OutPoint.

#### Parameters

• **txHash**: \`0x$\{string\}\`

The transaction hash.

• **index**: `bigint`

The index of the output in the transaction.

#### Returns

[`OutPoint`](ccc.Class.OutPoint.md)

#### Source

[ckb/transaction.ts:101](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L101)

## Properties

### index

> **index**: `bigint`

The index of the output in the transaction.

#### Source

[ckb/transaction.ts:103](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L103)

***

### txHash

> **txHash**: \`0x$\{string\}\`

The transaction hash.

#### Source

[ckb/transaction.ts:102](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L102)

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the OutPoint instance to molecule data format.

#### Returns

`object`

An object representing the outpoint in molecule data format.

##### index

> **index**: `Uint8Array`

##### txHash

> **txHash**: `Uint8Array`

#### Source

[ckb/transaction.ts:131](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L131)

***

### encode()

> **encode**(): `Uint8Array`

Converts the OutPoint instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the outpoint bytes.

#### Example

```typescript
const outPointBytes = outPoint.encode();
```

#### Source

[ckb/transaction.ts:149](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L149)

***

### from()

> `static` **from**(`outPoint`): [`OutPoint`](ccc.Class.OutPoint.md)

Creates an OutPoint instance from an OutPointLike object.

#### Parameters

• **outPoint**: [`OutPointLike`](ccc.Type.OutPointLike.md)

An OutPointLike object or an instance of OutPoint.

#### Returns

[`OutPoint`](ccc.Class.OutPoint.md)

An OutPoint instance.

#### Example

```typescript
const outPoint = OutPoint.from({ txHash: "0x...", index: 0 });
```

#### Source

[ckb/transaction.ts:118](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L118)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`OutPoint`](ccc.Class.OutPoint.md)

Creates an OutPoint instance from a byte-like value or molecule OutPoint.

#### Parameters

• **bytes**: [`BytesLike`](ccc.Type.BytesLike.md) \| `OutPoint`

The byte-like value or molecule OutPoint to convert.

#### Returns

[`OutPoint`](ccc.Class.OutPoint.md)

An OutPoint instance.

#### Example

```typescript
const outPoint = OutPoint.fromBytes(new Uint8Array([/* outpoint bytes */]));
```

#### Source

[ckb/transaction.ts:165](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L165)
