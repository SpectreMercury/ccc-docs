**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Transaction

# Class: Transaction

## Constructors

### new Transaction()

> **new Transaction**(`version`, `cellDeps`, `headerDeps`, `inputs`, `outputs`, `outputsData`, `witnesses`): `Transaction`

Creates an instance of Transaction.

#### Parameters

• **version**: `bigint`

The version of the transaction.

• **cellDeps**: `CellDep`[]

The cell dependencies of the transaction.

• **headerDeps**: \`0x$\{string\}\`[]

The header dependencies of the transaction.

• **inputs**: `CellInput`[]

The inputs of the transaction.

• **outputs**: `CellOutput`[]

The outputs of the transaction.

• **outputsData**: \`0x$\{string\}\`[]

The data associated with the outputs.

• **witnesses**: \`0x$\{string\}\`[]

The witnesses of the transaction.

#### Returns

`Transaction`

#### Source

ckb/transaction.ts:679

## Properties

### cellDeps

> **cellDeps**: `CellDep`[]

The cell dependencies of the transaction.

#### Source

ckb/transaction.ts:681

***

### headerDeps

> **headerDeps**: \`0x$\{string\}\`[]

The header dependencies of the transaction.

#### Source

ckb/transaction.ts:682

***

### inputs

> **inputs**: `CellInput`[]

The inputs of the transaction.

#### Source

ckb/transaction.ts:683

***

### outputs

> **outputs**: `CellOutput`[]

The outputs of the transaction.

#### Source

ckb/transaction.ts:684

***

### outputsData

> **outputsData**: \`0x$\{string\}\`[]

The data associated with the outputs.

#### Source

ckb/transaction.ts:685

***

### version

> **version**: `bigint`

The version of the transaction.

#### Source

ckb/transaction.ts:680

***

### witnesses

> **witnesses**: \`0x$\{string\}\`[]

The witnesses of the transaction.

#### Source

ckb/transaction.ts:686

## Methods

### findInputIndexByLock()

> **findInputIndexByLock**(`scriptLike`, `client`): `Promise`\<`undefined` \| `number`\>

Find the first occurrence of a input with the specified lock

#### Parameters

• **scriptLike**: `ScriptLike`

The script associated with the transaction, represented as a ScriptLike object.

• **client**: `Client`

The client for complete extra infos in the transaction.

#### Returns

`Promise`\<`undefined` \| `number`\>

A promise that resolves to the prepared transaction

#### Example

```typescript
const index = await tx.findInputIndexByLock(scriptLike, client);
```

#### Source

ckb/transaction.ts:915

***

### getSignHashInfo()

> **getSignHashInfo**(`scriptLike`, `client`): `Promise`\<`undefined` \| `object`\>

Computes the signing hash information for a given script.

#### Parameters

• **scriptLike**: `ScriptLike`

The script associated with the transaction, represented as a ScriptLike object.

• **client**: `Client`

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

ckb/transaction.ts:860

***

### getWitnessArgsAt()

> **getWitnessArgsAt**(`index`): `undefined` \| `WitnessArgs`

Get witness at index as WitnessArgs

#### Parameters

• **index**: `number`

The index of the witness.

#### Returns

`undefined` \| `WitnessArgs`

The witness parsed as WitnessArgs.

#### Example

```typescript
const witnessArgs = await tx.getWitnessArgsAt(0);
```

#### Source

ckb/transaction.ts:945

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

ckb/transaction.ts:821

***

### prepareSighashAllWitness()

> **prepareSighashAllWitness**(`scriptLike`, `lockLen`, `client`): `Promise`\<`void`\>

Prepare dummy witness for sighash all method

#### Parameters

• **scriptLike**: `ScriptLike`

The script associated with the transaction, represented as a ScriptLike object.

• **lockLen**: `number`

The length of dummy lock bytes.

• **client**: `Client`

The client for complete extra infos in the transaction.

#### Returns

`Promise`\<`void`\>

A promise that resolves to the prepared transaction

#### Example

```typescript
await tx.prepareSighashAllWitness(scriptLike, 85, client);
```

#### Source

ckb/transaction.ts:990

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

ckb/transaction.ts:797

***

### setWitnessArgsAt()

> **setWitnessArgsAt**(`index`, `witness`): `void`

Set witness at index by WitnessArgs

#### Parameters

• **index**: `number`

The index of the witness.

• **witness**: `WitnessArgs`

The WitnessArgs to set.

#### Returns

`void`

The transaction itself.

#### Example

```typescript
await tx.setWitnessArgsAt(0, witnessArgs);
```

#### Source

ckb/transaction.ts:964

***

### stringify()

> **stringify**(): `string`

#### Returns

`string`

#### Source

ckb/transaction.ts:777

***

### default()

> `static` **default**(): `Transaction`

Creates a default Transaction instance with empty fields.

#### Returns

`Transaction`

A default Transaction instance.

#### Example

```typescript
const defaultTx = Transaction.default();
```

#### Source

ckb/transaction.ts:700

***

### from()

> `static` **from**(`tx`): `Transaction`

Creates a Transaction instance from a TransactionLike object.

#### Parameters

• **tx**: `TransactionLike`

A TransactionLike object or an instance of Transaction.

#### Returns

`Transaction`

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

ckb/transaction.ts:724

***

### fromLumosSkeleton()

> `static` **fromLumosSkeleton**(`skeleton`): `Transaction`

Creates a Transaction instance from a Lumos skeleton.

#### Parameters

• **skeleton**: `TransactionSkeletonType`

The Lumos transaction skeleton.

#### Returns

`Transaction`

A Transaction instance.

#### Throws

Will throw an error if an input's outPoint is missing.

#### Example

```typescript
const transaction = Transaction.fromLumosSkeleton(skeleton);
```

#### Source

ckb/transaction.ts:754

***

### hashWitnessToHasher()

> `static` **hashWitnessToHasher**(`witness`, `hasher`): `void`

Hashes a witness and updates the hasher.

#### Parameters

• **witness**: `BytesLike`

The witness to hash.

• **hasher**: `Hasher`

The hasher instance to update.

#### Returns

`void`

#### Example

```typescript
Transaction.hashWitnessToHasher("0x...", hasher);
```

#### Source

ckb/transaction.ts:837
