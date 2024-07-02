[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / SignerBtcPublicKeyReadonly

# Class: SignerBtcPublicKeyReadonly

A class extending SignerBtc that provides read-only access to a Bitcoin public key and account.
This class does not support signing operations.

## Extends

- [`SignerBtc`](ccc.Class.SignerBtc.md)

## Constructors

### new SignerBtcPublicKeyReadonly()

> **new SignerBtcPublicKeyReadonly**(`client`, `account`, `publicKey`): [`SignerBtcPublicKeyReadonly`](ccc.Class.SignerBtcPublicKeyReadonly.md)

Creates an instance of SignerBtcPublicKeyReadonly.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

The client instance used for communication.

• **account**: `string`

The Bitcoin account associated with the signer.

• **publicKey**: [`BytesLike`](ccc.Type.BytesLike.md)

The public key associated with the signer.

#### Returns

[`SignerBtcPublicKeyReadonly`](ccc.Class.SignerBtcPublicKeyReadonly.md)

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`constructor`](ccc.Class.SignerBtc.md#constructors)

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:19](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L19)

## Properties

### account

> `private` `readonly` **account**: `string`

The Bitcoin account associated with the signer.

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:21](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L21)

***

### client\_

> `protected` **client\_**: [`Client`](ccc.Class.Client.md)

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`client_`](ccc.Class.SignerBtc.md#client_)

#### Source

[signer/signer/index.ts:40](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L40)

***

### publicKey

> `private` `readonly` **publicKey**: \`0x$\{string\}\`

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:10](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L10)

## Accessors

### client

> `get` **client**(): [`Client`](ccc.Class.Client.md)

#### Returns

[`Client`](ccc.Class.Client.md)

#### Source

[signer/signer/index.ts:45](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L45)

***

### signType

> `get` **signType**(): [`SignerSignType`](ccc.Enumeration.SignerSignType.md)

#### Returns

[`SignerSignType`](ccc.Enumeration.SignerSignType.md)

#### Source

[signer/btc/signerBtc.ts:21](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L21)

***

### type

> `get` **type**(): [`SignerType`](ccc.Enumeration.SignerType.md)

#### Returns

[`SignerType`](ccc.Enumeration.SignerType.md)

#### Source

[signer/btc/signerBtc.ts:17](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L17)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`connect`](ccc.Class.SignerBtc.md#connect)

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:34](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L34)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`disconnect`](ccc.Class.SignerBtc.md#disconnect)

#### Source

[signer/signer/index.ts:96](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L96)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](ccc.Class.Address.md)[]\>

Gets an array of Address objects representing the known script addresses for the signer.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getAddressObjs`](ccc.Class.SignerBtc.md#getaddressobjs)

#### Source

[signer/btc/signerBtc.ts:62](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L62)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getAddresses`](ccc.Class.SignerBtc.md#getaddresses)

#### Source

[signer/signer/index.ts:153](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L153)

***

### getBalance()

> **getBalance**(): `Promise`\<`bigint`\>

Gets balance of all addresses

#### Returns

`Promise`\<`bigint`\>

A promise that resolves to the balance

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getBalance`](ccc.Class.SignerBtc.md#getbalance)

#### Source

[signer/signer/index.ts:164](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L164)

***

### getBtcAccount()

> **getBtcAccount**(): `Promise`\<`string`\>

Gets the Bitcoin account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the Bitcoin account.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getBtcAccount`](ccc.Class.SignerBtc.md#getbtcaccount)

#### Example

```typescript
const account = await signer.getBtcAccount(); // Outputs the Bitcoin account
```

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:55](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L55)

***

### getBtcPublicKey()

> **getBtcPublicKey**(): `Promise`\<\`0x$\{string\}\`\>

Gets the Bitcoin public key associated with the signer.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to a Hex string representing the Bitcoin public key.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getBtcPublicKey`](ccc.Class.SignerBtc.md#getbtcpublickey)

#### Example

```typescript
const publicKey = await signer.getBtcPublicKey(); // Outputs the Bitcoin public key
```

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:69](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L69)

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity, which is the Bitcoin public key in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getIdentity`](ccc.Class.SignerBtc.md#getidentity)

#### Source

[signer/btc/signerBtc.ts:53](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L53)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the Bitcoin account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getInternalAddress`](ccc.Class.SignerBtc.md#getinternaladdress)

#### Source

[signer/btc/signerBtc.ts:44](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L44)

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

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getRecommendedAddress`](ccc.Class.SignerBtc.md#getrecommendedaddress)

#### Source

[signer/signer/index.ts:144](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L144)

***

### getRecommendedAddressObj()

> **getRecommendedAddressObj**(`_preference`?): `Promise`\<[`Address`](ccc.Class.Address.md)\>

Gets the recommended Address object for the signer.

#### Parameters

• **\_preference?**: `unknown`

Optional preference parameter.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

A promise that resolves to the recommended Address object.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`getRecommendedAddressObj`](ccc.Class.SignerBtc.md#getrecommendedaddressobj)

#### Source

[signer/signer/index.ts:134](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L134)

***

### isConnected()

> **isConnected**(): `Promise`\<`boolean`\>

Check if the signer is connected.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves the connection status.

#### Overrides

[`SignerBtc`](ccc.Class.SignerBtc.md).[`isConnected`](ccc.Class.SignerBtc.md#isconnected)

#### Source

[signer/btc/signerBtcPublicKeyReadonly.ts:41](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtcPublicKeyReadonly.ts#L41)

***

### prepareTransaction()

> **prepareTransaction**(`txLike`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

prepare a transaction before signing. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **txLike**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to prepare, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to the prepared Transaction object.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`prepareTransaction`](ccc.Class.SignerBtc.md#preparetransaction)

#### Source

[signer/btc/signerBtc.ts:81](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L81)

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`replaceClient`](ccc.Class.SignerBtc.md#replaceclient)

#### Source

[signer/signer/index.ts:80](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L80)

***

### sendTransaction()

> **sendTransaction**(`tx`): `Promise`\<\`0x$\{string\}\`\>

Sends a transaction after signing it.

#### Parameters

• **tx**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to send, represented as a TransactionLike object.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to the transaction hash as a Hex string.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`sendTransaction`](ccc.Class.SignerBtc.md#sendtransaction)

#### Source

[signer/signer/index.ts:240](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L240)

***

### signMessage()

> **signMessage**(`message`): `Promise`\<[`Signature`](ccc.Class.Signature.md)\>

Signs a message.

#### Parameters

• **message**: [`BytesLike`](ccc.Type.BytesLike.md)

#### Returns

`Promise`\<[`Signature`](ccc.Class.Signature.md)\>

A promise that resolves to the signature info.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signMessage`](ccc.Class.SignerBtc.md#signmessage)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:177](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L177)

***

### signMessageRaw()

> **signMessageRaw**(`_`): `Promise`\<`string`\>

Signs a message and returns signature only. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: [`BytesLike`](ccc.Type.BytesLike.md)

The message to sign, as a string or BytesLike object.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signature as a string.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signMessageRaw`](ccc.Class.SignerBtc.md#signmessageraw)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:192](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L192)

***

### signOnlyTransaction()

> **signOnlyTransaction**(`txLike`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

Signs a transaction without modifying it.

#### Parameters

• **txLike**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to a signed Transaction object.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signOnlyTransaction`](ccc.Class.SignerBtc.md#signonlytransaction)

#### Source

[signer/btc/signerBtc.ts:94](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/btc/signerBtc.ts#L94)

***

### signTransaction()

> **signTransaction**(`tx`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

Signs a transaction.

#### Parameters

• **tx**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to the signed Transaction object.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`signTransaction`](ccc.Class.SignerBtc.md#signtransaction)

#### Source

[signer/signer/index.ts:250](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L250)

***

### verifyMessage()

> **verifyMessage**(`message`, `signature`): `Promise`\<`boolean`\>

Verify a signature.

#### Parameters

• **message**: [`BytesLike`](ccc.Type.BytesLike.md)

• **signature**: `string` \| [`Signature`](ccc.Class.Signature.md)

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to the verification result.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`verifyMessage`](ccc.Class.SignerBtc.md#verifymessage)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:204](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L204)

***

### verifyMessageRaw()

> **verifyMessageRaw**(`_0`, `_1`): `Promise`\<`boolean`\>

Verify a string signature. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_0**: [`BytesLike`](ccc.Type.BytesLike.md)

The original message.

• **\_1**: `string`

The signature to verify.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves to the verification result.

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`verifyMessageRaw`](ccc.Class.SignerBtc.md#verifymessageraw)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:230](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L230)

***

### verifyMessage()

> `static` **verifyMessage**(`message`, `signature`): `Promise`\<`boolean`\>

#### Parameters

• **message**: [`BytesLike`](ccc.Type.BytesLike.md)

• **signature**: [`Signature`](ccc.Class.Signature.md)

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

[`SignerBtc`](ccc.Class.SignerBtc.md).[`verifyMessage`](ccc.Class.SignerBtc.md#verifymessage-1)

#### Source

[signer/signer/index.ts:49](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L49)
