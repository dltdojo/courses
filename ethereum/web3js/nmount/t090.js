var Web3 = require('web3')
var web3 = new Web3()
//
// CHANGE THE PROVIDER
// geth dev mode gethdev:8545
// testrcp port ethnode:8545
// 
web3.setProvider(new web3.providers.HttpProvider("http://ethnode:8545"))
// web3.setProvider(new web3.providers.HttpProvider("http://gethdev:8545"))
// ABI
var coinContract = web3.eth.contract([{ "constant": true, "inputs": [], "name": "minter", "outputs": [{ "name": "", "type": "address" }], "payable": false, "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "balances", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "type": "function" }, { "constant": false, "inputs": [{ "name": "receiver", "type": "address" }, { "name": "amount", "type": "uint256" }], "name": "send", "outputs": [], "payable": false, "type": "function" }, { "inputs": [], "payable": false, "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "from", "type": "address" }, { "indexed": false, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Sent", "type": "event" }]);
//
// CHANGE THE TWO ADDRESSES FIRST
// 
var addressContract = "0xc215b88908593404d6ec7d56cf5a54244e084441"
var addressUser = "0x21fb09ff4db0873ed47e94cde074883837d27fec"
var coin = coinContract.at(addressContract)

function ethAccounts() {
    // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethaccounts
    console.log("sync", web3.eth.accounts)
    web3.eth.getAccounts(function (err, result) {
        console.log("aync", err, result)
    })
}

function balances() {
    // https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-methods
    console.log('balance: ' + coin.balances(addressUser).toNumber())
}

function mint() {
    // https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-methods
    // param1, param2, {value: 200, gas: 2000}, function(err, result){ ... }
    coin.mint(addressUser, 100, { value: 0, from: addressUser }, function (err, result) {
        console.log(err, result);
        lastMintTxHash = result;
    })
}

function send() {
    coin.send("0xdeed", 10, { value: 0, from: addressUser }, function (err, result) {
        console.log(err, result);
    })
}

function getTransactionReceipt() {
    // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransactionreceipt
    var receipt = web3.eth.getTransactionReceipt(lastMintTxHash)
    console.log(receipt)
}

function eventWatch() {
    // event Sent(address from, address to, uint amount); 
    var event = coin.Sent();
    event.watch(function (error, result) {
        if (!error) {
            console.log("Coin transfer: " + result.args.amount +
                " coins were sent from " + result.args.from +
                " to " + result.args.to + ".");
            console.log("Balances now:\n" +
                "Sender: " + coin.balances.call(result.args.from) +
                ", Receiver: " + coin.balances.call(result.args.to));
        }
    })

}

ethAccounts()
setTimeout(balances, 1000);
setTimeout(mint, 2000);
setTimeout(eventWatch, 3000);
setTimeout(getTransactionReceipt, 10000);
setTimeout(balances, 11000);
setTimeout(send, 12000);
// send someone in remix to trigger eventWath() 
