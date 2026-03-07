# <picture><source media="(prefers-color-scheme: dark)" srcset="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-dark.svg"><img alt="calp.pro icon" src="https://cdn.jsdelivr.net/npm/uniswap-v2-loader@5.0.1/logo-light.svg" height="32" align="absmiddle"></picture>&nbsp;&nbsp;uniswap-v2-dump

<br>

Static set of addresses (uniswap-v2).<br>
New pairs updates happen every hour at GitHub Action [update.yml](https://github.com/calp-pro/uniswap-v2-dump/actions/workflows/update.yml)<br>
via [uniswap-v2-loader](https://github.com/calp-pro/uniswap-v2-loader)

Data: `dump.csv` 64Mb+ 

CSV schema: `id,pair,token0,token1`

## Example
```
...
489817,0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9,0x489f27ede258d4c39b591e6188e95d2c90201cbb,0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
...
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
Predefined `filename` with value `dump.csv`.

## Usage CLI/API
```bash
> node -e "require('uniswap-v2-dump').load().then(pairs => console.log(pairs.length))"
> 489817
```
