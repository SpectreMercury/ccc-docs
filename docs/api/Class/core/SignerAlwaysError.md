[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / SignerAlwaysError

# Class: SignerAlwaysError

An abstract class representing a generic signer.
This class provides methods to connect, get addresses, and sign transactions.

## Extends

- [`SignerDummy`](ccc.Class.SignerDummy.md)

## Constructors

### new SignerAlwaysError()

> **new SignerAlwaysError**(`client`, `type`, `message`): [`SignerAlwaysError`](ccc.Class.SignerAlwaysError.md)

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

• **type**: [`SignerType`](ccc.Enumeration.SignerType.md)

• **message**: `string`

#### Returns

[`SignerAlwaysError`](ccc.Class.SignerAlwaysError.md)

#### Overrides

[`SignerDummy`](ccc.Class.SignerDummy.md).[`constructor`](ccc.Class.SignerDummy.md#constructors)

#### Source

[signer/dummy/alwaysError.ts:6](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/alwaysError.ts#L6)

## Properties

### client\_

> `protected` **client\_**: [`Client`](ccc.Class.Client.md)

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`client_`](ccc.Class.SignerDummy.md#client_)

#### Source

[signer/signer/index.ts:40](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L40)

***

### message

> `private` `readonly` **message**: `string`

#### Source

[signer/dummy/alwaysError.ts:9](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/alwaysError.ts#L9)

***

### type

> `readonly` **type**: [`SignerType`](ccc.Enumeration.SignerType.md)

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`type`](ccc.Class.SignerDummy.md#type)

#### Source

[signer/dummy/dummy.ts:12](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/dummy.ts#L12)

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

[signer/dummy/dummy.ts:6](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/dummy.ts#L6)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`SignerDummy`](ccc.Class.SignerDummy.md).[`connect`](ccc.Class.SignerDummy.md#connect)

#### Source

[signer/dummy/alwaysError.ts:14](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/alwaysError.ts#L14)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`disconnect`](ccc.Class.SignerDummy.md#disconnect)

#### Source

[signer/signer/index.ts:96](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L96)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](ccc.Class.Address.md)[]\>

Gets an array of Address objects associated with the signer.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getAddressObjs`](ccc.Class.SignerDummy.md#getaddressobjs)

#### Source

[signer/dummy/dummy.ts:25](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/dummy.ts#L25)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getAddresses`](ccc.Class.SignerDummy.md#getaddresses)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getBalance`](ccc.Class.SignerDummy.md#getbalance)

#### Source

[signer/signer/index.ts:164](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L164)

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity for verifying signature, usually it's address

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getIdentity`](ccc.Class.SignerDummy.md#getidentity)

#### Source

[signer/signer/index.ts:117](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L117)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getInternalAddress`](ccc.Class.SignerDummy.md#getinternaladdress)

#### Source

[signer/dummy/dummy.ts:21](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/dummy.ts#L21)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getRecommendedAddress`](ccc.Class.SignerDummy.md#getrecommendedaddress)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`getRecommendedAddressObj`](ccc.Class.SignerDummy.md#getrecommendedaddressobj)

#### Source

[signer/signer/index.ts:134](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L134)

***

### isConnected()

> **isConnected**(): `Promise`\<`boolean`\>

Check if the signer is connected.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves the connection status.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`isConnected`](ccc.Class.SignerDummy.md#isconnected)

#### Source

[signer/dummy/dummy.ts:17](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/dummy/dummy.ts#L17)

***

### prepareTransaction()

> **prepareTransaction**(`_`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

prepare a transaction before signing. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to prepare, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to the prepared Transaction object.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`prepareTransaction`](ccc.Class.SignerDummy.md#preparetransaction)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:262](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L262)

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`replaceClient`](ccc.Class.SignerDummy.md#replaceclient)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`sendTransaction`](ccc.Class.SignerDummy.md#sendtransaction)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`signMessage`](ccc.Class.SignerDummy.md#signmessage)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`signMessageRaw`](ccc.Class.SignerDummy.md#signmessageraw)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:192](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L192)

***

### signOnlyTransaction()

> **signOnlyTransaction**(`_`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

Signs a transaction without preparing information for it. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

A promise that resolves to the signed Transaction object.

#### Inherited from

[`SignerDummy`](ccc.Class.SignerDummy.md).[`signOnlyTransaction`](ccc.Class.SignerDummy.md#signonlytransaction)

#### Throws

Will throw an error if not implemented.

#### Source

[signer/signer/index.ts:273](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L273)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`signTransaction`](ccc.Class.SignerDummy.md#signtransaction)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`verifyMessage`](ccc.Class.SignerDummy.md#verifymessage)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`verifyMessageRaw`](ccc.Class.SignerDummy.md#verifymessageraw)

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

[`SignerDummy`](ccc.Class.SignerDummy.md).[`verifyMessage`](ccc.Class.SignerDummy.md#verifymessage-1)

#### Source

[signer/signer/index.ts:49](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L49)
