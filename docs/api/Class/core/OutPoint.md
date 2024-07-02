**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / OutPoint

# Class: OutPoint

## Constructors

### new OutPoint()

> **new OutPoint**(`txHash`, `index`): `OutPoint`

Creates an instance of OutPoint.

#### Parameters

• **txHash**: \`0x$\{string\}\`

The transaction hash.

• **index**: `bigint`

The index of the output in the transaction.

#### Returns

`OutPoint`

#### Source

ckb/transaction.ts:101

## Properties

### index

> **index**: `bigint`

The index of the output in the transaction.

#### Source

ckb/transaction.ts:103

***

### txHash

> **txHash**: \`0x$\{string\}\`

The transaction hash.

#### Source

ckb/transaction.ts:102

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

ckb/transaction.ts:131

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

ckb/transaction.ts:149

***

### from()

> `static` **from**(`outPoint`): `OutPoint`

Creates an OutPoint instance from an OutPointLike object.

#### Parameters

• **outPoint**: `OutPointLike`

An OutPointLike object or an instance of OutPoint.

#### Returns

`OutPoint`

An OutPoint instance.

#### Example

```typescript
const outPoint = OutPoint.from({ txHash: "0x...", index: 0 });
```

#### Source

ckb/transaction.ts:118

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `OutPoint`

Creates an OutPoint instance from a byte-like value or molecule OutPoint.

#### Parameters

• **bytes**: `BytesLike` \| `OutPoint`

The byte-like value or molecule OutPoint to convert.

#### Returns

`OutPoint`

An OutPoint instance.

#### Example

```typescript
const outPoint = OutPoint.fromBytes(new Uint8Array([/* outpoint bytes */]));
```

#### Source

ckb/transaction.ts:165
