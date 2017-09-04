### JavaScript Console

* https://github.com/ethereum/go-ethereum/wiki/JavaScript-Console

### Start the gethdev console

```
$ docker-compose up -d gethdev
$ docker-compose exec gethdev

bash-4.3# geth attach
Welcome to the Geth JavaScript console!

instance: Geth/v1.6.7-stable/linux-amd64/go1.9beta2
coinbase: 0x94006a47d576074d1ed4004379e294783c09095d
at block: 1027 (Mon, 04 Sep 2017 01:31:30 UTC)
 datadir: /root/.ethereum
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

```

### checkAllBalances()

```
function checkAllBalances() {
    var totalBal = 0;
    for (var acctNum in eth.accounts) {
        var acct = eth.accounts[acctNum];
        var acctBal = web3.fromWei(eth.getBalance(acct), "ether");
        totalBal += parseFloat(acctBal);
        console.log("  eth.accounts[" + acctNum + "]: \t" + acct + " \tbalance: " + acctBal + " ether");
    }
    console.log("  Total balance: " + totalBal + " ether");
}

```
result
```
> checkAllBalances()
  eth.accounts[0]:      0x94006a47d576074d1ed4004379e294783c09095d      balance: 5210 ether
  eth.accounts[1]:      0x9a39a815b632b954c22b9ce53837a45a091cf259      balance: 10 ether
  eth.accounts[2]:      0x48042635ba3766cb13f846e584e74d982e8103c9      balance: 0 ether
  eth.accounts[3]:      0x830fb53eb8323c104f5359cb19ae335f95e42926      balance: 0 ether
  eth.accounts[4]:      0x5b932babca02649b929aafb547a923abb3ee98b1      balance: 0 ether
  eth.accounts[5]:      0x51e69ab25e9d9508f26c4b2be1a9f0d68a77a7a8      balance: 0 ether
  eth.accounts[6]:      0xe98fca597b11ff85c35b767def21adb5a0d895b9      balance: 0 ether
  eth.accounts[7]:      0xb241a59c362b35c7eb4ea9dc0562a8d4273f48ae      balance: 0 ether
  eth.accounts[8]:      0xa60c96e8b5c867541bdf157b1ecd1779fa4d32c9      balance: 0 ether
  Total balance: 5220 ether
```

### sendEther()

gethdev account's default password is "pass"

```
function sendEther(from, to, amountEther, password){
    personal.unlockAccount(from, password, 300);
    var amount = web3.toWei(amountEther, "ether");
    eth.sendTransaction({from:from, to:to, value: amount});
}

```

result

```
> sendEther(eth.accounts[0], eth.accounts[2], 1.99, "pass")
undefined
> checkAllBalances()
  eth.accounts[0]:      0x94006a47d576074d1ed4004379e294783c09095d      balance: 5725 ether
  eth.accounts[1]:      0x9a39a815b632b954c22b9ce53837a45a091cf259      balance: 10 ether
  eth.accounts[2]:      0x48042635ba3766cb13f846e584e74d982e8103c9      balance: 0 ether
  eth.accounts[3]:      0x830fb53eb8323c104f5359cb19ae335f95e42926      balance: 0 ether
  eth.accounts[4]:      0x5b932babca02649b929aafb547a923abb3ee98b1      balance: 0 ether
  eth.accounts[5]:      0x51e69ab25e9d9508f26c4b2be1a9f0d68a77a7a8      balance: 0 ether
  eth.accounts[6]:      0xe98fca597b11ff85c35b767def21adb5a0d895b9      balance: 0 ether
  eth.accounts[7]:      0xb241a59c362b35c7eb4ea9dc0562a8d4273f48ae      balance: 0 ether
  eth.accounts[8]:      0xa60c96e8b5c867541bdf157b1ecd1779fa4d32c9      balance: 0 ether
  Total balance: 5735 ether
// why ?
> checkAllBalances()
  eth.accounts[0]:      0x94006a47d576074d1ed4004379e294783c09095d      balance: 5738.01 ether
  eth.accounts[1]:      0x9a39a815b632b954c22b9ce53837a45a091cf259      balance: 10 ether
  eth.accounts[2]:      0x48042635ba3766cb13f846e584e74d982e8103c9      balance: 1.99 ether
  eth.accounts[3]:      0x830fb53eb8323c104f5359cb19ae335f95e42926      balance: 0 ether
  eth.accounts[4]:      0x5b932babca02649b929aafb547a923abb3ee98b1      balance: 0 ether
  eth.accounts[5]:      0x51e69ab25e9d9508f26c4b2be1a9f0d68a77a7a8      balance: 0 ether
  eth.accounts[6]:      0xe98fca597b11ff85c35b767def21adb5a0d895b9      balance: 0 ether
  eth.accounts[7]:      0xb241a59c362b35c7eb4ea9dc0562a8d4273f48ae      balance: 0 ether
  eth.accounts[8]:      0xa60c96e8b5c867541bdf157b1ecd1779fa4d32c9      balance: 0 ether
  Total balance: 5750 ether
 
```

