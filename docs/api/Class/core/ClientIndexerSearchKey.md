[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / ClientIndexerSearchKey

# Class: ClientIndexerSearchKey

## Constructors

### new ClientIndexerSearchKey()

> **new ClientIndexerSearchKey**(`script`, `scriptType`, `scriptSearchMode`, `filter`, `withData`): [`ClientIndexerSearchKey`](ccc.Class.ClientIndexerSearchKey.md)

#### Parameters

• **script**: [`Script`](ccc.Class.Script.md)

• **scriptType**: `"type"` \| `"lock"`

• **scriptSearchMode**: `undefined` \| `"prefix"` \| `"exact"` \| `"partial"`

• **filter**: `undefined` \| `object`

• **withData**: `undefined` \| `boolean`

#### Returns

[`ClientIndexerSearchKey`](ccc.Class.ClientIndexerSearchKey.md)

#### Source

[client/clientTypes.ts:40](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L40)

## Properties

### filter

> **filter**: `undefined` \| `object`

#### Source

[client/clientTypes.ts:44](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L44)

***

### script

> **script**: [`Script`](ccc.Class.Script.md)

#### Source

[client/clientTypes.ts:41](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L41)

***

### scriptSearchMode

> **scriptSearchMode**: `undefined` \| `"prefix"` \| `"exact"` \| `"partial"`

#### Source

[client/clientTypes.ts:43](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L43)

***

### scriptType

> **scriptType**: `"type"` \| `"lock"`

#### Source

[client/clientTypes.ts:42](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L42)

***

### withData

> **withData**: `undefined` \| `boolean`

#### Source

[client/clientTypes.ts:55](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L55)

## Methods

### from()

> `static` **from**(`keyLike`): [`ClientIndexerSearchKey`](ccc.Class.ClientIndexerSearchKey.md)

#### Parameters

• **keyLike**: [`ClientIndexerSearchKeyLike`](ccc.Type.ClientIndexerSearchKeyLike.md)

#### Returns

[`ClientIndexerSearchKey`](ccc.Class.ClientIndexerSearchKey.md)

#### Source

[client/clientTypes.ts:58](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/client/clientTypes.ts#L58)
