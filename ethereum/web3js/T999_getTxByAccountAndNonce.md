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
### getTransactionsByAccountAndNonce

https://ethereum.stackexchange.com/questions/7912/is-there-a-way-in-web3-to-get-a-transaction-by-address-and-nonce

```
function getTransactionsByAccount(myaccount, startBlockNumber, endBlockNumber, nonce) {
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 1000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for transactions to/from account \"" + myaccount + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber);

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i, true);
    if (block != null && block.transactions != null) {
      block.transactions.forEach( function(e) {
        if (myaccount == e.from && nonce == e.transactionIndex) {
          // Do something with the trasaction
          console.log("  tx hash          : " + e.hash + "\n"
            + "   nonce           : " + e.nonce + "\n"
            + "   blockHash       : " + e.blockHash + "\n"
            + "   blockNumber     : " + e.blockNumber + "\n"
            + "   transactionIndex: " + e.transactionIndex + "\n"
            + "   from            : " + e.from + "\n" 
            + "   to              : " + e.to + "\n"
            + "   value           : " + e.value + "\n"
            + "   time            : " + block.timestamp + " " + new Date(block.timestamp * 1000).toGMTString() + "\n"
            + "   gasPrice        : " + e.gasPrice + "\n"
            + "   gas             : " + e.gas + "\n"
            + "   input           : " + e.input);
        }
      })
    }
  }
}
```

result 
```
> exit
bash-4.3# exit
exit
```
### Stop the gethdev console

```
$ docker-compose stop
```
