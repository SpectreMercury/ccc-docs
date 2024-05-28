[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / Transaction

# Class: Transaction

## Constructors

### new Transaction()

> **new Transaction**(`version`, `cellDeps`, `headerDeps`, `inputs`, `outputs`, `outputsData`, `witnesses`): [`Transaction`](ccc.Class.Transaction.md)

Creates an instance of Transaction.

#### Parameters

• **version**: `bigint`

The version of the transaction.

• **cellDeps**: [`CellDep`](ccc.Class.CellDep.md)[]

The cell dependencies of the transaction.

• **headerDeps**: \`0x$\{string\}\`[]

The header dependencies of the transaction.

• **inputs**: [`CellInput`](ccc.Class.CellInput.md)[]

The inputs of the transaction.

• **outputs**: [`CellOutput`](ccc.Class.CellOutput.md)[]

The outputs of the transaction.

• **outputsData**: \`0x$\{string\}\`[]

The data associated with the outputs.

• **witnesses**: \`0x$\{string\}\`[]

The witnesses of the transaction.

#### Returns

[`Transaction`](ccc.Class.Transaction.md)

#### Source

[ckb/transaction.ts:602](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L602)

## Properties

### cellDeps

> **cellDeps**: [`CellDep`](ccc.Class.CellDep.md)[]

The cell dependencies of the transaction.

#### Source

[ckb/transaction.ts:604](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L604)

***

### headerDeps

> **headerDeps**: \`0x$\{string\}\`[]

The header dependencies of the transaction.

#### Source

[ckb/transaction.ts:605](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L605)

***

### inputs

> **inputs**: [`CellInput`](ccc.Class.CellInput.md)[]

The inputs of the transaction.

#### Source

[ckb/transaction.ts:606](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L606)

***

### outputs

> **outputs**: [`CellOutput`](ccc.Class.CellOutput.md)[]

The outputs of the transaction.

#### Source

[ckb/transaction.ts:607](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L607)

***

### outputsData

> **outputsData**: \`0x$\{string\}\`[]

The data associated with the outputs.

#### Source

[ckb/transaction.ts:608](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L608)

***

### version

> **version**: `bigint`

The version of the transaction.

#### Source

[ckb/transaction.ts:603](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L603)

***

### witnesses

> **witnesses**: \`0x$\{string\}\`[]

The witnesses of the transaction.

#### Source

[ckb/transaction.ts:609](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L609)

## Methods

### hash()

> **hash**(): \`0x$\{string\}\`

Calculates the hash of the transaction.

#### Returns

\`0x$\{string\}\`

The hash of the transaction.

#### Example

```typescript
const txHash = transaction.hash();
```

#### Source

[ckb/transaction.ts:735](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L735)

***

### rawToBytes()

> **rawToBytes**(): `Uint8Array`

Converts the raw transaction data to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the raw transaction bytes.

#### Example

```typescript
const rawTxBytes = transaction.rawToBytes();
```

#### Source

[ckb/transaction.ts:711](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L711)

***

### default()

> `static` **default**(): [`Transaction`](ccc.Class.Transaction.md)

Creates a default Transaction instance with empty fields.

#### Returns

[`Transaction`](ccc.Class.Transaction.md)

A default Transaction instance.

#### Example

```typescript
const defaultTx = Transaction.default();
```

#### Source

[ckb/transaction.ts:623](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L623)

***

### from()

> `static` **from**(`tx`): [`Transaction`](ccc.Class.Transaction.md)

Creates a Transaction instance from a TransactionLike object.

#### Parameters

• **tx**: [`TransactionLike`](ccc.Type.TransactionLike.md)

A TransactionLike object or an instance of Transaction.

#### Returns

[`Transaction`](ccc.Class.Transaction.md)

A Transaction instance.

#### Example

```typescript
const transaction = Transaction.from({
  version: 0,
  cellDeps: [],
  headerDeps: [],
  inputs: [],
  outputs: [],
  outputsData: [],
  witnesses: []
});
```

#### Source

[ckb/transaction.ts:647](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L647)

***

### fromLumosSkeleton()

> `static` **fromLumosSkeleton**(`skeleton`): [`Transaction`](ccc.Class.Transaction.md)

Creates a Transaction instance from a Lumos skeleton.

#### Parameters

• **skeleton**: `TransactionSkeletonType`

The Lumos transaction skeleton.

#### Returns

[`Transaction`](ccc.Class.Transaction.md)

A Transaction instance.

#### Throws

Will throw an error if an input's outPoint is missing.

#### Example

```typescript
const transaction = Transaction.fromLumosSkeleton(skeleton);
```

#### Source

[ckb/transaction.ts:677](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L677)

***

### hashWitnessToHasher()

> `static` **hashWitnessToHasher**(`witness`, `hasher`): `void`

Hashes a witness and updates the hasher.

#### Parameters

• **witness**: [`BytesLike`](ccc.Type.BytesLike.md)

The witness to hash.

• **hasher**: [`Hasher`](ccc.Class.Hasher.md)

The hasher instance to update.

#### Returns

`void`

#### Example

```typescript
Transaction.hashWitnessToHasher("0x...", hasher);
```

#### Source

[ckb/transaction.ts:751](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L751)
