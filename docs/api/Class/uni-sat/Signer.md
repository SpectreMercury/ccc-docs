**@ckb-ccc/uni-sat** • **Docs**

***

@ckb-ccc/uni-sat / UniSat / Signer

# Class: Signer

Class representing a Bitcoin signer that extends SignerBtc from @ckb-ccc/core.

## Extends

- `SignerBtc`

## Constructors

### new Signer()

> **new Signer**(`client`, `provider`): `Signer`

Creates an instance of Signer.

#### Parameters

• **client**: `Client`

The client instance.

• **provider**: `Provider`

The provider instance.

#### Returns

`Signer`

#### Overrides

`ccc.SignerBtc.constructor`

#### Source

uni-sat/src/signer.ts:15

## Properties

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`ccc.SignerBtc.client_`

#### Source

core/dist/signer/signer/index.d.ts:32

***

### provider

> `readonly` **provider**: `Provider`

The provider instance.

#### Source

uni-sat/src/signer.ts:17

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

core/dist/signer/btc/signerBtc.d.ts:12

***

### type

> `get` **type**(): `SignerType`

#### Returns

`SignerType`

#### Source

core/dist/signer/btc/signerBtc.d.ts:11

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the provider by requesting accounts.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is established.

#### Overrides

`ccc.SignerBtc.connect`

#### Source

uni-sat/src/signer.ts:42

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

`ccc.SignerBtc.disconnect`

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

`ccc.SignerBtc.getAddressObjs`

#### Source

core/dist/signer/btc/signerBtc.d.ts:42

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

`ccc.SignerBtc.getAddresses`

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

`ccc.SignerBtc.getBalance`

#### Source

core/dist/signer/signer/index.d.ts:103

***

### getBtcAccount()

> **getBtcAccount**(): `Promise`\<`string`\>

Gets the Bitcoin account address.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the Bitcoin account address.

#### Overrides

`ccc.SignerBtc.getBtcAccount`

#### Source

uni-sat/src/signer.ts:26

***

### getBtcPublicKey()

> **getBtcPublicKey**(): `Promise`\<\`0x$\{string\}\`\>

Gets the Bitcoin public key.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the Bitcoin public key.

#### Overrides

`ccc.SignerBtc.getBtcPublicKey`

#### Source

uni-sat/src/signer.ts:34

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity, which is the Bitcoin public key in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

`ccc.SignerBtc.getIdentity`

#### Source

core/dist/signer/btc/signerBtc.d.ts:36

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the Bitcoin account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

`ccc.SignerBtc.getInternalAddress`

#### Source

core/dist/signer/btc/signerBtc.d.ts:30

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

`ccc.SignerBtc.getRecommendedAddress`

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

`ccc.SignerBtc.getRecommendedAddressObj`

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

`ccc.SignerBtc.isConnected`

#### Source

uni-sat/src/signer.ts:50

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

`ccc.SignerBtc.prepareTransaction`

#### Source

core/dist/signer/btc/signerBtc.d.ts:49

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`ccc.SignerBtc.replaceClient`

#### Source

core/dist/signer/signer/index.d.ts:41

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

`ccc.SignerBtc.sendTransaction`

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

`ccc.SignerBtc.signMessage`

#### Throws

Will throw an error if not implemented.

#### Source

core/dist/signer/signer/index.d.ts:111

***

### signMessageRaw()

> **signMessageRaw**(`message`): `Promise`\<`string`\>

Signs a raw message with the Bitcoin account.

#### Parameters

• **message**: `BytesLike`

The message to sign.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signed message.

#### Overrides

`ccc.SignerBtc.signMessageRaw`

#### Source

uni-sat/src/signer.ts:59

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

`ccc.SignerBtc.signOnlyTransaction`

#### Source

core/dist/signer/btc/signerBtc.d.ts:56

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

`ccc.SignerBtc.signTransaction`

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

`ccc.SignerBtc.verifyMessage`

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

`ccc.SignerBtc.verifyMessageRaw`

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

`ccc.SignerBtc.verifyMessage`

#### Source

core/dist/signer/signer/index.d.ts:37
