[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/molecule.advanced/generated](ckb.molecule.advanced.generated.md) / RawTransaction

# Class: RawTransaction

## Constructors

### new RawTransaction()

> **new RawTransaction**(`reader`, `__namedParameters`): [`RawTransaction`](ckb.molecule.advanced.generated.Class.RawTransaction.md)

#### Parameters

• **reader**: `any`

• **\_\_namedParameters**= `{}`

• **\_\_namedParameters.validate**: `undefined` \| `boolean`= `true`

#### Returns

[`RawTransaction`](ckb.molecule.advanced.generated.Class.RawTransaction.md)

#### Source

[ckb/molecule.advanced/generated.js:1020](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1020)

## Properties

### view

> **view**: `DataView`

#### Source

[ckb/molecule.advanced/generated.js:1021](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1021)

## Methods

### getCellDeps()

> **getCellDeps**(): [`CellDepVec`](ckb.molecule.advanced.generated.Class.CellDepVec.md)

#### Returns

[`CellDepVec`](ckb.molecule.advanced.generated.Class.CellDepVec.md)

#### Source

[ckb/molecule.advanced/generated.js:1058](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1058)

***

### getHeaderDeps()

> **getHeaderDeps**(): [`Byte32Vec`](ckb.molecule.advanced.generated.Class.Byte32Vec.md)

#### Returns

[`Byte32Vec`](ckb.molecule.advanced.generated.Class.Byte32Vec.md)

#### Source

[ckb/molecule.advanced/generated.js:1067](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1067)

***

### getInputs()

> **getInputs**(): [`CellInputVec`](ckb.molecule.advanced.generated.Class.CellInputVec.md)

#### Returns

[`CellInputVec`](ckb.molecule.advanced.generated.Class.CellInputVec.md)

#### Source

[ckb/molecule.advanced/generated.js:1076](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1076)

***

### getOutputs()

> **getOutputs**(): [`CellOutputVec`](ckb.molecule.advanced.generated.Class.CellOutputVec.md)

#### Returns

[`CellOutputVec`](ckb.molecule.advanced.generated.Class.CellOutputVec.md)

#### Source

[ckb/molecule.advanced/generated.js:1085](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1085)

***

### getOutputsData()

> **getOutputsData**(): [`BytesVec`](ckb.molecule.advanced.generated.Class.BytesVec.md)

#### Returns

[`BytesVec`](ckb.molecule.advanced.generated.Class.BytesVec.md)

#### Source

[ckb/molecule.advanced/generated.js:1094](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1094)

***

### getVersion()

> **getVersion**(): [`Uint32`](ckb.molecule.advanced.generated.Class.Uint32.md)

#### Returns

[`Uint32`](ckb.molecule.advanced.generated.Class.Uint32.md)

#### Source

[ckb/molecule.advanced/generated.js:1049](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1049)

***

### validate()

> **validate**(`compatible`): `void`

#### Parameters

• **compatible**: `boolean`= `false`

#### Returns

`void`

#### Source

[ckb/molecule.advanced/generated.js:1027](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1027)
