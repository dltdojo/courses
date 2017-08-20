* JSON RPC · ethereum/wiki Wiki https://github.com/ethereum/wiki/wiki/JSON-RPC
* JSON-RPC - Bitcoin Wiki https://en.bitcoin.it/wiki/API_reference_(JSON-RPC)
* Original Bitcoin client/API calls list - Bitcoin Wiki https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list

### ethereum
```
$ curl -X POST --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' http://localhost:8545
$ curl -X POST --data '{"jsonrpc":"2.0","method":"personal_unlockAccount","params":["0x364d385977b17b26fce6d245329c7ab992f557eb","mypasswd",300],"id":67}' http://localhost:8545
$ curl -X POST --data '{"jsonrpc":"2.0","method":"miner_start","params":[],"id":74}' localhost:8545
```

### bitcoin

```
$ bitcoin-cli getbalance 

$ curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "getbalance", "params": ["", 6] }' -H 'content-type: text/plain;' http://127.0.0.1:9332/

$ bitcoin-cli sendtoaddress "1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd" 0.1
$ curl --user myusername --data-binary '{"jsonrpc": "1.0", "id":"curltest", "method": "sendtoaddress", "params": ["1M72Sfpbz1BPpXFHz9m3CdqATR44Jvaydd", 0.1] }' http://localhost:9332/

```