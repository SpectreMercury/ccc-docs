**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Address

# Class: Address

Represents a ckb address with associated script and prefix.

## Constructors

### new Address()

> **new Address**(`script`, `prefix`): `Address`

Creates an instance of Address.

#### Parameters

• **script**: `Script`

The script associated with the address.

• **prefix**: `string`

The address prefix.

#### Returns

`Address`

#### Source

address/index.ts:29

## Properties

### prefix

> **prefix**: `string`

The address prefix.

#### Source

address/index.ts:31

***

### script

> **script**: `Script`

The script associated with the address.

#### Source

address/index.ts:30

## Methods

### toString()

> **toString**(): `string`

Converts the Address instance to a string.

#### Returns

`string`

The address as a string.

#### Source

address/index.ts:113

***

### from()

> `static` **from**(`address`): `Address`

Creates an Address instance from an AddressLike object.

#### Parameters

• **address**: `AddressLike`

An AddressLike object or an instance of Address.

#### Returns

`Address`

An Address instance.

#### Source

address/index.ts:41

***

### fromKnownScript()

> `static` **fromKnownScript**(`script`, `args`, `client`): `Promise`\<`Address`\>

#### Parameters

• **script**: `KnownScript`

• **args**: `BytesLike`

• **client**: `Client`

#### Returns

`Promise`\<`Address`\>

#### Source

address/index.ts:93

***

### fromScript()

> `static` **fromScript**(`script`, `client`): `Address`

Creates an Address instance from a script and client.

#### Parameters

• **script**: `ScriptLike`

The script-like object.

• **client**: `Client`

The client instance used to fetch the address prefix.

#### Returns

`Address`

A promise that resolves to an Address instance.

#### Source

address/index.ts:89

***

### fromString()

> `static` **fromString**(`address`, `clients`): `Promise`\<`Address`\>

Creates an Address instance from an address string.

#### Parameters

• **address**: `string`

The address string to parse.

• **clients**: `Client` \| `Record`\<`string`, `Client`\>

A Client instance or a record of Client instances keyed by prefix.

#### Returns

`Promise`\<`Address`\>

A promise that resolves to an Address instance.

#### Throws

Will throw an error if the address prefix is unknown or mismatched.

#### Source

address/index.ts:59
