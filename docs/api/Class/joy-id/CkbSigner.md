**@ckb-ccc/joy-id** • **Docs**

***

@ckb-ccc/joy-id / JoyId / CkbSigner

# Class: CkbSigner

Class representing a CKB signer that extends Signer from @ckb-ccc/core.

## Extends

- `Signer`

## Constructors

### new CkbSigner()

> **new CkbSigner**(`client`, `name`, `icon`, `_appUri`?, `_aggregatorUri`?, `connectionsRepo`?): `CkbSigner`

Creates an instance of CkbSigner.

#### Parameters

• **client**: `Client`

The client instance.

• **name**: `string`

The name of the signer.

• **icon**: `string`

The icon URL of the signer.

• **\_appUri?**: `string`

The application URI.

• **\_aggregatorUri?**: `string`

The aggregator URI.

• **connectionsRepo?**: `ConnectionsRepo`= `undefined`

The connections repository.

#### Returns

`CkbSigner`

#### Overrides

`ccc.Signer.constructor`

#### Source

joy-id/src/ckb/index.ts:58

## Properties

### \_aggregatorUri?

> `private` `optional` `readonly` **\_aggregatorUri**: `string`

The aggregator URI.

#### Source

joy-id/src/ckb/index.ts:63

***

### \_appUri?

> `private` `optional` `readonly` **\_appUri**: `string`

The application URI.

#### Source

joy-id/src/ckb/index.ts:62

***

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`ccc.Signer.client_`

#### Source

core/dist/signer/signer/index.d.ts:32

***

### connection?

> `private` `optional` **connection**: `Connection`

#### Source

joy-id/src/ckb/index.ts:33

***

### connectionsRepo

> `private` `readonly` **connectionsRepo**: `ConnectionsRepo`

The connections repository.

#### Source

joy-id/src/ckb/index.ts:64

***

### icon

> `private` `readonly` **icon**: `string`

The icon URL of the signer.

#### Source

joy-id/src/ckb/index.ts:61

***

### name

> `private` `readonly` **name**: `string`

The name of the signer.

#### Source

joy-id/src/ckb/index.ts:60

## Accessors

### client

> `get` **client**(): `Client`

#### Returns

`Client`

#### Source

core/dist/signer/signer/index.d.ts:36

***

### signType

> `get` **signType**(): `SignerSignType`

Gets the sign type.

#### Returns

`SignerSignType`

The sign type.

#### Source

joy-id/src/ckb/index.ts:29

***

### type

> `get` **type**(): `SignerType`

Gets the signer type.

#### Returns

`SignerType`

The type of the signer.

#### Source

joy-id/src/ckb/index.ts:21

## Methods

### assertConnection()

> `private` **assertConnection**(): `Promise`\<`Connection`\>

Ensures that the signer is connected and returns the connection.

#### Returns

`Promise`\<`Connection`\>

A promise that resolves to the current connection.

#### Throws

Will throw an error if not connected.

#### Source

joy-id/src/ckb/index.ts:41

***

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the provider by requesting authentication.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is established.

#### Overrides

`ccc.Signer.connect`

#### Source

joy-id/src/ckb/index.ts:105

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the disconnection is complete.

#### Overrides

`ccc.Signer.disconnect`

#### Source

joy-id/src/ckb/index.ts:125

***

### getAddressObj()

> **getAddressObj**(): `Promise`\<`Address`\>

Gets the address object.

#### Returns

`Promise`\<`Address`\>

A promise that resolves to the address object.

#### Source

joy-id/src/ckb/index.ts:166

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<`Address`[]\>

Gets the address objects.

#### Returns

`Promise`\<`Address`[]\>

A promise that resolves to an array of address objects.

#### Overrides

`ccc.Signer.getAddressObjs`

#### Source

joy-id/src/ckb/index.ts:177

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

`ccc.Signer.getAddresses`

#### Source

core/dist/signer/signer/index.d.ts:97

***

### getAggregatorUri()

> `private` **getAggregatorUri**(): `string`

Gets the aggregator URI.

#### Returns

`string`

The aggregator URI.

#### Source

joy-id/src/ckb/index.ts:91

***

### getBalance()

> **getBalance**(): `Promise`\<`bigint`\>

Gets balance of all addresses

#### Returns

`Promise`\<`bigint`\>

A promise that resolves to the balance

#### Inherited from

`ccc.Signer.getBalance`

#### Source

core/dist/signer/signer/index.d.ts:103

***

### getConfig()

> `private` **getConfig**(): `object`

Gets the configuration for JoyID.

#### Returns

`object`

The configuration object.

##### joyidAppURL

> **joyidAppURL**: `string`

##### logo

> **logo**: `string`

##### name

> **name**: `string`

##### redirectURL

> **redirectURL**: `string` = `location.href`

#### Source

joy-id/src/ckb/index.ts:74

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity of the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the identity.

#### Overrides

`ccc.Signer.getIdentity`

#### Source

joy-id/src/ckb/index.ts:154

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the internal address.

#### Overrides

`ccc.Signer.getInternalAddress`

#### Source

joy-id/src/ckb/index.ts:146

***

### getRecommendedAddress()

> **getRecommendedAddress**(`preference`?): `Promise`\<`string`\>

Gets the recommended address for the signer as a string.

#### Parameters

• **preference?**: `unknown`

