[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / SignerCkbScriptReadonly

# Class: SignerCkbScriptReadonly

A class extending Signer that provides read-only access to a CKB script.
This class does not support signing operations.

## Extends

- [`Signer`](ccc.Class.Signer.md)

## Constructors

### new SignerCkbScriptReadonly()

> **new SignerCkbScriptReadonly**(`client`, `script`): [`SignerCkbScriptReadonly`](ccc.Class.SignerCkbScriptReadonly.md)

Creates an instance of SignerCkbScriptReadonly.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

The client instance used for communication.

• **script**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script associated with the signer.

#### Returns

[`SignerCkbScriptReadonly`](ccc.Class.SignerCkbScriptReadonly.md)

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`constructor`](ccc.Class.Signer.md#constructors)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:27](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L27)

## Properties

### client\_

> `protected` **client\_**: [`Client`](ccc.Class.Client.md)

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`client_`](ccc.Class.Signer.md#client_)

#### Source

[signer/signer/index.ts:40](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L40)

***

### script

> `private` `readonly` **script**: [`Script`](ccc.Class.Script.md)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:19](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L19)

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

[signer/ckb/signerCkbScriptReadonly.ts:15](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L15)

***

### type

> `get` **type**(): [`SignerType`](ccc.Enumeration.SignerType.md)

#### Returns

[`SignerType`](ccc.Enumeration.SignerType.md)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:11](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L11)

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`connect`](ccc.Class.Signer.md#connect)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:38](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L38)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`disconnect`](ccc.Class.Signer.md#disconnect)

#### Source

[signer/signer/index.ts:96](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L96)

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<[`Address`](ccc.Class.Address.md)[]\>

Gets an array of Address objects representing the script address.

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)[]\>

A promise that resolves to an array of Address objects.

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`getAddressObjs`](ccc.Class.Signer.md#getaddressobjs)

#### Example

```typescript
const addressObjs = await signer.getAddressObjs(); // Outputs the array of Address objects
```

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:74](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L74)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`Signer`](ccc.Class.Signer.md).[`getAddresses`](ccc.Class.Signer.md#getaddresses)

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

[`Signer`](ccc.Class.Signer.md).[`getBalance`](ccc.Class.Signer.md#getbalance)

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

[`Signer`](ccc.Class.Signer.md).[`getIdentity`](ccc.Class.Signer.md#getidentity)

#### Source

[signer/signer/index.ts:117](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L117)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address for the script.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Overrides

[`Signer`](ccc.Class.Signer.md).[`getInternalAddress`](ccc.Class.Signer.md#getinternaladdress)

#### Example

```typescript
const internalAddress = await signer.getInternalAddress(); // Outputs the internal address
```

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:59](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L59)

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

[`Signer`](ccc.Class.Signer.md).[`getRecommendedAddress`](ccc.Class.Signer.md#getrecommendedaddress)

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

[`Signer`](ccc.Class.Signer.md).[`getRecommendedAddressObj`](ccc.Class.Signer.md#getrecommendedaddressobj)

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

[`Signer`](ccc.Class.Signer.md).[`isConnected`](ccc.Class.Signer.md#isconnected)

#### Source

[signer/ckb/signerCkbScriptReadonly.ts:45](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/ckb/signerCkbScriptReadonly.ts#L45)

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

[`Signer`](ccc.Class.Signer.md).[`prepareTransaction`](ccc.Class.Signer.md#preparetransaction)

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

[`Signer`](ccc.Class.Signer.md).[`replaceClient`](ccc.Class.Signer.md#replaceclient)

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

[`Signer`](ccc.Class.Signer.md).[`sendTransaction`](ccc.Class.Signer.md#sendtransaction)

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

[`Signer`](ccc.Class.Signer.md).[`signMessage`](ccc.Class.Signer.md#signmessage)

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

[`Signer`](ccc.Class.Signer.md).[`signMessageRaw`](ccc.Class.Signer.md#signmessageraw)

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

[`Signer`](ccc.Class.Signer.md).[`signOnlyTransaction`](ccc.Class.Signer.md#signonlytransaction)

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

[`Signer`](ccc.Class.Signer.md).[`signTransaction`](ccc.Class.Signer.md#signtransaction)

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

[`Signer`](ccc.Class.Signer.md).[`verifyMessage`](ccc.Class.Signer.md#verifymessage)

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

[`Signer`](ccc.Class.Signer.md).[`verifyMessageRaw`](ccc.Class.Signer.md#verifymessageraw)

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

[`Signer`](ccc.Class.Signer.md).[`verifyMessage`](ccc.Class.Signer.md#verifymessage-1)

#### Source

[signer/signer/index.ts:49](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L49)
