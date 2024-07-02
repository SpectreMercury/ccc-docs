**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / CellOutput

# Class: CellOutput

## Constructors

### new CellOutput()

> **new CellOutput**(`capacity`, `lock`, `type`?): `CellOutput`

Creates an instance of CellOutput.

#### Parameters

• **capacity**: `bigint`

The capacity of the cell.

• **lock**: `Script`

The lock script of the cell.

• **type?**: `Script`

The optional type script of the cell.

#### Returns

`CellOutput`

#### Source

ckb/transaction.ts:192

## Properties

### capacity

> **capacity**: `bigint`

The capacity of the cell.

#### Source

ckb/transaction.ts:193

***

### lock

> **lock**: `Script`

The lock script of the cell.

#### Source

ckb/transaction.ts:194

***

### type?

> `optional` **type**: `Script`

The optional type script of the cell.

#### Source

ckb/transaction.ts:195

## Methods

### \_toMolData()

> **\_toMolData**(): `object`

Converts the CellOutput instance to molecule data format.

#### Returns

`object`

An object representing the cell output in molecule data format.

##### capacity

> **capacity**: `Uint8Array`

##### lock

> **lock**: `object`

##### lock.args

> **args**: `Uint8Array`

##### lock.codeHash

> **codeHash**: `Uint8Array`

##### lock.hashType

> **hashType**: `Uint8Array`

##### type

> **type**: `undefined` \| `object`

#### Source

ckb/transaction.ts:232

***

### toBytes()

> **toBytes**(): `Uint8Array`

Converts the CellOutput instance to bytes.

#### Returns

`Uint8Array`

A Uint8Array containing the cell output bytes.

#### Example

```typescript
const cellOutputBytes = cellOutput.toBytes();
```

#### Source

ckb/transaction.ts:251

***

### from()

> `static` **from**(`cellOutput`): `CellOutput`

Creates a CellOutput instance from a CellOutputLike object.

#### Parameters

• **cellOutput**: `CellOutputLike`

A CellOutputLike object or an instance of CellOutput.

#### Returns

`CellOutput`

A CellOutput instance.

#### Example

```typescript
const cellOutput = CellOutput.from({
  capacity: 1000n,
  lock: { codeHash: "0x...", hashType: "type", args: "0x..." },
  type: { codeHash: "0x...", hashType: "type", args: "0x..." }
});
```

#### Source

ckb/transaction.ts:214

***

### fromBytes()

> `static` **fromBytes**(`bytes`): `CellOutput`

Creates a CellOutput instance from a byte-like value or molecule CellOutput.

#### Parameters

• **bytes**: `BytesLike` \| `CellOutput`

The byte-like value or molecule CellOutput to convert.

#### Returns

`CellOutput`

A CellOutput instance.

#### Example

```typescript
const cellOutput = CellOutput.fromBytes(new Uint8Array([/* cell output bytes */]));
```

#### Source

ckb/transaction.ts:267
