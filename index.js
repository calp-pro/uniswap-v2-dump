const loader = require('uniswap-v2-loader')
const dump = require('path').join(__dirname, 'dump')

module.exports.load = (params = {}) => loader.load({
    factory: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    filename: dump,
    csv: false,
    ...params
})

module.exports.subscribe = (callback, params = {}) => loader.subscribe(
    callback,
    {
        factory: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
        filename: dump,
        csv: false,
        ...params
    }
)