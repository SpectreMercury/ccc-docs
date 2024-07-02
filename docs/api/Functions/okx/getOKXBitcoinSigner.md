[**@ckb-ccc/okx**](README.md) • **Docs**

***

[@ckb-ccc/okx](README.md) / [Okx](Namespace.Okx.md) / getOKXBitcoinSigner

# Function: getOKXBitcoinSigner()

> **getOKXBitcoinSigner**(`client`): [`BitcoinSigner`](Okx.Class.BitcoinSigner.md) \| `undefined`

Retrieves the OKX Bitcoin signer if available.

## Parameters

• **client**: `Client`

The client instance.

## Returns

[`BitcoinSigner`](Okx.Class.BitcoinSigner.md) \| `undefined`

The BitcoinSigner instance if the OKX wallet is available, otherwise undefined.

## Source

[okx/src/signersFactory.ts:10](https://github.com/SpectreMercury/ccc/blob/df48adb02ef9cfbc211311f00ecef869462de5fa/packages/okx/src/signersFactory.ts#L10)
