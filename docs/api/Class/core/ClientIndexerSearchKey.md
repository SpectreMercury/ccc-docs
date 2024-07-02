**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / ClientIndexerSearchKey

# Class: ClientIndexerSearchKey

## Constructors

### new ClientIndexerSearchKey()

> **new ClientIndexerSearchKey**(`script`, `scriptType`, `scriptSearchMode`, `filter`, `withData`): `ClientIndexerSearchKey`

#### Parameters

• **script**: `Script`

• **scriptType**: `"type"` \| `"lock"`

• **scriptSearchMode**: `undefined` \| `"prefix"` \| `"exact"` \| `"partial"`

• **filter**: `undefined` \| `object`

• **withData**: `undefined` \| `boolean`

#### Returns

`ClientIndexerSearchKey`

#### Source

client/clientTypes.ts:40

## Properties

### filter

> **filter**: `undefined` \| `object`

#### Source

client/clientTypes.ts:44

***

### script

> **script**: `Script`

#### Source

client/clientTypes.ts:41

***

### scriptSearchMode

> **scriptSearchMode**: `undefined` \| `"prefix"` \| `"exact"` \| `"partial"`

#### Source

client/clientTypes.ts:43

***

### scriptType

> **scriptType**: `"type"` \| `"lock"`

#### Source

client/clientTypes.ts:42

***

### withData

> **withData**: `undefined` \| `boolean`

#### Source

client/clientTypes.ts:55

## Methods

### from()

> `static` **from**(`keyLike`): `ClientIndexerSearchKey`

#### Parameters

• **keyLike**: `ClientIndexerSearchKeyLike`

#### Returns

`ClientIndexerSearchKey`

#### Source

client/clientTypes.ts:58