Optional preference parameter.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the recommended address as a string.

#### Inherited from

`ccc.Signer.getRecommendedAddress`

#### Source

core/dist/signer/signer/index.d.ts:91

***

### getRecommendedAddressObj()

> **getRecommendedAddressObj**(`_preference`?): `Promise`\<`Address`\>

Gets the recommended Address object for the signer.

#### Parameters

• **\_preference?**: `unknown`

Optional preference parameter.

#### Returns

`Promise`\<`Address`\>

A promise that resolves to the recommended Address object.

#### Inherited from

`ccc.Signer.getRecommendedAddressObj`

#### Source

core/dist/signer/signer/index.d.ts:84

***

### isConnected()

> **isConnected**(): `Promise`\<`boolean`\>

Checks if the signer is connected.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to true if connected, false otherwise.

#### Overrides

`ccc.Signer.isConnected`

#### Source

joy-id/src/ckb/index.ts:134

***

### prepareTransaction()

> **prepareTransaction**(`txLike`): `Promise`\<`Transaction`\>

Prepares a transaction.

#### Parameters

• **txLike**: `TransactionLike`

The transaction-like object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to the prepared transaction.

#### Overrides

`ccc.Signer.prepareTransaction`

#### Source

joy-id/src/ckb/index.ts:186

***

### prepareTransactionForSubKey()

> `private` **prepareTransactionForSubKey**(`tx`, `witness`): `Promise`\<`undefined` \| `never`[]\>

Prepares a transaction for a sub key.

#### Parameters

• **tx**: `Transaction`

The transaction object.

• **witness**: `WitnessArgs`

The witness arguments.

#### Returns

`Promise`\<`undefined` \| `never`[]\>

#### Throws

Will throw an error if no COTA cells are found for the sub key wallet.

#### Source

joy-id/src/ckb/index.ts:214

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`ccc.Signer.replaceClient`

#### Source

core/dist/signer/signer/index.d.ts:41

***

### restoreConnection()

> `private` **restoreConnection**(): `Promise`\<`void`\>

Restores the previous connection.

#### Returns

`Promise`\<`void`\>

#### Source

joy-id/src/ckb/index.ts:337

***

### saveConnection()

> `private` **saveConnection**(): `Promise`\<`void`\>

Saves the current connection.

#### Returns

`Promise`\<`void`\>

#### Source

joy-id/src/ckb/index.ts:322

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<\`0x$\{string\}\`\>

Sends a transaction after signing it.

#### Parameters

• **tx**: `TransactionLike`

The transaction to send, represented as a TransactionLike object.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash as a Hex string.

#### Inherited from

`ccc.Signer.sendTransaction`

#### Source

core/dist/signer/signer/index.d.ts:144

***

### signMessage()

> **signMessage**(`message`): `Promise`\<`Signature`\>

Signs a message.

#### Parameters

• **message**: `BytesLike`

#### Returns

`Promise`\<`Signature`\>

A promise that resolves to the signature info.

#### Inherited from

`ccc.Signer.signMessage`

#### Throws

Will throw an error if not implemented.

#### Source

core/dist/signer/signer/index.d.ts:111

***

### signMessageRaw()

> **signMessageRaw**(`message`): `Promise`\<`string`\>

Signs a raw message with the account.

#### Parameters

• **message**: `BytesLike`

The message to sign.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signed message.

#### Overrides

`ccc.Signer.signMessageRaw`

#### Source

joy-id/src/ckb/index.ts:290

***

### signOnlyTransaction()

> **signOnlyTransaction**(`txLike`): `Promise`\<`Transaction`\>

Signs a transaction.

#### Parameters

• **txLike**: `TransactionLike`

The transaction-like object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to the signed transaction.

#### Overrides

`ccc.Signer.signOnlyTransaction`

#### Source

joy-id/src/ckb/index.ts:258

***

### signTransaction()

> **signTransaction**(`tx`): `Promise`\<`Transaction`\>

Signs a transaction.

#### Parameters

• **tx**: `TransactionLike`

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to the signed Transaction object.

#### Inherited from

`ccc.Signer.signTransaction`

#### Source

core/dist/signer/signer/index.d.ts:151

***

### verifyMessage()

> **verifyMessage**(`message`, `signature`): `Promise`\<`boolean`\>

Verify a signature.

#### Parameters

• **message**: `BytesLike`

• **signature**: `string` \| `Signature`

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to the verification result.

#### Inherited from

`ccc.Signer.verifyMessage`

#### Throws

Will throw an error if not implemented.

#### Source

core/dist/signer/signer/index.d.ts:128

***

### verifyMessageRaw()

> **verifyMessageRaw**(`_0`, `_1`): `Promise`\<`boolean`\>

Verify a string signature. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_0**: `BytesLike`

The original message.

• **\_1**: `string`

The signature to verify.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to the verification result.

#### Inherited from

`ccc.Signer.verifyMessageRaw`

#### Throws

Will throw an error if not implemented.

#### Source

core/dist/signer/signer/index.d.ts:137

***

### verifyMessage()

> `static` **verifyMessage**(`message`, `signature`): `Promise`\<`boolean`\>

#### Parameters

• **message**: `BytesLike`

• **signature**: `Signature`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`ccc.Signer.verifyMessage`

#### Source

core/dist/signer/signer/index.d.ts:37
