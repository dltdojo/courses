### Bitcoin Blockchain 

* 6.5: Sending a Transaction with Data https://github.com/ChristopherA/Learning-Bitcoin-from-the-Command-Line/blob/master/06_5_Sending_a_Transaction_with_Data.md#65-sending-a-transaction-with-data
* Meta Coin Platforms | Mastering Bitcoin http://chimera.labs.oreilly.com/books/1234000001802/ch09.html#_a_taxonomy_of_alternative_currencies_and_chains
* Coin Secrets - OP_RETURN metadata in the Bitcoin Blockchain  http://coinsecrets.org/
* Bitcoin 2.0 ? [ANN][XCP] Counterparty - Pioneering Peer-to-Peer Finance - Official Thread https://bitcointalk.org/index.php?topic=395761.0
* Counterparty (technology) - Wikipedia  https://en.wikipedia.org/wiki/Counterparty_(technology)
* Introduction · Colored-Coins/Colored-Coins-Protocol-Specification https://github.com/Colored-Coins/Colored-Coins-Protocol-Specification/wiki/Introduction

### Sending a Transaction with Data

* http://<VMIP>:12750/
* evm-tools/guide.md at master · CoinCulture/evm-tools https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md
* https://blockchain.info/pushtx

```
$ docker-compose up -d abe
$ docker-compose exec abe bash
bash-4.3# 
su-exec bitcoin bitcoin-cli getinfo
alias bcli='su-exec bitcoin bitcoin-cli'
bcli getinfo
bcli listunspent
utxo_txid=$(bcli listunspent | jq -r '.[0] | .txid')
utxo_vout=$(bcli listunspent | jq -r '.[0] | .vout')
changeaddress=$(bcli getrawchangeaddress)
op_return_data="6005600401"
evm_opcodes="PUSH1 05 PUSH1 04 ADD"
rawtxhex=$(bcli -named createrawtransaction inputs='''[ { "txid": "'$utxo_txid'", "vout": '$utxo_vout' } ]''' outputs='''{ "data": "'$op_return_data'", "'$changeaddress'": 49.9995 }''')
bcli -named decoderawtransaction hexstring=$rawtxhex
signedtx=$(bcli -named signrawtransaction hexstring=$rawtxhex | jq -r '.hex')
bcli -named decoderawtransaction hexstring=$signedtx
bcli -named sendrawtransaction hexstring=$signedtx
bcli generate 2
```

or 

```
$ docker-compose up -d abe
$ docker-compose exec abe bash
bash-4.3# 
source /opreturn.sh
```

log details

