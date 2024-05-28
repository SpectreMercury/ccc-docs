[**@ckb-ccc/core**](README.md) • **Docs**

***

[@ckb-ccc/core](README.md) / [ccc](Namespace.ccc.md) / getSignHashInfo

# Function: getSignHashInfo()

> **getSignHashInfo**(`txLike`, `scriptLike`): `Promise`\<`object` \| `undefined`\>

Computes the signing hash information for a given transaction and script.

## Parameters

• **txLike**: [`TransactionLike`](ccc.Type.TransactionLike.md)

The transaction to sign, represented as a TransactionLike object.

• **scriptLike**: [`ScriptLike`](ccc.Type.ScriptLike.md)

The script associated with the transaction, represented as a ScriptLike object.

## Returns

`Promise`\<`object` \| `undefined`\>

A promise that resolves to an object containing the signing message and the witness position,
         or undefined if no matching input is found.

## Example

```typescript
const signHashInfo = await getSignHashInfo(transactionLike, scriptLike);
if (signHashInfo) {
  console.log(signHashInfo.message); // Outputs the signing message
  console.log(signHashInfo.position); // Outputs the witness position
}
```

## Source

[signer/helpers.ts:22](https://github.com/SpectreMercury/ccc/blob/1b34760fdeb60ebebc0a7e641c12ef11dff1e7d0/packages/core/src/signer/helpers.ts#L22)
