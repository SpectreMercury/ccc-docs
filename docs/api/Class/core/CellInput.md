[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / CellInput

# Class: CellInput

## Constructors

### new CellInput()

> **new CellInput**(`previousOutput`, `since`, `cellOutput`?, `outputData`?, `blockNumber`?): [`CellInput`](ccc.Class.CellInput.md)

Creates an instance of CellInput.

#### Parameters

• **previousOutput**: [`OutPoint`](ccc.Class.OutPoint.md)

The previous outpoint of the cell.

• **since**: `bigint`

The since value of the cell input.

• **cellOutput?**: [`CellOutput`](ccc.Class.CellOutput.md)

The optional cell output associated with the cell input.

• **outputData?**: \`0x$\{string\}\`

The optional output data associated with the cell input.

• **blockNumber?**: `bigint`

The optional block number associated with the cell input.

#### Returns

[`CellInput`](ccc.Class.CellInput.md)

#### Source

[ckb/transaction.ts:343](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L343)

## Properties

### blockNumber?

> `optional` **blockNumber**: `bigint`

The optional block number associated with the cell input.

#### Source

[ckb/transaction.ts:348](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L348)

***

### cellOutput?

> `optional` **cellOutput**: [`CellOutput`](ccc.Class.CellOutput.md)

The optional cell output associated with the cell input.

#### Source

[ckb/transaction.ts:346](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L346)

***

### outputData?

> `optional` **outputData**: \`0x$\{string\}\`

The optional output data associated with the cell input.

#### Source

[ckb/transaction.ts:347](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L347)

***

### previousOutput

> **previousOutput**: [`OutPoint`](ccc.Class.OutPoint.md)

The previous outpoint of the cell.

#### Source

[ckb/transaction.ts:344](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L344)

***

### since

> **since**: `bigint`

The since value of the cell input.

#### Source

[ckb/transaction.ts:345](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L345)

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

[ckb/transaction.ts:413](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L413)

***

### completeExtraInfos()

> **completeExtraInfos**(`client`): `Promise`\<[`CellInput`](ccc.Class.CellInput.md)\>

Complete extra infos in the input. Like the output of the out point.
The instance will be modified.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

#### Returns

`Promise`\<[`CellInput`](ccc.Class.CellInput.md)\>

The completed instance.

#### Example

```typescript
if (!cellInput.cellOutput) {
  await cellInput.completeExtraInfos();
}
```

#### Source

[ckb/transaction.ts:393](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L393)

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

[ckb/transaction.ts:431](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L431)

***

### from()

> `static` **from**(`cellInput`): [`CellInput`](ccc.Class.CellInput.md)

Creates a CellInput instance from a CellInputLike object.

#### Parameters

• **cellInput**: [`CellInputLike`](ccc.Type.CellInputLike.md)

A CellInputLike object or an instance of CellInput.

#### Returns

[`CellInput`](ccc.Class.CellInput.md)

A CellInput instance.

#### Example

```typescript
const cellInput = CellInput.from({
  previousOutput: { txHash: "0x...", index: 0 },
  since: 0n
});
```

#### Source

[ckb/transaction.ts:366](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L366)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`CellInput`](ccc.Class.CellInput.md)

Creates a CellInput instance from a byte-like value or molecule CellInput.

#### Parameters

• **bytes**: [`BytesLike`](ccc.Type.BytesLike.md) \| `CellInput`

The byte-like value or molecule CellInput to convert.

#### Returns

[`CellInput`](ccc.Class.CellInput.md)

A CellInput instance.

#### Example

```typescript
const cellInput = CellInput.fromBytes(new Uint8Array([/* cell input bytes */]));
```

#### Source

[ckb/transaction.ts:447](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/ckb/transaction.ts#L447)
