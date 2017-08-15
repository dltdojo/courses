const helper = require('./helper')
// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md
// https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md#contracts

var codes = [
  { name: '5 4 ADD', code: '60056004016000', data: '' },
  { name: 'ADD RETURN', code: '60056004016000526001601ff3', data: '' },
  { name: 'PUSH2', code: '610101610102016000', data: '' },
  { name: 'CALLDATALOAD', code: '600035602035016000', data: '00000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000000004' },
  { name: 'loop', code: '6000356000525b600160005103600052600051600657', data: '0000000000000000000000000000000000000000000000000000000000000005' },
  { name: 'SWAP', code: '6000355b6001900380600357', data: '0000000000000000000000000000000000000000000000000000000000000003' },
  { name: 'deploy-code 5+4 contract', code: '600580600b6000396000f36005600401', data: '' },
  // SimpleGet https://github.com/ethereumjs/ethereumjs-vm/issues/128
  { name: 'SimpleGet Contract', code: '60606040526101c76000553415601157fe5b5b608f806100206000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680633c6bb43614603a575bfe5b3415604157fe5b6047605d565b6040518082815260200191505060405180910390f35b600054815600a165627a7a7230582020e95b37b367992e3e2cedd2faa7d85b517bab7f4a0108a81ade0eafe1ac62930029', data: '' }
]

codes.forEach((v) => {
  helper.runCode(v)
})
