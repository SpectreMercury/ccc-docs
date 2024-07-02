**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / Signer

# Class: `abstract` Signer

An abstract class representing a generic signer.
This class provides methods to connect, get addresses, and sign transactions.

## Extended by

- `SignerBtc`
- `SignerCkbScriptReadonly`
- `SignerDummy`
- `SignerEvm`

## Constructors

### new Signer()

> **new Signer**(`client_`): `Signer`

#### Parameters

• **client\_**: `Client`

#### Returns

`Signer`

#### Source

signer/signer/index.ts:40

## Properties

### client\_

> `protected` **client\_**: `Client`

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

> `get` `abstract` **signType**(): `SignerSignType`

#### Returns

`SignerSignType`

#### Source

signer/signer/index.ts:43

***

### type

> `get` `abstract` **type**(): `SignerType`

#### Returns

`SignerType`

#### Source

signer/signer/index.ts:42

## Methods

### connect()

> `abstract` **connect**(): `Promise`\<`void`\>

Connects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Source

signer/signer/index.ts:89

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Source

signer/signer/index.ts:96

***

### getAddressObjs()

> `abstract` **getAddressObjs**(): `Promise`\<`Address`[]\>

Gets an array of Address objects associated with the signer.

#### Returns

`Promise`\<`Address`[]\>

A promise that resolves to an array of Address objects.

#### Source

signer/signer/index.ts:126

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Source

signer/signer/index.ts:153

***

### getBalance()

> **getBalance**(): `Promise`\<`bigint`\>

Gets balance of all addresses

#### Returns

`Promise`\<`bigint`\>

A promise that resolves to the balance

#### Source

signer/signer/index.ts:164

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity for verifying signature, usually it's address

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Source

signer/signer/index.ts:117

***

### getInternalAddress()

> `abstract` **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Source

signer/signer/index.ts:110

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

#### Source

signer/signer/index.ts:134

***

### isConnected()

> `abstract` **isConnected**(): `Promise`\<`boolean`\>

Check if the signer is connected.

#### Returns

`Promise`\<`boolean`\>

A promise that resolves the connection status.

#### Source

signer/signer/index.ts:103

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

#### Source

signer/signer/index.ts:49
