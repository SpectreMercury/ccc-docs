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

[ckb/transaction.ts:679](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L679)

## Properties

### cellDeps

> **cellDeps**: [`CellDep`](ccc.Class.CellDep.md)[]

The cell dependencies of the transaction.

#### Source

[ckb/transaction.ts:681](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L681)

***

### headerDeps

> **headerDeps**: \`0x$\{string\}\`[]

The header dependencies of the transaction.

#### Source

[ckb/transaction.ts:682](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L682)

***

### inputs

> **inputs**: [`CellInput`](ccc.Class.CellInput.md)[]

The inputs of the transaction.

#### Source

[ckb/transaction.ts:683](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L683)

***

### outputs

> **outputs**: [`CellOutput`](ccc.Class.CellOutput.md)[]

The outputs of the transaction.

#### Source

[ckb/transaction.ts:684](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L684)

***

### outputsData

> **outputsData**: \`0x$\{string\}\`[]

The data associated with the outputs.

#### Source

[ckb/transaction.ts:685](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L685)

***

### version

> **version**: `bigint`

The version of the transaction.

#### Source

[ckb/transaction.ts:680](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L680)

***

### witnesses

> **witnesses**: \`0x$\{string\}\`[]

The witnesses of the transaction.

#### Source

[ckb/transaction.ts:686](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L686)

## Methods

### findInputIndexByLock()

> **findInputIndexByLock**(`scriptLike`, `client`): `Promise`\<`undefined` \| `number`\>

Find the first occurrence of a input with the specified lock

#### Parameters

• **scriptLike**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script associated with the transaction, represented as a ScriptLike object.

• **client**: [`Client`](ccc.Class.Client.md)

The client for complete extra infos in the transaction.

#### Returns

`Promise`\<`undefined` \| `number`\>

A promise that resolves to the prepared transaction

#### Example

```typescript
const index = await tx.findInputIndexByLock(scriptLike, client);
```

#### Source

[ckb/transaction.ts:915](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L915)

***

### getSignHashInfo()

> **getSignHashInfo**(`scriptLike`, `client`): `Promise`\<`undefined` \| `object`\>

Computes the signing hash information for a given script.

#### Parameters

• **scriptLike**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script associated with the transaction, represented as a ScriptLike object.

• **client**: [`Client`](ccc.Class.Client.md)

The client for complete extra infos in the transaction.

#### Returns

`Promise`\<`undefined` \| `object`\>

A promise that resolves to an object containing the signing message and the witness position,
         or undefined if no matching input is found.

#### Example

```typescript
const signHashInfo = await tx.getSignHashInfo(scriptLike, client);
if (signHashInfo) {
  console.log(signHashInfo.message); // Outputs the signing message
  console.log(signHashInfo.position); // Outputs the witness position
}
```

#### Source

[ckb/transaction.ts:860](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L860)

***

### getWitnessArgsAt()

> **getWitnessArgsAt**(`index`): `undefined` \| [`WitnessArgs`](ccc.Class.WitnessArgs.md)

Get witness at index as WitnessArgs

#### Parameters

• **index**: `number`

The index of the witness.

#### Returns

`undefined` \| [`WitnessArgs`](ccc.Class.WitnessArgs.md)

The witness parsed as WitnessArgs.

#### Example

```typescript
const witnessArgs = await tx.getWitnessArgsAt(0);
```

#### Source

[ckb/transaction.ts:945](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L945)

***

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

[ckb/transaction.ts:821](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L821)

***

### prepareSighashAllWitness()

> **prepareSighashAllWitness**(`scriptLike`, `lockLen`, `client`): `Promise`\<`void`\>

Prepare dummy witness for sighash all method

#### Parameters

• **scriptLike**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script associated with the transaction, represented as a ScriptLike object.

• **lockLen**: `number`

The length of dummy lock bytes.

• **client**: [`Client`](ccc.Class.Client.md)

The client for complete extra infos in the transaction.

#### Returns

`Promise`\<`void`\>

A promise that resolves to the prepared transaction

#### Example

```typescript
await tx.prepareSighashAllWitness(scriptLike, 85, client);
```

#### Source

[ckb/transaction.ts:990](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L990)

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

[ckb/transaction.ts:797](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L797)

***

### setWitnessArgsAt()

> **setWitnessArgsAt**(`index`, `witness`): `void`

Set witness at index by WitnessArgs

#### Parameters

• **index**: `number`

The index of the witness.

• **witness**: [`WitnessArgs`](ccc.Class.WitnessArgs.md)

The WitnessArgs to set.

#### Returns

`void`

The transaction itself.

#### Example

```typescript
await tx.setWitnessArgsAt(0, witnessArgs);
```

#### Source

[ckb/transaction.ts:964](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L964)

***

### stringify()

> **stringify**(): `string`

#### Returns

`string`

#### Source

[ckb/transaction.ts:777](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L777)

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

[ckb/transaction.ts:700](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L700)

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

[ckb/transaction.ts:724](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L724)

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

[ckb/transaction.ts:754](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L754)

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

[ckb/transaction.ts:837](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L837)
