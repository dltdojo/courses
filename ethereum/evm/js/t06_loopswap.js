const helper = require('./helper')
// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md
var codeObj = { name: 'SWAP', code: '6000355b6001900380600357', data: '0000000000000000000000000000000000000000000000000000000000000003' }
helper.runCode(codeObj)