### deploy token contract

* http://remix.ethereum.org/
* T100_Token.sol
* Contract details - Web3 deploy

```
personal.unlockAccount(eth.accounts[0], "pass", 300);

var browser_token_sol_footokenContract = web3.eth.contract([{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"INITIAL_SUPPLY","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}]);
var browser_token_sol_footoken = browser_token_sol_footokenContract.new(
   {
     from: web3.eth.accounts[0], 
     data: '0x6060604052341561000f57600080fd5b5b6871d75ab9b9205000006000819055506871d75ab9b920500000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b5b61118c8061007e6000396000f300606060405236156100b8576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806306fdde03146100bd578063095ea7b31461014c57806318160ddd146101a657806323b872dd146101cf5780632ff2e9dc14610248578063313ce56714610271578063661884631461029a57806370a08231146102f457806395d89b4114610341578063a9059cbb146103d0578063d73dd6231461042a578063dd62ed3e14610484575b600080fd5b34156100c857600080fd5b6100d06104f0565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101115780820151818401525b6020810190506100f5565b50505050905090810190601f16801561013e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561015757600080fd5b61018c600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610529565b604051808215151515815260200191505060405180910390f35b34156101b157600080fd5b6101b96106b1565b6040518082815260200191505060405180910390f35b34156101da57600080fd5b61022e600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506106b7565b604051808215151515815260200191505060405180910390f35b341561025357600080fd5b61025b6109a4565b6040518082815260200191505060405180910390f35b341561027c57600080fd5b6102846109b1565b6040518082815260200191505060405180910390f35b34156102a557600080fd5b6102da600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506109b6565b604051808215151515815260200191505060405180910390f35b34156102ff57600080fd5b61032b600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610c48565b6040518082815260200191505060405180910390f35b341561034c57600080fd5b610354610c92565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103955780820151818401525b602081019050610379565b50505050905090810190601f1680156103c25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156103db57600080fd5b610410600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ccb565b604051808215151515815260200191505060405180910390f35b341561043557600080fd5b61046a600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035906020019091905050610ea2565b604051808215151515815260200191505060405180910390f35b341561048f57600080fd5b6104da600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061109f565b6040518082815260200191505060405180910390f35b6040805190810160405280600881526020017f466f6f546f6b656e00000000000000000000000000000000000000000000000081525081565b6000808214806105b557506000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054145b15156105c057600080fd5b81600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040518082815260200191505060405180910390a3600190505b92915050565b60005481565b600080600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16141515156106f657600080fd5b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506107c783600160008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461112790919063ffffffff16565b600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061085c83600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114190919063ffffffff16565b600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506108b2838261112790919063ffffffff16565b600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef856040518082815260200191505060405180910390a3600191505b509392505050565b6871d75ab9b92050000081565b601281565b600080600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905080831115610ac7576000600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610b5b565b610ada838261112790919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b8373ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600191505b5092915050565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b919050565b6040805190810160405280600381526020017f464f54000000000000000000000000000000000000000000000000000000000081525081565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614151515610d0857600080fd5b610d5a82600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461112790919063ffffffff16565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610def82600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114190919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040518082815260200191505060405180910390a3600190505b92915050565b6000610f3382600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461114190919063ffffffff16565b600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925600260003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546040518082815260200191505060405180910390a3600190505b92915050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490505b92915050565b600082821115151561113557fe5b81830390505b92915050565b600080828401905083811015151561115557fe5b8091505b50929150505600a165627a7a72305820ee36c58905fa9bd52f782e236cb7271a9653323003d00098d3b9e55ff6cf421f0029', 
     gas: '4689373'
   }, function (e, contract){
    console.log(e, contract);
    if (typeof contract.address !== 'undefined') {
         console.log('Contract mined! address: ' + contract.address + ' transactionHash: ' + contract.transactionHash);
    }
 })
```

