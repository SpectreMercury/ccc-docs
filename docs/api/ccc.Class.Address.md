[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / Address

# Class: Address

Represents a ckb address with associated script and prefix.

## Constructors

### new Address()

> **new Address**(`script`, `prefix`): [`Address`](ccc.Class.Address.md)

Creates an instance of Address.

#### Parameters

• **script**: [`Script`](ccc.Class.Script.md)

The script associated with the address.

• **prefix**: `string`

The address prefix.

#### Returns

[`Address`](ccc.Class.Address.md)

#### Source

[address/index.ts:29](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L29)

## Properties

### prefix

> **prefix**: `string`

The address prefix.

#### Source

[address/index.ts:31](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L31)

***

### script

> **script**: [`Script`](ccc.Class.Script.md)

The script associated with the address.

#### Source

[address/index.ts:30](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L30)

## Methods

### toString()

> **toString**(): `string`

Converts the Address instance to a string.

#### Returns

`string`

The address as a string.

#### Source

[address/index.ts:116](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L116)

***

### from()

> `static` **from**(`address`): [`Address`](ccc.Class.Address.md)

Creates an Address instance from an AddressLike object.

#### Parameters

• **address**: [`AddressLike`](ccc.Type.AddressLike.md)

An AddressLike object or an instance of Address.

#### Returns

[`Address`](ccc.Class.Address.md)

An Address instance.

#### Source

[address/index.ts:41](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L41)

***

### fromKnownScript()

> `static` **fromKnownScript**(`script`, `args`, `client`): `Promise`\<[`Address`](ccc.Class.Address.md)\>

#### Parameters

• **script**: [`KnownScript`](ccc.Enumeration.KnownScript.md)

• **args**: [`BytesLike`](ccc.Type.BytesLike.md)

• **client**: [`Client`](ccc.Interface.Client.md)

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

#### Source

[address/index.ts:96](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L96)

***

### fromScript()

> `static` **fromScript**(`script`, `client`): `Promise`\<[`Address`](ccc.Class.Address.md)\>

Creates an Address instance from a script and client.

#### Parameters

• **script**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script-like object.

• **client**: [`Client`](ccc.Interface.Client.md)

The client instance used to fetch the address prefix.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

A promise that resolves to an Address instance.

#### Source

[address/index.ts:89](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L89)

***

### fromString()

> `static` **fromString**(`address`, `clients`): `Promise`\<[`Address`](ccc.Class.Address.md)\>

Creates an Address instance from an address string.

#### Parameters

• **address**: `string`

The address string to parse.

• **clients**: [`Client`](ccc.Interface.Client.md) \| `Record`\<`string`, [`Client`](ccc.Interface.Client.md)\>

A Client instance or a record of Client instances keyed by prefix.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

A promise that resolves to an Address instance.

#### Throws

Will throw an error if the address prefix is unknown or mismatched.

#### Source

[address/index.ts:59](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/index.ts#L59)
