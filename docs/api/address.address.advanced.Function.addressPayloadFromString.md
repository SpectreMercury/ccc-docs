[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [address/address.advanced](address.address.advanced.md) / addressPayloadFromString

# Function: addressPayloadFromString()

> **addressPayloadFromString**(`address`): `object`

Parses an address string into an address information object.

## Parameters

• **address**: `string`

The address string to parse.

## Returns

`object`

An object containing the address prefix, address format, and payload array.

### format

> **format**: [`AddressFormat`](address.address.advanced.Enumeration.AddressFormat.md)

### payload

> **payload**: `number`[]

### prefix

> **prefix**: `string`

## Throws

Will throw an error if the address format is unknown.

## Example

```typescript
const addressInfo = addressPayloadFromString("ckt1112139193129");
console.log(addressInfo.prefix); // Outputs the address prefix
console.log(addressInfo.format); // Outputs the address format
console.log(addressInfo.payload); // Outputs the payload array
```

## Source

[address/address.advanced.ts:24](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/address/address.advanced.ts#L24)
