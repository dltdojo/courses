const helper = require('./helper')
// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md
var codeObj = { name: 'deploy-code 5+4 contract', code: '600580600b6000396000f36005600401', data: '' }
helper.runCode(codeObj)

