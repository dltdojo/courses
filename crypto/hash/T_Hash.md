### SHA256

* https://www.di-mgt.com.au/sha_testvectors.html
* abc : SHA-256 ba7816bf 8f01cfea 414140de 5dae2223 b00361a3 96177a9c b410ff61 f20015ad

```
$ ethnode js/sha256.js
{
  "util": {
    "msg": "abc",
    "hashBuffer": {
      "type": "Buffer",
      "data": [
        186,
        120,
        22,
        191,
        143,
        1,
        207,
        234,
        65,
        65,
        64,
        222,
        93,
        174,
        34,
        35,
        176,
        3,
        97,
        163,
        150,
        23,
        122,
        156,
        180,
        16,
        255,
        97,
        242,
        0,
        21,
        173
      ]
    },
    "hash": "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
  },
  "bitcore": {
    "msg": "abc",
    "hash": "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad"
  },
    "sha512": {
    "msg": "abc",
    "hash": "ddaf35a193617abacc417349ae20413112e6fa4e89a97ea20a9eeee64b55d39a2192992a274fc1a836ba3c23a3feebbd454d4423643ce80e2a9ac94fa54ca49f"
  }
}
```

### SHA3/KECCAK

```
$ ethnode js/sha3-keccak.js
{
  "keccak256": {
    "msg": "abc",
    "hash": "4e03657aea45a94fc7d47ba826c8d667c0d1e6e33a64a036ec44f58fa12d6c45"
  },
  "sha3_256": {
    "msg": "abc",
    "hash": "3a985da74fe225b2045c172d6bd390bd855f086e3e9d525b46bfe24511431532"
  },
  "ethaddress": {
    "privateKey": "0000000000000000000000000000000000000000000000000000000000000001",
    "publicKey": "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
    "keccak256": "c0a6c424ac7157ae408398df7e5f4552091a69125d5dfcb7b8c2659029395bdf",
    "address": "7e5f4552091a69125d5dfcb7b8c2659029395bdf",
    "checksumAddress": "0x7E5F4552091A69125d5DfCb7b8C2659029395Bdf"
  },
  "rlphash": {
    "msg": [
      "cat",
      "dog"
    ],
    "encodedRlp": "c88363617483646f67",
    "hash": "0965191887f7a1e621653cc8d7d39532761053f9df7e5db68bc146bca5796de8"
  }
}
```

### HASH160/HASH256

```
$ ethnode js/hash160.js
{
  "abc": {
    "ripmd160": "8eb208f7e05d987a9b044a8e98c6b087f15a0bfc",
    "hash256": "4f8b42c22dd3729b519ba6f68d2da7cc5b2d606d05daed5ad5128cc03e6c6358",
    "hash160": "bb1be98c142444d7a56aa3981c3942a978e4dc33"
  },
  "ripmd160": {
    "msg": "abc",
    "hash": "8eb208f7e05d987a9b044a8e98c6b087f15a0bfc"
  },
  "hash256": {
    "msg": "0100000000000000000000000000000000000000000000000000000000000000000000003BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A29AB5F49FFFF001D1DAC2B7C",
    "hash": "6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000"
  },
  "hash160": {
    "privateKey": "01",
    "publicKey": "0279be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
    "hash": "751e76e8199196d454941c45d1b3a323f1433bd6",
    "address": "1BgGZ9tcN4rm9KBzDn7KprQz87SZ26SAMH",
    "base58decode": "00751e76e8199196d454941c45d1b3a323f1433bd6510d1634"
  }
}
```

solidity

* http://solidity.readthedocs.io/en/develop/units-and-global-variables.html
* https://ethereum.github.io/browser-solidity/

```
pragma solidity ^0.4.14;

contract Foo {
  function testRipemd160() returns (bytes20) {
      return ripemd160('abc');
  }
  
  function testSha256() returns (bytes32) {
      return sha256('abc');
  }
  
  function testHash160() returns (bytes20) {
      return ripemd160(sha256('abc'));
  }
  
  function testHash256() returns (bytes32) {
      return sha256(sha256('abc'));
  }
}
```