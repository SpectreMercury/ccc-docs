**@ckb-ccc/joy-id** • **Docs**

***

@ckb-ccc/joy-id / JoyId / EvmSigner

# Class: EvmSigner

Class representing an EVM signer that extends SignerEvm from @ckb-ccc/core.

## Extends

- `SignerEvm`

## Constructors

### new EvmSigner()

> **new EvmSigner**(`client`, `name`, `icon`, `appUri`?, `connectionsRepo`?): `EvmSigner`

Creates an instance of EvmSigner.

#### Parameters

• **client**: `Client`

The client instance.

• **name**: `string`

The name of the signer.

• **icon**: `string`

The icon URL of the signer.

• **appUri?**: `string`= `"https://app.joy.id"`

The application URI.

• **connectionsRepo?**: `ConnectionsRepo`= `undefined`

The connections repository.

#### Returns

`EvmSigner`

#### Overrides

`ccc.SignerEvm.constructor`

#### Source

joy-id/src/evm/index.ts:40

## Properties

### appUri

> `private` `readonly` **appUri**: `string` = `"https://app.joy.id"`

The application URI.

#### Source

joy-id/src/evm/index.ts:44

***

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`ccc.SignerEvm.client_`

#### Source

core/dist/signer/signer/index.d.ts:32

***

### connection?

> `private` `optional` **connection**: `Connection`

#### Source

joy-id/src/evm/index.ts:16

***

### connectionsRepo

> `private` `readonly` **connectionsRepo**: `ConnectionsRepo`

The connections repository.

#### Source

joy-id/src/evm/index.ts:45

***

### icon

> `private` `readonly` **icon**: `string`

The icon URL of the signer.

#### Source

joy-id/src/evm/index.ts:43

***

### name

> `private` `readonly` **name**: `string`

The name of the signer.

#### Source

joy-id/src/evm/index.ts:42

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

#### Returns

`SignerSignType`

#### Source

core/dist/signer/evm/signerEvm.d.ts:11

***

### type

> `get` **type**(): `SignerType`

#### Returns

`SignerType`

#### Source

core/dist/signer/evm/signerEvm.d.ts:10

## Methods

### \_getOmniLockEvmAddressObj()

> **\_getOmniLockEvmAddressObj**(`account`): `Promise`\<`Address`\>

#### Parameters

• **account**: `string`

#### Returns

`Promise`\<`Address`\>

#### Inherited from

`ccc.SignerEvm._getOmniLockEvmAddressObj`

#### Source

core/dist/signer/evm/signerEvm.d.ts:30

***

### \_getOmniLockOldEvmAddressObj()

> **\_getOmniLockOldEvmAddressObj**(`account`): `Promise`\<`Address`\>

#### Parameters

• **account**: `string`

#### Returns

`Promise`\<`Address`\>

#### Inherited from

`ccc.SignerEvm._getOmniLockOldEvmAddressObj`

#### Source

core/dist/signer/evm/signerEvm.d.ts:31

***

### \_signOmniLockScriptForTransaction()

> **\_signOmniLockScriptForTransaction**(`tx`, `script`, `messageTransformer`): `Promise`\<`Transaction`\>

#### Parameters

• **tx**: `Transaction`

• **script**: `Script`

• **messageTransformer**

#### Returns

`Promise`\<`Transaction`\>

#### Inherited from

`ccc.SignerEvm._signOmniLockScriptForTransaction`

#### Source

core/dist/signer/evm/signerEvm.d.ts:46

***

### assertConnection()

> `private` **assertConnection**(): `Connection`

Ensures that the signer is connected and returns the connection.

#### Returns

`Connection`

The current connection.

#### Throws

Will throw an error if not connected.

#### Source

joy-id/src/evm/index.ts:24

***

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the provider by requesting authentication.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is established.

#### Overrides

`ccc.SignerEvm.connect`

#### Source

joy-id/src/evm/index.ts:77

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

`ccc.SignerEvm.disconnect`

