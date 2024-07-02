**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / SignerCkbScriptReadonly

# Class: SignerCkbScriptReadonly

A class extending Signer that provides read-only access to a CKB script.
This class does not support signing operations.

## Extends

- `Signer`

## Constructors

### new SignerCkbScriptReadonly()

> **new SignerCkbScriptReadonly**(`client`, `script`): `SignerCkbScriptReadonly`

Creates an instance of SignerCkbScriptReadonly.

#### Parameters

• **client**: `Client`

The client instance used for communication.

• **script**: `ScriptLike`

The script associated with the signer.

#### Returns

`SignerCkbScriptReadonly`

#### Overrides

`Signer`.`constructor`

#### Source

signer/ckb/signerCkbScriptReadonly.ts:27

## Properties

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`Signer`.`client_`

#### Source

signer/signer/index.ts:40

***

### script

> `private` `readonly` **script**: `Script`

#### Source

signer/ckb/signerCkbScriptReadonly.ts:19

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

signer/ckb/signerCkbScriptReadonly.ts:15

***

### type

> `get` **type**(): `SignerType`

#### Returns

`SignerType`

#### Source

signer/ckb/signerCkbScriptReadonly.ts:11

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

`Signer`.`connect`

#### Source

signer/ckb/signerCkbScriptReadonly.ts:38

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

`Signer`.`disconnect`

#### Source

signer/signer/index.ts:96

***

### getAddressObjs()

> **getAddressObjs**(): `Promise`\<`Address`[]\>

Gets an array of Address objects representing the script address.

#### Returns

`Promise`\<`Address`[]\>

A promise that resolves to an array of Address objects.

#### Overrides

`Signer`.`getAddressObjs`

#### Example

```typescript
const addressObjs = await signer.getAddressObjs(); // Outputs the array of Address objects
```

#### Source

signer/ckb/signerCkbScriptReadonly.ts:74

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

`Signer`.`getAddresses`

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

`Signer`.`getBalance`

#### Source

signer/signer/index.ts:164

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity for verifying signature, usually it's address

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

`Signer`.`getIdentity`

#### Source

signer/signer/index.ts:117

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address for the script.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Overrides

`Signer`.`getInternalAddress`

#### Example

```typescript
const internalAddress = await signer.getInternalAddress(); // Outputs the internal address
```

#### Source

signer/ckb/signerCkbScriptReadonly.ts:59

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

`Signer`.`getRecommendedAddress`

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

`Signer`.`getRecommendedAddressObj`

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

`Signer`.`isConnected`

#### Source

signer/ckb/signerCkbScriptReadonly.ts:45

***

### prepareTransaction()

> **prepareTransaction**(`_`): `Promise`\<`Transaction`\>

prepare a transaction before signing. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: `TransactionLike`

The transaction to prepare, represented as a TransactionLike object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to the prepared Transaction object.

#### Inherited from

`Signer`.`prepareTransaction`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:262

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`Signer`.`replaceClient`

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

`Signer`.`sendTransaction`

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

`Signer`.`signMessage`

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

`Signer`.`signMessageRaw`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:192

***

### signOnlyTransaction()

> **signOnlyTransaction**(`_`): `Promise`\<`Transaction`\>

Signs a transaction without preparing information for it. This method is not implemented and should be overridden by subclasses.

#### Parameters

• **\_**: `TransactionLike`

The transaction to sign, represented as a TransactionLike object.

#### Returns

`Promise`\<`Transaction`\>

A promise that resolves to the signed Transaction object.

#### Inherited from

`Signer`.`signOnlyTransaction`

#### Throws

Will throw an error if not implemented.

#### Source

signer/signer/index.ts:273

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

`Signer`.`signTransaction`

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

`Signer`.`verifyMessage`

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

`Signer`.`verifyMessageRaw`

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

`Signer`.`verifyMessage`

#### Source

signer/signer/index.ts:49
