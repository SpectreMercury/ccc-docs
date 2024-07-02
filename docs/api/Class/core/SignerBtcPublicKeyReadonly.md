**@ckb-ccc/core** • **Docs**

***

@ckb-ccc/core / ccc / SignerBtcPublicKeyReadonly

# Class: SignerBtcPublicKeyReadonly

A class extending SignerBtc that provides read-only access to a Bitcoin public key and account.
This class does not support signing operations.

## Extends

- `SignerBtc`

## Constructors

### new SignerBtcPublicKeyReadonly()

> **new SignerBtcPublicKeyReadonly**(`client`, `account`, `publicKey`): `SignerBtcPublicKeyReadonly`

Creates an instance of SignerBtcPublicKeyReadonly.

#### Parameters

• **client**: `Client`

The client instance used for communication.

• **account**: `string`

The Bitcoin account associated with the signer.

• **publicKey**: `BytesLike`

The public key associated with the signer.

#### Returns

`SignerBtcPublicKeyReadonly`

#### Overrides

`SignerBtc`.`constructor`

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:19

## Properties

### account

> `private` `readonly` **account**: `string`

The Bitcoin account associated with the signer.

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:21

***

### client\_

> `protected` **client\_**: `Client`

#### Inherited from

`SignerBtc`.`client_`

#### Source

signer/signer/index.ts:40

***

### publicKey

> `private` `readonly` **publicKey**: \`0x$\{string\}\`

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:10

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

signer/btc/signerBtc.ts:21

***

### type

> `get` **type**(): `SignerType`

#### Returns

`SignerType`

#### Source

signer/btc/signerBtc.ts:17

## Methods

### connect()

> **connect**(): `Promise`\<`void`\>

Connects to the client. This implementation does nothing as the class is read-only.

#### Returns

`Promise`\<`void`\>

A promise that resolves when the connection is complete.

#### Overrides

`SignerBtc`.`connect`

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:34

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

Disconnects to the signer.

#### Returns

`Promise`\<`void`\>

A promise that resolves when disconnected.

#### Inherited from

`SignerBtc`.`disconnect`

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

`SignerBtc`.`getAddressObjs`

#### Source

signer/btc/signerBtc.ts:62

***

### getAddresses()

> **getAddresses**(): `Promise`\<`string`[]\>

Gets an array of addresses associated with the signer as strings.

#### Returns

`Promise`\<`string`[]\>

A promise that resolves to an array of addresses as strings.

#### Inherited from

`SignerBtc`.`getAddresses`

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

`SignerBtc`.`getBalance`

#### Source

signer/signer/index.ts:164

***

### getBtcAccount()

> **getBtcAccount**(): `Promise`\<`string`\>

Gets the Bitcoin account associated with the signer.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the Bitcoin account.

#### Overrides

`SignerBtc`.`getBtcAccount`

#### Example

```typescript
const account = await signer.getBtcAccount(); // Outputs the Bitcoin account
```

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:55

***

### getBtcPublicKey()

> **getBtcPublicKey**(): `Promise`\<\`0x$\{string\}\`\>

Gets the Bitcoin public key associated with the signer.

#### Returns

`Promise`\<\`0x$\{string\}\`\>

A promise that resolves to a Hex string representing the Bitcoin public key.

#### Overrides

`SignerBtc`.`getBtcPublicKey`

#### Example

```typescript
const publicKey = await signer.getBtcPublicKey(); // Outputs the Bitcoin public key
```

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:69

***

### getIdentity()

> **getIdentity**(): `Promise`\<`string`\>

Gets the identity, which is the Bitcoin public key in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the identity

#### Inherited from

`SignerBtc`.`getIdentity`

#### Source

signer/btc/signerBtc.ts:53

***

### getInternalAddress()

> **getInternalAddress**(): `Promise`\<`string`\>

Gets the internal address, which is the Bitcoin account in this case.

#### Returns

`Promise`\<`string`\>

A promise that resolves to a string representing the internal address.

#### Inherited from

`SignerBtc`.`getInternalAddress`

#### Source

signer/btc/signerBtc.ts:44

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

`SignerBtc`.`getRecommendedAddress`

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

`SignerBtc`.`getRecommendedAddressObj`

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

`SignerBtc`.`isConnected`

#### Source

signer/btc/signerBtcPublicKeyReadonly.ts:41

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

`SignerBtc`.`prepareTransaction`

#### Source

signer/btc/signerBtc.ts:81

***

### replaceClient()

> **replaceClient**(`client`): `Promise`\<`void`\>

Replace the current client.

#### Parameters

• **client**: `Client`

#### Returns

`Promise`\<`void`\>

#### Inherited from

`SignerBtc`.`replaceClient`

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

`SignerBtc`.`sendTransaction`

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

`SignerBtc`.`signMessage`

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

`SignerBtc`.`signMessageRaw`

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

`SignerBtc`.`signOnlyTransaction`

#### Source

signer/btc/signerBtc.ts:94

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

`SignerBtc`.`signTransaction`

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

`SignerBtc`.`verifyMessage`

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

`SignerBtc`.`verifyMessageRaw`

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

`SignerBtc`.`verifyMessage`

#### Source

signer/signer/index.ts:49