#### Source

core/dist/signer/signer/index.d.ts:53

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<`Address`[]\>

Gets an array of Address objects representing the known script addresses for the signer.

#### Returns

`Promise`\<`Address`[]\>

A promise that resolves to an array of Address objects.

#### Inherited from

`ccc.SignerEvm.getAddressObjs`

#### Source

core/dist/signer/evm/signerEvm.d.ts:29

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

`ccc.SignerEvm.getAddresses`

#### Source

core/dist/signer/signer/index.d.ts:97

***

### getBalance()

> **getBalance**(): `Promise`\<`bigint`\>

Gets balance of all addresses

#### Returns

`Promise`\<`bigint`\>

A promise that resolves to the balance

#### Inherited from

`ccc.SignerEvm.getBalance`

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

##### requestNetwork

> **requestNetwork**: `string`

#### Source

joy-id/src/evm/index.ts:55

***

### getEvmAccount()

> **getEvmAccount**(): `Promise`\<`string`\>

Gets the EVM account address.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the EVM account address.

#### Overrides

`ccc.SignerEvm.getEvmAccount`

#### Source

joy-id/src/evm/index.ts:69

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity for verifying signature, usually it's address

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

`ccc.SignerEvm.getIdentity`

#### Source

core/dist/signer/signer/index.d.ts:71

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the EVM account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

`ccc.SignerEvm.getInternalAddress`

#### Source

core/dist/signer/evm/signerEvm.d.ts:23

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

`ccc.SignerEvm.getRecommendedAddress`

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

`ccc.SignerEvm.getRecommendedAddressObj`

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

`ccc.SignerEvm.isConnected`

#### Source

joy-id/src/evm/index.ts:97

***

### prepareTransaction()

> **prepareTransaction**(`txLike`): `Promise`\<`Transaction`\>

prepare a transaction before signing. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **txLike**: `TransactionLike`

The transaction to prepare, represented as a TransactionLike object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to the prepared Transaction object.

#### Inherited from

`ccc.SignerEvm.prepareTransaction`

#### Source

core/dist/signer/evm/signerEvm.d.ts:38

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`ccc.SignerEvm.replaceClient`

#### Source

core/dist/signer/signer/index.d.ts:41

***

### restoreConnection()

> `private` **restoreConnection**(): `Promise`\<`void`\>

Restores the previous connection.

#### Returns

`Promise`\<`void`\>

#### Source

joy-id/src/evm/index.ts:153

***

### saveConnection()

> `private` **saveConnection**(): `Promise`\<`void`\>

Saves the current connection.

#### Returns

`Promise`\<`void`\>

#### Source

joy-id/src/evm/index.ts:138

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

`ccc.SignerEvm.sendTransaction`

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

`ccc.SignerEvm.signMessage`

#### Throws

Will throw an error if not implemented.

#### Source

core/dist/signer/signer/index.d.ts:111

***

### signMessageRaw()

> **signMessageRaw**(`message`): `Promise`\<\`0x$\{string\}\`\>

Signs a raw message with the EVM account.

#### Parameters

• **message**: `BytesLike`

The message to sign.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the signed message.

#### Overrides

`ccc.SignerEvm.signMessageRaw`

#### Source

joy-id/src/evm/index.ts:110

***

### signOnlyTransaction()

> **signOnlyTransaction**(`txLike`): `Promise`\<`Transaction`\>

Signs a transaction without modifying it.

#### Parameters

• **txLike**: `TransactionLike`

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to a signed Transaction object.

#### Inherited from

`ccc.SignerEvm.signOnlyTransaction`

#### Source

core/dist/signer/evm/signerEvm.d.ts:45

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

`ccc.SignerEvm.signTransaction`

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

`ccc.SignerEvm.verifyMessage`

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

`ccc.SignerEvm.verifyMessageRaw`

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

`ccc.SignerEvm.verifyMessage`

#### Source

core/dist/signer/signer/index.d.ts:37
