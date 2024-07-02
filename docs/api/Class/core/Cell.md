**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Cell

# Class: Cell

## Constructors

### new Cell()

> **new Cell**(`outPoint`, `cellOutput`, `outputData`, `blockNumber`): `Cell`

Creates an instance of Cell.

#### Parameters

• **outPoint**: `OutPoint`

The output point of the cell.

• **cellOutput**: `CellOutput`

The cell output of the cell.

• **outputData**: \`0x$\{string\}\`

The output data of the cell.

• **blockNumber**: `bigint`

The block number of the cell.

#### Returns

`Cell`

#### Source

ckb/transaction.ts:297

## Properties

### blockNumber

> **blockNumber**: `bigint`

The block number of the cell.

#### Source

ckb/transaction.ts:301

***

### cellOutput

> **cellOutput**: `CellOutput`

The cell output of the cell.

#### Source

ckb/transaction.ts:299

***

### outPoint

> **outPoint**: `OutPoint`

The output point of the cell.

#### Source

ckb/transaction.ts:298

***

### outputData

> **outputData**: \`0x$\{string\}\`

The output data of the cell.

#### Source

ckb/transaction.ts:300

## Methods

### from()

> `static` **from**(`cell`): `Cell`

Creates a Cell instance from a CellLike object.

#### Parameters

• **cell**: `CellLike`

A CellLike object or an instance of Cell.

#### Returns

`Cell`

A Cell instance.

#### Source

ckb/transaction.ts:311
