# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;uniswap-v2-dump

<br>

Preloaded dump of addresses (uniswap-v2).<br>
Zero RPC calls!<br>
Offline mode!<br>

Data update **every hour** at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data:
- `dump_pairs.bin` 10.4 Mb 
- `dump_tokens.bin` 10.2 Mb
- `dump_p2tt.bin` 3.1 Mb

## Output format
`load` and `subscribe` methods return collection of pools/pairs.
```js
[
    ...
    {
        id: 519406,
        pair: '0x5761a547a659c46f9aabad0f58ca2498d70c3f20',
        token0: '0xaf1bb9fa12769232866a336fd3e17e8f820de166',
        token1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    },
    ...
]
```
where:
- `519406`
  * pair/pool index at factory contract
- `0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9`
  * Uniswap V2 pool to exchange between YOMOGI and WETH [contract](https://etherscan.io/address/0x5761a547a659c46f9aabad0f58ca2498d70c3f20) address
- `0xaf1bb9fa12769232866a336fd3e17e8f820de166`
  * Yomogi Coin (YOMOGI) token [contract](https://etherscan.io/token/0xaf1bb9fa12769232866a336fd3e17e8f820de166) address
- `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`
  * WETH token [contract](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined:
- `filename: "dump"`
- `csv: false` (binary mode)
- `factory: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"` (Uniswap v2 factory)

## Usage CLI/API
```bash
> node -e "require('uniswap-v2-dump').load({workers:0}).then(pairs => console.log(pairs.length))"
> 519407
```
