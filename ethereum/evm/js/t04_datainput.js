const helper = require('./helper')
// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md
var codeObj = { name: 'CALLDATALOAD', code: '600035602035016000', 
  data: '00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000004' }
helper.runCode(codeObj)

