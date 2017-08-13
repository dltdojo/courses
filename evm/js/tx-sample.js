// https://github.com/ethereumjs/ethereumjs-vm/
// https://github.com/ethereumjs/ethereumjs-vm/tree/master/examples/run-transactions-simple
// VM has a lot of consensus breaking bugs 🐞 · Issue #167 · ethereumjs/ethereumjs-vm https://github.com/ethereumjs/ethereumjs-vm/issues/167
var VM = require('ethereumjs-vm')

//create a new VM instance
var vm = new VM()
/*
// https://ethereum.github.io/browser-solidity/
contract T05Get2Functions {
    function getMul(uint a) constant returns (uint) {return a*5;}
    function getAdd(uint a) constant returns (uint) {return a+5;}
}
*/
var code = '6060604052341561000f57600080fd5b5b60f78061001e6000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680634322b73b1460475780635f2f83ba14607b575b600080fd5b3415605157600080fd5b6065600480803590602001909190505060af565b6040518082815260200191505060405180910390f35b3415608557600080fd5b6099600480803590602001909190505060bd565b6040518082815260200191505060405180910390f35b60006005820190505b919050565b60006005820290505b9190505600a165627a7a723058206073e465a929edca5074df569bd4b8cf65bb7848de2e09751481f0e9bb70d2150029'

vm.on('step', function (data) {
  console.log(data.opcode.name)
})

vm.runCode({
  code: Buffer.from(code, 'hex'),
  gasLimit: Buffer.from('ffffffff', 'hex')
}, function (err, results) {
  console.log('returned: ' + results.return.toString('hex'))
  console.log('gasUsed: ' + results.gasUsed.toString())
  console.log(err)
})