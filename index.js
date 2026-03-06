const { load } = require('uniswap-v2-loader')

module.exports = (params = {}) => load({
    factory: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    filename: require('path').join(__dirname, 'dump.csv'),
    ...params
})