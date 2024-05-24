[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [address/address.advanced](address.address.advanced.md) / addressFromPayload

# Function: addressFromPayload()

> **addressFromPayload**(`prefix`, `format`, `payload`, `client`): `Promise`\<[`AddressLike`](address.Type.AddressLike.md)\>

Converts an address payload into an address-like object.

## Parameters

• **prefix**: `string`

The address prefix.

• **format**: [`AddressFormat`](address.address.advanced.Enumeration.AddressFormat.md)

The format of the address, as defined by the AddressFormat enum.

• **payload**: `number`[]

The payload array containing the address data.

• **client**: [`Client`](client.client.Interface.Client.md)

The client instance used to fetch known scripts.

## Returns

`Promise`\<[`AddressLike`](address.Type.AddressLike.md)\>

A promise that resolves to an AddressLike object.

## Throws

Will throw an error if the payload length is insufficient or if the script type is unknown.

## Example

```typescript
const address = await addressFromPayload("ckt", AddressFormat.Full, [/* payload data */], client);
console.log(address.script); // Outputs the script object
console.log(address.prefix); // Outputs the address prefix
```

## Source

[address/address.advanced.ts:76](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/address.advanced.ts#L76)
