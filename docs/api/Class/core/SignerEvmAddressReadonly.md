[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / SignerEvmAddressReadonly

# Class: SignerEvmAddressReadonly

A class extending SignerEvm that provides read-only access to an EVM address.
This class does not support signing operations.

## Extends

- [`SignerEvm`](ccc.Class.SignerEvm.md)

## Constructors

### new SignerEvmAddressReadonly()

> **new SignerEvmAddressReadonly**(`client`, `address`): [`SignerEvmAddressReadonly`](ccc.Class.SignerEvmAddressReadonly.md)

Creates an instance of SignerEvmAddressReadonly.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

The client instance used for communication.

• **address**: [`BytesLike`](ccc.Type.BytesLike.md)

The EVM address associated with the signer.

#### Returns

[`SignerEvmAddressReadonly`](ccc.Class.SignerEvmAddressReadonly.md)

#### Overrides

[`SignerEvm`](ccc.Class.SignerEvm.md).[`constructor`](ccc.Class.SignerEvm.md#constructors)

#### Source

[signer/evm/signerEvmAddressReadonly.ts:18](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L18)

## Properties

### address

> `private` `readonly` **address**: \`0x$\{string\}\`

#### Source

[signer/evm/signerEvmAddressReadonly.ts:10](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L10)

***

### client\_

> `protected` **client\_**: [`Client`](ccc.Class.Client.md)

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`client_`](ccc.Class.SignerEvm.md#client_)

#### Source

[signer/signer/index.ts:40](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L40)

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

[signer/evm/signerEvm.ts:19](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L19)

***

### type

> `get` **type**(): [`SignerType`](ccc.Enumeration.SignerType.md)

#### Returns

[`SignerType`](ccc.Enumeration.SignerType.md)

#### Source

[signer/evm/signerEvm.ts:15](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L15)

## Methods

### \_getOmniLockEvmAddressObj()

> **\_getOmniLockEvmAddressObj**(`account`): `Promise`\<[`Address`](ccc.Class.Address.md)\>

#### Parameters

• **account**: `string`

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`_getOmniLockEvmAddressObj`](ccc.Class.SignerEvm.md#_getomnilockevmaddressobj)

#### Source

[signer/evm/signerEvm.ts:52](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L52)

***

### \_getOmniLockOldEvmAddressObj()

> **\_getOmniLockOldEvmAddressObj**(`account`): `Promise`\<[`Address`](ccc.Class.Address.md)\>

#### Parameters

• **account**: `string`

#### Returns

`Promise`\<[`Address`](ccc.Class.Address.md)\>

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`_getOmniLockOldEvmAddressObj`](ccc.Class.SignerEvm.md#_getomnilockoldevmaddressobj)

#### Source

[signer/evm/signerEvm.ts:60](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L60)

***

### \_signOmniLockScriptForTransaction()

> **\_signOmniLockScriptForTransaction**(`tx`, `script`, `messageTransformer`): `Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

#### Parameters

• **tx**: [`Transaction`](ccc.Class.Transaction.md)

• **script**: [`Script`](ccc.Class.Script.md)

• **messageTransformer**

#### Returns

`Promise`\<[`Transaction`](ccc.Class.Transaction.md)\>

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`_signOmniLockScriptForTransaction`](ccc.Class.SignerEvm.md#_signomnilockscriptfortransaction)

#### Source

[signer/evm/signerEvm.ts:111](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L111)

***

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

[`SignerEvm`](ccc.Class.SignerEvm.md).[`connect`](ccc.Class.SignerEvm.md#connect)

#### Example

```typescript
await signer.connect();
```

#### Source

[signer/evm/signerEvmAddressReadonly.ts:35](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L35)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`disconnect`](ccc.Class.SignerEvm.md#disconnect)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getAddressObjs`](ccc.Class.SignerEvm.md#getaddressobjs)

#### Source

[signer/evm/signerEvm.ts:44](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L44)

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getAddresses`](ccc.Class.SignerEvm.md#getaddresses)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getBalance`](ccc.Class.SignerEvm.md#getbalance)

#### Source

[signer/signer/index.ts:164](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L164)

***

### getEvmAccount()

> **getEvmAccount**(): `Promise`\<`string`\>

Gets the EVM account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the EVM account.

#### Overrides

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getEvmAccount`](ccc.Class.SignerEvm.md#getevmaccount)

#### Example

```typescript
const account = await signer.getEvmAccount(); // Outputs the EVM account
```

#### Source

[signer/evm/signerEvmAddressReadonly.ts:56](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L56)

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity for verifying signature, usually it's address

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getIdentity`](ccc.Class.SignerEvm.md#getidentity)

#### Source

[signer/signer/index.ts:117](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L117)

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the EVM account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getInternalAddress`](ccc.Class.SignerEvm.md#getinternaladdress)

#### Source

[signer/evm/signerEvm.ts:35](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L35)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getRecommendedAddress`](ccc.Class.SignerEvm.md#getrecommendedaddress)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`getRecommendedAddressObj`](ccc.Class.SignerEvm.md#getrecommendedaddressobj)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`isConnected`](ccc.Class.SignerEvm.md#isconnected)

#### Source

[signer/evm/signerEvmAddressReadonly.ts:42](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvmAddressReadonly.ts#L42)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`prepareTransaction`](ccc.Class.SignerEvm.md#preparetransaction)

#### Source

[signer/evm/signerEvm.ts:74](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L74)

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: [`Client`](ccc.Class.Client.md)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`SignerEvm`](ccc.Class.SignerEvm.md).[`replaceClient`](ccc.Class.SignerEvm.md#replaceclient)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`sendTransaction`](ccc.Class.SignerEvm.md#sendtransaction)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`signMessage`](ccc.Class.SignerEvm.md#signmessage)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`signMessageRaw`](ccc.Class.SignerEvm.md#signmessageraw)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`signOnlyTransaction`](ccc.Class.SignerEvm.md#signonlytransaction)

#### Source

[signer/evm/signerEvm.ts:89](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/evm/signerEvm.ts#L89)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`signTransaction`](ccc.Class.SignerEvm.md#signtransaction)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`verifyMessage`](ccc.Class.SignerEvm.md#verifymessage)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`verifyMessageRaw`](ccc.Class.SignerEvm.md#verifymessageraw)

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

[`SignerEvm`](ccc.Class.SignerEvm.md).[`verifyMessage`](ccc.Class.SignerEvm.md#verifymessage-1)

#### Source

[signer/signer/index.ts:49](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/core/src/signer/signer/index.ts#L49)