```
$ docker-compose up -d abe
$ docker-compose exec abe bash
bash-4.3# su-exec bitcoin bitcoin-cli getinfo
{
  "version": 140200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 191.49990960,
  "blocks": 104,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1502850181,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
bash-4.3# alias bcli='su-exec bitcoin bitcoin-cli'
bash-4.3# bcli getinfo
{
  "version": 140200,
  "protocolversion": 70015,
  "walletversion": 130000,
  "balance": 191.49990960,
  "blocks": 104,
  "timeoffset": 0,
  "connections": 0,
  "proxy": "",
  "difficulty": 4.656542373906925e-10,
  "testnet": false,
  "keypoololdest": 1502850181,
  "keypoolsize": 100,
  "paytxfee": 0.00000000,
  "relayfee": 0.00001000,
  "errors": ""
}
bash-4.3# bcli listunspent
[
  {
    "txid": "6f530e2ac8247851a650ca74848a20433559ef4e26d7a7f09382b61e35546c10",
    "vout": 0,
    "address": "mwx9C9Lin7B5F5HCFL4j34Gc5a2nwzCAwo",
    "scriptPubKey": "2102df1f6626c83072adc9e380689ad23105dfb2add8481b0577eb7d56fdd12d72fcac",
    "amount": 50.00000000,
    "confirmations": 101,
    "spendable": true,
    "solvable": true
  },
  {
    "txid": "c8e931ae480b5394addf0a0a9f7ada06c7e2f2c341bd5f319718903bbe4b9112",
    "vout": 0,
    "address": "mwx9C9Lin7B5F5HCFL4j34Gc5a2nwzCAwo",
    "scriptPubKey": "2102df1f6626c83072adc9e380689ad23105dfb2add8481b0577eb7d56fdd12d72fcac",
    "amount": 50.00000000,
    "confirmations": 103,
    "spendable": true,
    "solvable": true
  },
  {
    "txid": "ccb9d098944b21c7a5e1d27a69c3382dc86941530a9b14edbb07af8d9ee9182a",
    "vout": 1,
    "address": "mogKQZN5nhdR2pWg7izzTYvX3LReZnuVHm",
    "scriptPubKey": "76a91459865f9b4366b7ce0d0d73b88a9f197ea030bac488ac",
    "amount": 41.49990960,
    "confirmations": 1,
    "spendable": true,
    "solvable": true
  },
  {
    "txid": "48725bee99a8582c4ac123f59406ae640e917f9a10d6c6ae29530a071e5c68d9",
    "vout": 0,
    "address": "mwx9C9Lin7B5F5HCFL4j34Gc5a2nwzCAwo",
    "scriptPubKey": "2102df1f6626c83072adc9e380689ad23105dfb2add8481b0577eb7d56fdd12d72fcac",
    "amount": 50.00000000,
    "confirmations": 102,
    "spendable": true,
    "solvable": true
  }
]
bash-4.3# utxo_txid=$(bcli listunspent | jq -r '.[0] | .txid')
bash-4.3# utxo_vout=$(bcli listunspent | jq -r '.[0] | .vout')
bash-4.3# changeaddress=$(bcli getrawchangeaddress)
bash-4.3# op_return_data="6005600401"
bash-4.3# evm_opcodes="PUSH1 05 PUSH1 04 ADD"
bash-4.3# rawtxhex=$(bcli -named createrawtransaction inputs='''[ { "txid": "'$utxo_txid'", "vout": '$utxo_vout' } ]''' outputs='''{ "data": "'$op_return_data'", "'$changeaddress'": 49.9995 }''')
bash-4.3# bcli -named decoderawtransaction hexstring=$rawtxhex
{
  "txid": "7346a0e8b8f14ac84a22027366c137610d0a2940ca4eaaa56da9fde495265d2a",
  "hash": "7346a0e8b8f14ac84a22027366c137610d0a2940ca4eaaa56da9fde495265d2a",
  "size": 101,
  "vsize": 101,
  "version": 2,
  "locktime": 0,
  "vin": [
    {
      "txid": "6f530e2ac8247851a650ca74848a20433559ef4e26d7a7f09382b61e35546c10",
      "vout": 0,
      "scriptSig": {
        "asm": "",
        "hex": ""
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 0.00000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 6005600401",
        "hex": "6a056005600401",
        "type": "nulldata"
      }
    },
    {
      "value": 49.99950000,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 e591b145ee52b17db04c4020991a872963a7b729 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914e591b145ee52b17db04c4020991a872963a7b72988ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "n2SoZsdNpbGwTgQEc4zPGpvx8zP8wzQ6LU"
        ]
      }
    }
  ]
}
bash-4.3# signedtx=$(bcli -named signrawtransaction hexstring=$rawtxhex | jq -r '.hex')
bash-4.3# bcli -named decoderawtransaction hexstring=$signedtx
{
  "txid": "3828b2c85eff6ee1cd135e86c4cd5195dcf9e94108ce0294a5225560e3eadae2",
  "hash": "3828b2c85eff6ee1cd135e86c4cd5195dcf9e94108ce0294a5225560e3eadae2",
  "size": 173,
  "vsize": 173,
  "version": 2,
  "locktime": 0,
  "vin": [
    {
      "txid": "6f530e2ac8247851a650ca74848a20433559ef4e26d7a7f09382b61e35546c10",
      "vout": 0,
      "scriptSig": {
        "asm": "304402205043c5aabe1e3e274bd6ecd9a3024da74ce44dca0e2fb6efcaac884a07352283022051bdfda4759cf5e39e1ed1ec0ce9beb23df09e68cd1a78f7b3367bd095c59fab[ALL]",
        "hex": "47304402205043c5aabe1e3e274bd6ecd9a3024da74ce44dca0e2fb6efcaac884a07352283022051bdfda4759cf5e39e1ed1ec0ce9beb23df09e68cd1a78f7b3367bd095c59fab01"
      },
      "sequence": 4294967295
    }
  ],
  "vout": [
    {
      "value": 0.00000000,
      "n": 0,
      "scriptPubKey": {
        "asm": "OP_RETURN 6005600401",
        "hex": "6a056005600401",
        "type": "nulldata"
      }
    },
    {
      "value": 49.99950000,
      "n": 1,
      "scriptPubKey": {
        "asm": "OP_DUP OP_HASH160 e591b145ee52b17db04c4020991a872963a7b729 OP_EQUALVERIFY OP_CHECKSIG",
        "hex": "76a914e591b145ee52b17db04c4020991a872963a7b72988ac",
        "reqSigs": 1,
        "type": "pubkeyhash",
        "addresses": [
          "n2SoZsdNpbGwTgQEc4zPGpvx8zP8wzQ6LU"
        ]
      }
    }
  ]
}
bash-4.3# bcli -named sendrawtransaction hexstring=$signedtx
3828b2c85eff6ee1cd135e86c4cd5195dcf9e94108ce0294a5225560e3eadae2
bash-4.3# bcli generate 2
[
  "34c9953c835179473d8365daa1c3bb64066278bf913f496c6ad2a2e4bbfd3410",
  "34bc0a1d1bef81a6df8f4dbf9583d2380b1c67b2f76bda20835c407a3b6db527"
]

```