[**@ckb-ccc/okx**](README.md) • **Docs**

***

[@ckb-ccc/okx](README.md) / [Okx](Namespace.Okx.md) / BitcoinSigner

# Class: BitcoinSigner

Class representing a Bitcoin signer that extends the UniSat Signer.

## Extends

- `Signer`

## Constructors

### new BitcoinSigner()

> **new BitcoinSigner**(`client`, `provider`): [`BitcoinSigner`](Okx.Class.BitcoinSigner.md)

Creates an instance of BitcoinSigner.

#### Parameters

• **client**: `Client`

The client instance.

• **provider**: `BitcoinProvider`

The Bitcoin provider.

#### Returns

[`BitcoinSigner`](Okx.Class.BitcoinSigner.md)

#### Overrides

`UniSat.Signer.constructor`

#### Source

[okx/src/signer.ts:16](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/okx/src/signer.ts#L16)

## Properties

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`UniSat.Signer.client_`

#### Source

core/dist/signer/signer/index.d.ts:32

***

### provider

> `readonly` **provider**: `BitcoinProvider`

The Bitcoin provider.

#### Inherited from

`UniSat.Signer.provider`

#### Source

[okx/src/signer.ts:18](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/okx/src/signer.ts#L18)

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

#### Returns

`Promise`\<`void`\>

#### Inherited from

`UniSat.Signer.connect`

#### Source

uni-sat/dist/signer.d.ts:8

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

`UniSat.Signer.disconnect`

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

`UniSat.Signer.getAddressObjs`

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

`UniSat.Signer.getAddresses`

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

`UniSat.Signer.getBalance`

#### Source

core/dist/signer/signer/index.d.ts:103

***

### getBtcAccount()

> **getBtcAccount**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Inherited from

`UniSat.Signer.getBtcAccount`

#### Source

uni-sat/dist/signer.d.ts:6

***

### getBtcPublicKey()

> **getBtcPublicKey**(): `Promise`\<\`0x$\{string\}\`\>

#### Returns

`Promise`\<\`0x$\{string\}\`\>

#### Inherited from

`UniSat.Signer.getBtcPublicKey`

#### Source

uni-sat/dist/signer.d.ts:7

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity, which is the Bitcoin public key in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

`UniSat.Signer.getIdentity`

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

`UniSat.Signer.getInternalAddress`

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

`UniSat.Signer.getRecommendedAddress`

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

`UniSat.Signer.getRecommendedAddressObj`

#### Source

core/dist/signer/signer/index.d.ts:84

***

### isConnected()

> **isConnected**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`UniSat.Signer.isConnected`

#### Source

uni-sat/dist/signer.d.ts:9

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

`UniSat.Signer.prepareTransaction`

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

`UniSat.Signer.replaceClient`

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

`UniSat.Signer.sendTransaction`

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

`UniSat.Signer.signMessage`

#### Throws

Will throw an error if not implemented.

#### Source

core/dist/signer/signer/index.d.ts:111

***

### signMessageRaw()

> **signMessageRaw**(`message`): `Promise`\<`string`\>

#### Parameters

• **message**: `BytesLike`

#### Returns

`Promise`\<`string`\>

#### Inherited from

`UniSat.Signer.signMessageRaw`

#### Source

uni-sat/dist/signer.d.ts:10

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

`UniSat.Signer.signOnlyTransaction`

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

`UniSat.Signer.signTransaction`

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

`UniSat.Signer.verifyMessage`

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

`UniSat.Signer.verifyMessageRaw`

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

`UniSat.Signer.verifyMessage`

#### Source

core/dist/signer/signer/index.d.ts:37
