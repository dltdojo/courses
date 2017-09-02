* Management APIs · ethereum/go-ethereum Wiki  https://github.com/ethereum/go-ethereum/wiki/Management-APIs#debug_tracetransaction

```
$ docker-compose up -d gethdev
$ docker-compose up -d remix
$ docker-compose exec gethdev bash

bash-4.3# geth attach
Welcome to the Geth JavaScript console!

instance: Geth/v1.6.7-stable/linux-amd64/go1.9beta2
coinbase: 0x94006a47d576074d1ed4004379e294783c09095d
at block: 3 (Sat, 02 Sep 2017 03:57:34 UTC)
 datadir: /root/.ethereum
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 shh:1.0 txpool:1.0 web3:1.0

> eth.accounts
["0x94006a47d576074d1ed4004379e294783c09095d", "0x9a39a815b632b954c22b9ce53837a45a091cf259", "0x48042635ba3766cb13f846e584e74d982e8103c9"]

> debug.dumpBlock("0x2")
{
  accounts: {
    0000000000000000000000000000000000000001: {
      balance: "1",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    0000000000000000000000000000000000000002: {
      balance: "1",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    0000000000000000000000000000000000000003: {
      balance: "1",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    0000000000000000000000000000000000000004: {
      balance: "1",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    1a26338f0d905e295fccb71fa9ea849ffa12aaf4: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    2ef47100e0787b915105fd5e3f4ff6752079d5cb: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    6c386a4b26f73c802f34673f7248bb118f97424a: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    94006a47d576074d1ed4004379e294783c09095d: {
      balance: "10000000000000000000",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    b9c015918bdaba24b4ff057a92a3873d6eb201be: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    cd2a3d9f938e13cd947ec05abc7fe734df8dd826: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    dbdbdb2cbd23b783741e8d7fcf51e459b497e4a6: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    e4157b34ea9615cfbde6b4fda419828124b70c78: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    },
    e6716f9544a56c530d868e4bfbacb172315bdead: {
      balance: "1606938044258990275541962092341162602522202993782792835301376",
      code: "",
      codeHash: "c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
      nonce: 0,
      root: "56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      storage: {}
    }
  },
  root: "ab19ef42da371e1abb4a3b84644c114fb71c6b5f8762070c7230716020a6a864"
}

```

* remix : http://DEVIP:8080/
* web3js api html : http://DEVIP:8080/mount/T220_Debug.html

test.sol

```
pragma solidity ^0.4.14;

contract MyWallet {
    function transfer(address to) payable {
        to.transfer(msg.value);
    }
}
```

### stop all containers

```
$ docker-compose stop
```
