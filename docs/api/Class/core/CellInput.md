**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / CellInput

# Class: CellInput

## Constructors

### new CellInput()

> **new CellInput**(`previousOutput`, `since`, `cellOutput`?, `outputData`?, `blockNumber`?): `CellInput`

Creates an instance of CellInput.

#### Parameters

• **previousOutput**: `OutPoint`

The previous outpoint of the cell.

• **since**: `bigint`

The since value of the cell input.

• **cellOutput?**: `CellOutput`

The optional cell output associated with the cell input.

• **outputData?**: \`0x$\{string\}\`

The optional output data associated with the cell input.

• **blockNumber?**: `bigint`

The optional block number associated with the cell input.

#### Returns

`CellInput`

#### Source

ckb/transaction.ts:343

## Properties

### blockNumber?

> `optional` **blockNumber**: `bigint`

The optional block number associated with the cell input.

#### Source

ckb/transaction.ts:348

***

### cellOutput?

> `optional` **cellOutput**: `CellOutput`

The optional cell output associated with the cell input.

#### Source

ckb/transaction.ts:346

***

### outputData?

> `optional` **outputData**: \`0x$\{string\}\`

The optional output data associated with the cell input.

#### Source

ckb/transaction.ts:347

***

### previousOutput

> **previousOutput**: `OutPoint`

The previous outpoint of the cell.

#### Source

ckb/transaction.ts:344

***

### since

> **since**: `bigint`

The since value of the cell input.

#### Source

ckb/transaction.ts:345

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the CellInput instance to molecule data format.

#### Returns

`object`

An object representing the cell input in molecule data format.

##### previousOutput

> **previousOutput**: `object`

##### previousOutput.index

> **index**: `Uint8Array`

##### previousOutput.txHash

> **txHash**: `Uint8Array`

##### since

> **since**: `Uint8Array`

#### Source

ckb/transaction.ts:413

***

### completeExtraInfos()

> **completeExtraInfos**(`client`): `Promise`\<`CellInput`\>

Complete extra infos in the input. Like the output of the out point.
The instance will be modified.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`CellInput`\>

The completed instance.

#### Example

```typescript
if (!cellInput.cellOutput) {
  await cellInput.completeExtraInfos();
}
```

#### Source

ckb/transaction.ts:393

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the CellInput instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the cell input bytes.

#### Example

```typescript
const cellInputBytes = cellInput.toBytes();
```

#### Source

ckb/transaction.ts:431

***

### from()

> `static` **from**(`cellInput`): `CellInput`

Creates a CellInput instance from a CellInputLike object.

#### Parameters

• **cellInput**: `CellInputLike`

A CellInputLike object or an instance of CellInput.

#### Returns

`CellInput`

A CellInput instance.

#### Example

```typescript
const cellInput = CellInput.from({
  previousOutput: { txHash: "0x...", index: 0 },
  since: 0n
});
```

#### Source

ckb/transaction.ts:366

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `CellInput`

Creates a CellInput instance from a byte-like value or molecule CellInput.

#### Parameters

• **bytes**: `BytesLike` \| `CellInput`

The byte-like value or molecule CellInput to convert.

#### Returns

`CellInput`

A CellInput instance.

#### Example

```typescript
const cellInput = CellInput.fromBytes(new Uint8Array([/* cell input bytes */]));
```

#### Source

ckb/transaction.ts:447
