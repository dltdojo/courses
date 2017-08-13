const helper = require('./helper')
// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md
var codeObj = { name: 'loop', code: '6000356000525b600160005103600052600051600657', data: '0000000000000000000000000000000000000000000000000000000000000005' }
helper.runCode(codeObj)

