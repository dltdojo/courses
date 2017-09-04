/*
$ docker-compose exec gethdev bash
bash-4.3# cd /opt/ddj/nmount
bash-4.3# node t410.js
*/

var Web3 = require('web3')
var web3 = new Web3()
//
// CHANGE THE PROVIDER
// geth dev mode gethdev:8545
// testrcp port ethnode:8545
// 
web3.setProvider(new web3.providers.HttpProvider("http://testrpc:8545"))
// web3.setProvider(new web3.providers.HttpProvider("http://gethdev:8545"))

var lastContractAddress;
var lastContractTransactionHash;
var deployAccount;

function getContract() {
    var browser_token_sol_footokenContract = web3.eth.contract([{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "INITIAL_SUPPLY", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "balance", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }]);
    return browser_token_sol_footokenContract;
}

function deployNewFooToken() {
    deployAccount = web3.eth.accounts[0]
    var browser_token_sol_footokenContract = getContract()
    var browser_token_sol_footoken = browser_token_sol_footokenContract.new(
        {
            from: deployAccount,
            data: '0x6060604052341561000f57600080fd5b5b6871d75ab9b9205000006000819055506871d75ab9b920500000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b61118c8061007e6000396000f300606060405236156100b8576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bd578063095ea7b31461014c57806318160ddd146101a657806323b872dd146101cf5780632ff2e9dc14610248578063313ce56714610271578063661884631461029a57806370a08231146102f457806395d89b4114610341578063a9059cbb146103d0578063d73dd6231461042a578063dd62ed3e14610484575b600080fd5b34156100c857600080fd5b6100d06104f0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101115780820151818401525b6020810190506100f5565b50505050905090810190601f16801561013e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015757600080fd5b61018c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610529565b604051808215151515815260200191505060405180910390f35b34156101b157600080fd5b6101b96106b1565b6040518082815260200191505060405180910390f35b34156101da57600080fd5b61022e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106b7565b604051808215151515815260200191505060405180910390f35b341561025357600080fd5b61025b6109a4565b6040518082815260200191505060405180910390f35b341561027c57600080fd5b6102846109b1565b6040518082815260200191505060405180910390f35b34156102a557600080fd5b6102da600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109b6565b604051808215151515815260200191505060405180910390f35b34156102ff57600080fd5b61032b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c48565b6040518082815260200191505060405180910390f35b341561034c57600080fd5b610354610c92565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103955780820151818401525b602081019050610379565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103db57600080fd5b610410600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ccb565b604051808215151515815260200191505060405180910390f35b341561043557600080fd5b61046a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ea2565b604051808215151515815260200191505060405180910390f35b341561048f57600080fd5b6104da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061109f565b6040518082815260200191505060405180910390f35b6040805190810160405280600881526020017f466f6f546f6b656e00000000000000000000000000000000000000000000000081525081565b6000808214806105b557506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b15156105c057600080fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a3600190505b92915050565b60005481565b600080600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106f657600080fd5b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506107c783600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461112790919063ffffffff16565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061085c83600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114190919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108b2838261112790919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3600191505b509392505050565b6871d75ab9b92050000081565b601281565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ac7576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b5b565b610ada838261112790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505b5092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b6040805190810160405280600381526020017f464f54000000000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d0857600080fd5b610d5a82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461112790919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610def82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114190919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b6000610f3382600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600190505b92915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b92915050565b600082821115151561113557fe5b81830390505b92915050565b600080828401905083811015151561115557fe5b8091505b50929150505600a165627a7a72305820ee36c58905fa9bd52f782e236cb7271a9653323003d00098d3b9e55ff6cf421f0029',
            gas: '4689373'
        }, function (e, contract) {
            console.log(e, contract);
            if (typeof contract.address !== 'undefined') {
                console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
                lastContractAddress = contract.address
                lastContractTransactionHash = contract.transactionHash
            }
        })
    return browser_token_sol_footoken;
}

function getBalanceOf(contractAddress, accountAddress, cb) {
    // instantiate by address
    // var contractInstance = MyContract.at(address);
    var footoken = getContract().at(contractAddress)
    footoken.balanceOf(accountAddress, cb);
}

function transfer(contractAddress, toAccount, amount, cb) {
    var footoken = getContract().at(contractAddress)
    // Event https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/BasicToken.sol
    // https://github.com/ethereum/wiki/wiki/JavaScript-API#contract-events
    footoken.Transfer(function (error, result) {
        // Browser - Console - Wait..
        console.log(error, result);
    })
    footoken.transfer(toAccount, amount, { from: deployAccount }, cb)
}

function ethAccounts() {
    // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethaccounts
    console.log("sync", web3.eth.accounts)
    web3.eth.getAccounts(function (err, result) {
        console.log("aync", err, result)
    })
}


function testGetBalanceOfDeployAccount() {
    getBalanceOf(lastContractAddress, deployAccount, function (err, result) {
        console.log('=====> testGetBalanceOfAccount0')
        console.log(err, result)
    })
}


function testTransferToken() {
    transfer(lastContractAddress, web3.eth.accounts[2], 19998888, function (err, result) {
        console.log(err, result);
    })
}

function testGetBalanceOfAccount2() {
    getBalanceOf(lastContractAddress, web3.eth.accounts[2], function (err, result) {
        console.log('=====> testGetBalanceOfAccount2', web3.eth.accounts[2])
        console.log(err, result)
    })
}

setTimeout(ethAccounts, 1000)

setTimeout(deployNewFooToken, 2000)

setTimeout(testGetBalanceOfDeployAccount, 8000)

setTimeout(testTransferToken, 12000)

setTimeout(testGetBalanceOfAccount2, 16000)

