[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ckb/molecule.advanced/generated](ckb.molecule.advanced.generated.md) / Transaction

# Class: Transaction

## Constructors

### new Transaction()

> **new Transaction**(`reader`, `__namedParameters`): [`Transaction`](ckb.molecule.advanced.generated.Class.Transaction.md)

#### Parameters

• **reader**: `any`

• **\_\_namedParameters**= `{}`

• **\_\_namedParameters.validate**: `undefined` \| `boolean`= `true`

#### Returns

[`Transaction`](ckb.molecule.advanced.generated.Class.Transaction.md)

#### Source

[ckb/molecule.advanced/generated.js:1116](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1116)

## Properties

### view

> **view**: `DataView`

#### Source

[ckb/molecule.advanced/generated.js:1117](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1117)

## Methods

### getRaw()

> **getRaw**(): [`RawTransaction`](ckb.molecule.advanced.generated.Class.RawTransaction.md)

#### Returns

[`RawTransaction`](ckb.molecule.advanced.generated.Class.RawTransaction.md)

#### Source

[ckb/molecule.advanced/generated.js:1133](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1133)

***

### getWitnesses()

> **getWitnesses**(): [`BytesVec`](ckb.molecule.advanced.generated.Class.BytesVec.md)

#### Returns

[`BytesVec`](ckb.molecule.advanced.generated.Class.BytesVec.md)

#### Source

[ckb/molecule.advanced/generated.js:1142](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1142)

***

### validate()

> **validate**(`compatible`): `void`

#### Parameters

• **compatible**: `boolean`= `false`

#### Returns

`void`

#### Source

[ckb/molecule.advanced/generated.js:1123](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/ckb/molecule.advanced/generated.js#L1123)
