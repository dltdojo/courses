var Web3 = require('web3')
var web3 = new Web3()
//
// CHANGE THE PROVIDER
// geth dev mode gethdev:8545
// testrcp port ethnode:8545
// 
// web3.setProvider(new web3.providers.HttpProvider("http://ethnode:8545"))
web3.setProvider(new web3.providers.HttpProvider("http://gethdev:8545"))
// ABI
var coinContract = web3.eth.contract([{ "constant": true, "inputs": [], "name": "minter", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "send", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Sent", "type": "event" }]);
//
// CHANGE THE TWO ADDRESSES FIRST
// 
var addressUser = "0x9df0e4f6f22ed88ea35ac366a24b99783f4a5a39"
function deploy() {
    var coin = coinContract.new(
        {
            from: addressUser,
            data: '0x6060604052341561000f57600080fd5b5b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b5b610425806100616000396000f30060606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063075461721461005f57806327e235e3146100b457806340c10f1914610101578063d0679d3414610143575b600080fd5b341561006a57600080fd5b610072610185565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156100bf57600080fd5b6100eb600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506101aa565b6040518082815260200191505060405180910390f35b341561010c57600080fd5b610141600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506101c2565b005b341561014e57600080fd5b610183600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061026f565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090505481565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561021d5761026b565b80600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b5050565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156102bb576103f5565b80600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254039250508190555080600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055507f3990db2d31862302a685e8086b5755072a6e2b5b780af1ee81ece35ee3cd3345338383604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001828152602001935050505060405180910390a15b50505600a165627a7a72305820fefb44dc4669f03cc1a86ed7e116bdbfe4c6c44dc564e7ae1c1817d7d965cbfe0029',
            gas: '4689378'
        }, function (e, contract) {
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
            }
        })
}

deploy()

// 
// Contract mined! address: 0x715786740f0614b0975e916aa2d2d87bb6ca8066 transactionHash: 0x18a6b7abeea204a68ea86faf95e51036a26b1d1a9e65d5bfd02ba80000a2d492
// 