result
```
Contract mined! address: 0xf3c4342a1eb9fff766b2a6470a59282ba573fac0 transactionHash: 0xa252ffa102b9899c07c398be7f6d39a16d7066ffa3dc06b6a3c1205d5582cf8d

> browser_token_sol_footoken
{
  abi: [{
      constant: true,
      inputs: [],
      name: "name",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      constant: false,
      inputs: [{...}, {...}],
      name: "approve",
      outputs: [{...}],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
  }, {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      constant: false,
      inputs: [{...}, {...}, {...}],
      name: "transferFrom",
      outputs: [{...}],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
  }, {
      constant: true,
      inputs: [],
      name: "INITIAL_SUPPLY",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      constant: false,
      inputs: [{...}, {...}],
      name: "decreaseApproval",
      outputs: [{...}],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
  }, {
      constant: true,
      inputs: [{...}],
      name: "balanceOf",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      constant: false,
      inputs: [{...}, {...}],
      name: "transfer",
      outputs: [{...}],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
  }, {
      constant: false,
      inputs: [{...}, {...}],
      name: "increaseApproval",
      outputs: [{...}],
      payable: false,
      stateMutability: "nonpayable",
      type: "function"
  }, {
      constant: true,
      inputs: [{...}, {...}],
      name: "allowance",
      outputs: [{...}],
      payable: false,
      stateMutability: "view",
      type: "function"
  }, {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor"
  }, {
      anonymous: false,
      inputs: [{...}, {...}, {...}],
      name: "Approval",
      type: "event"
  }, {
      anonymous: false,
      inputs: [{...}, {...}, {...}],
      name: "Transfer",
      type: "event"
  }],
  address: "0xf3c4342a1eb9fff766b2a6470a59282ba573fac0",
  transactionHash: "0xa252ffa102b9899c07c398be7f6d39a16d7066ffa3dc06b6a3c1205d5582cf8d",
  Approval: function(),
  INITIAL_SUPPLY: function(),
  Transfer: function(),
  allEvents: function(),
  allowance: function(),
  approve: function(),
  balanceOf: function(),
  decimals: function(),
  decreaseApproval: function(),
  increaseApproval: function(),
  name: function(),
  symbol: function(),
  totalSupply: function(),
  transfer: function(),
  transferFrom: function()
}

// balanceOf (read-only)
> browser_token_sol_footoken.balanceOf(eth.accounts[0])
2.1e+21

// transfer 
> personal.unlockAccount(eth.accounts[0], "pass", 300);
> browser_token_sol_footoken.transfer(eth.accounts[1], 123000 ,{from : eth.accounts[0]})
"0x41d45b1bf8f0149d9682651ef0721f57deefe7835c4a06cde8049ded983cd3c1"

> browser_token_sol_footoken.balanceOf(eth.accounts[1])

123000

> exit
bash-4.3# exit
exit
```
### Stop the gethdev console

```
$ docker-compose stop
```
