**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / SignerEvmAddressReadonly

# Class: SignerEvmAddressReadonly

A class extending SignerEvm that provides read-only access to an EVM address.
This class does not support signing operations.

## Extends

- `SignerEvm`

## Constructors

### new SignerEvmAddressReadonly()

> **new SignerEvmAddressReadonly**(`client`, `address`): `SignerEvmAddressReadonly`

Creates an instance of SignerEvmAddressReadonly.

#### Parameters

• **client**: `Client`

The client instance used for communication.

• **address**: `BytesLike`

The EVM address associated with the signer.

#### Returns

`SignerEvmAddressReadonly`

#### Overrides

`SignerEvm`.`constructor`

#### Source

signer/evm/signerEvmAddressReadonly.ts:18

## Properties

### address

> `private` `readonly` **address**: \`0x$\{string\}\`

#### Source

signer/evm/signerEvmAddressReadonly.ts:10

***

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`SignerEvm`.`client_`

#### Source

signer/signer/index.ts:40

## Accessors

### client

> `get` **client**(): `Client`

#### Returns

`Client`

#### Source

signer/signer/index.ts:45

***

### signType

> `get` **signType**(): `SignerSignType`

#### Returns

`SignerSignType`

#### Source

signer/evm/signerEvm.ts:19

***

### type

> `get` **type**(): `SignerType`

#### Returns

`SignerType`

#### Source

signer/evm/signerEvm.ts:15

## Methods

### \_getOmniLockEvmAddressObj()

> **\_getOmniLockEvmAddressObj**(`account`): `Promise`\<`Address`\>

#### Parameters

• **account**: `string`

#### Returns

`Promise`\<`Address`\>

#### Inherited from

`SignerEvm`.`_getOmniLockEvmAddressObj`

#### Source

signer/evm/signerEvm.ts:52

***

### \_getOmniLockOldEvmAddressObj()

> **\_getOmniLockOldEvmAddressObj**(`account`): `Promise`\<`Address`\>

#### Parameters

• **account**: `string`

#### Returns

`Promise`\<`Address`\>

#### Inherited from

`SignerEvm`.`_getOmniLockOldEvmAddressObj`

#### Source

signer/evm/signerEvm.ts:60

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

`SignerEvm`.`_signOmniLockScriptForTransaction`

#### Source

signer/evm/signerEvm.ts:111

***

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

`SignerEvm`.`connect`

#### Example

```typescript
await signer.connect();
```

#### Source

signer/evm/signerEvmAddressReadonly.ts:35

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

`SignerEvm`.`disconnect`

#### Source

signer/signer/index.ts:96

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<`Address`[]\>

Gets an array of Address objects representing the known script addresses for the signer.

#### Returns

`Promise`\<`Address`[]\>

A promise that resolves to an array of Address objects.

#### Inherited from

`SignerEvm`.`getAddressObjs`

#### Source

signer/evm/signerEvm.ts:44

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

`SignerEvm`.`getAddresses`

#### Source

signer/signer/index.ts:153

***

### getBalance()

> **getBalance**(): `Promise`\<`bigint`\>

Gets balance of all addresses

#### Returns

`Promise`\<`bigint`\>

A promise that resolves to the balance

#### Inherited from

`SignerEvm`.`getBalance`

#### Source

signer/signer/index.ts:164

***

### getEvmAccount()

> **getEvmAccount**(): `Promise`\<`string`\>

Gets the EVM account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the EVM account.

#### Overrides

`SignerEvm`.`getEvmAccount`

#### Example

```typescript
const account = await signer.getEvmAccount(); // Outputs the EVM account
```

#### Source

signer/evm/signerEvmAddressReadonly.ts:56

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity for verifying signature, usually it's address

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

`SignerEvm`.`getIdentity`

#### Source

signer/signer/index.ts:117

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the EVM account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

`SignerEvm`.`getInternalAddress`

#### Source

signer/evm/signerEvm.ts:35

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

`SignerEvm`.`getRecommendedAddress`

#### Source

signer/signer/index.ts:144

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

`SignerEvm`.`getRecommendedAddressObj`

#### Source

signer/signer/index.ts:134

***

### isConnected()

> **isConnected**(): `Promise`\<`boolean`\>

Check if the signer is connected.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves the connection status.

#### Overrides

`SignerEvm`.`isConnected`

#### Source

signer/evm/signerEvmAddressReadonly.ts:42

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

`SignerEvm`.`prepareTransaction`

#### Source

signer/evm/signerEvm.ts:74

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`SignerEvm`.`replaceClient`

#### Source

signer/signer/index.ts:80

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

`SignerEvm`.`sendTransaction`

#### Source

signer/signer/index.ts:240

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

`SignerEvm`.`signMessage`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:177

***

### signMessageRaw()

> **signMessageRaw**(`_`): `Promise`\<`string`\>

Signs a message and returns signature only. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: `BytesLike`

The message to sign, as a string or BytesLike object.

#### Returns

`Promise`\<`string`\>

A promise that resolves to the signature as a string.

#### Inherited from

`SignerEvm`.`signMessageRaw`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:192

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

`SignerEvm`.`signOnlyTransaction`

#### Source

signer/evm/signerEvm.ts:89

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

`SignerEvm`.`signTransaction`

#### Source

signer/signer/index.ts:250

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

`SignerEvm`.`verifyMessage`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:204

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

`SignerEvm`.`verifyMessageRaw`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:230

***

### verifyMessage()

> `static` **verifyMessage**(`message`, `signature`): `Promise`\<`boolean`\>

#### Parameters

• **message**: `BytesLike`

• **signature**: `Signature`

#### Returns

`Promise`\<`boolean`\>

#### Inherited from

`SignerEvm`.`verifyMessage`

#### Source

signer/signer/index.ts:49
