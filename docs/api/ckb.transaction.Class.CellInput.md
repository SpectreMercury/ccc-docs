[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/transaction](ckb.transaction.md) / CellInput

# Class: CellInput

## Constructors

### new CellInput()

> **new CellInput**(`previousOutput`, `since`, `cellOutput`?, `outputData`?): [`CellInput`](ckb.transaction.Class.CellInput.md)

Creates an instance of CellInput.

#### Parameters

• **previousOutput**: [`OutPoint`](ckb.transaction.Class.OutPoint.md)

The previous outpoint of the cell.

• **since**: `bigint`

The since value of the cell input.

• **cellOutput?**: [`CellOutput`](ckb.transaction.Class.CellOutput.md)

The optional cell output associated with the cell input.

• **outputData?**: \`0x$\{string\}\`

The optional output data associated with the cell input.

#### Returns

[`CellInput`](ckb.transaction.Class.CellInput.md)

#### Source

[ckb/transaction.ts:292](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L292)

## Properties

### cellOutput?

> `optional` **cellOutput**: [`CellOutput`](ckb.transaction.Class.CellOutput.md)

The optional cell output associated with the cell input.

#### Source

[ckb/transaction.ts:295](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L295)

***

### outputData?

> `optional` **outputData**: \`0x$\{string\}\`

The optional output data associated with the cell input.

#### Source

[ckb/transaction.ts:296](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L296)

***

### previousOutput

> **previousOutput**: [`OutPoint`](ckb.transaction.Class.OutPoint.md)

The previous outpoint of the cell.

#### Source

[ckb/transaction.ts:293](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L293)

***

### since

> **since**: `bigint`

The since value of the cell input.

#### Source

[ckb/transaction.ts:294](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L294)

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

[ckb/transaction.ts:333](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L333)

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

[ckb/transaction.ts:351](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L351)

***

### from()

> `static` **from**(`cellInput`): [`CellInput`](ckb.transaction.Class.CellInput.md)

Creates a CellInput instance from a CellInputLike object.

#### Parameters

• **cellInput**: [`CellInputLike`](ckb.transaction.Type.CellInputLike.md)

A CellInputLike object or an instance of CellInput.

#### Returns

[`CellInput`](ckb.transaction.Class.CellInput.md)

A CellInput instance.

#### Example

```typescript
const cellInput = CellInput.from({
  previousOutput: { txHash: "0x...", index: 0 },
  since: 0n
});
```

#### Source

[ckb/transaction.ts:314](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L314)

***

### fromBytes()

> `static` **fromBytes**(`bytes`): [`CellInput`](ckb.transaction.Class.CellInput.md)

Creates a CellInput instance from a byte-like value or molecule CellInput.

#### Parameters

• **bytes**: [`BytesLike`](bytes.Type.BytesLike.md) \| [`CellInput`](ckb.molecule.advanced.generated.Class.CellInput.md)

The byte-like value or molecule CellInput to convert.

#### Returns

[`CellInput`](ckb.transaction.Class.CellInput.md)

A CellInput instance.

#### Example

```typescript
const cellInput = CellInput.fromBytes(new Uint8Array([/* cell input bytes */]));
```

#### Source

[ckb/transaction.ts:367](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/transaction.ts#L367)
