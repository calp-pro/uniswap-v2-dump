# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;uniswap-v2-dump

<br>

Static set of addresses (uniswap-v2).<br>
New pairs updates happen every hour at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data:
- `dump_pairs.bin` 10 Mb+ 
- `dump_tokens.bin` 10 Mb+
- `dump_p2tt.bin` 3 Mb+

## Output format
`load` and subscribe` methods return collection of pools/pairs.
```js
[
    ...
    {
        id: 489817,
        pair: '0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9',
        token0: '0x489f27ede258d4c39b591e6188e95d2c90201cbb',
        token1: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
    },
    ...
]
```
where:
- `489817`
  * pair/pool index at factory contract
- `0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9`
  * VLBC/WETH AMM [contract](https://etherscan.io/address/0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9) address
- `0x489f27ede258d4c39b591e6188e95d2c90201cbb`
  * VLBC ERC-20 token [contract](https://etherscan.io/token/0x489f27ede258d4c39b591e6188e95d2c90201cbb) address
- `0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2`
  * WETH ERC-20 token [contract](https://etherscan.io/token/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2) address

## API
Same implementation as other Uniswap v2 based protocols.<br>
Base API reference: [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader?tab=readme-ov-file#api-reference).<br>
Predefined:
- `filename: "dump"
- `csv: false` (binary mode)
- `factory: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f"` (Uniswap v2 factory)

## Usage CLI/API
```bash
> node -e "require('uniswap-v2-dump').load().then(pairs => console.log(pairs.length))"
> 489817
```
