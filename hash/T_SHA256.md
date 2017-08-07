### message abc

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
  }
}

```