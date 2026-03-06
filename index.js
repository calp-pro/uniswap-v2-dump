const { load } = require('uniswap-v2-loader')
const fs = require('fs')

const dump = fs.readFileSync('dump.csv').toString().trim().split('\n')
console.log('dump.length', dump.length)

module.exports = (params = {}) => load({
    factory: '0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f',
    filename: 'dump.csv',
    ...params
})