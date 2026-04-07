const { describe, before, it } = require('node:test')
const assert = require('node:assert/strict')
const {load} = require('./index')

describe('uniswap-v2-dump', () => {

    it('Find pair addresses WBTC/WETH', () =>
        load().then(pairs =>
            assert.ok(
                pairs.some(_ =>
                    _.pair == '0xbb2b8038a1640196fbe3e38816f3e67cba72d940' &&
                    _.token0 == '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599' &&
                    _.token1 == '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
                )
            )
        )
    )

})
