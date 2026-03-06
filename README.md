# uniswap-v2-dump

Static set of addresses (uniswap-v2)

Data: `dump.csv` 64Mb+ 

CSV schema: `id,pair,token0,token1`

Example:
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
- `0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9`
  * WETH ERC-20 token [contract](https://etherscan.io/token/0x489f27ede258d4c39b591e6188e95d2c90201cbb?a=0xf8ee0dee743f3587a3b6d9cf0da666b7bf1999b9) address
- `0x489f27ede258d4c39b591e6188e95d2c90201cbb`
  * VLBC ERC-20 token [contract](https://etherscan.io/token/0x489f27ede258d4c39b591e6188e95d2c90201cbb?a=0x489f27ede258d4c39b591e6188e95d2c90201cbb) address
  
# Usage via API:
```bash
> node -e "require('uniswap-v2-dump').then(pairs => console.log(pairs.length))"
> 489817
```