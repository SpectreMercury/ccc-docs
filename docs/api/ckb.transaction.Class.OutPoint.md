[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/transaction](ckb.transaction.md) / OutPoint

# Class: OutPoint

## Constructors

### new OutPoint()

> **new OutPoint**(`txHash`, `index`): [`OutPoint`](ckb.transaction.Class.OutPoint.md)

Creates an instance of OutPoint.

#### Parameters

• **txHash**: \`0x$\{string\}\`

The transaction hash.

• **index**: `bigint`

The index of the output in the transaction.

#### Returns

[`OutPoint`](ckb.transaction.Class.OutPoint.md)

#### Source

[ckb/transaction.ts:94](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L94)

## Properties

### index

> **index**: `bigint`

The index of the output in the transaction.

#### Source

[ckb/transaction.ts:96](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L96)

***

### txHash

> **txHash**: \`0x$\{string\}\`

The transaction hash.

#### Source

[ckb/transaction.ts:95](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L95)

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

[ckb/transaction.ts:124](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L124)

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

[ckb/transaction.ts:142](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L142)

***

### from()

> `static` **from**(`outPoint`): [`OutPoint`](ckb.transaction.Class.OutPoint.md)

Creates an OutPoint instance from an OutPointLike object.

#### Parameters

• **outPoint**: [`OutPointLike`](ckb.transaction.Type.OutPointLike.md)

An OutPointLike object or an instance of OutPoint.

#### Returns

[`OutPoint`](ckb.transaction.Class.OutPoint.md)

An OutPoint instance.

#### Example

```typescript
const outPoint = OutPoint.from({ txHash: "0x...", index: 0 });
```

#### Source

[ckb/transaction.ts:111](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L111)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`OutPoint`](ckb.transaction.Class.OutPoint.md)

Creates an OutPoint instance from a byte-like value or molecule OutPoint.

#### Parameters

• **bytes**: [`BytesLike`](bytes.Type.BytesLike.md) \| [`OutPoint`](ckb.molecule.advanced.generated.Class.OutPoint.md)

The byte-like value or molecule OutPoint to convert.

#### Returns

[`OutPoint`](ckb.transaction.Class.OutPoint.md)

An OutPoint instance.

#### Example

```typescript
const outPoint = OutPoint.fromBytes(new Uint8Array([/* outpoint bytes */]));
```

#### Source

[ckb/transaction.ts:158](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L158)
