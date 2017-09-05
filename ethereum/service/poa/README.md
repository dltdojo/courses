### Clique proof-of-authority consensus protocol

Ethereum目前測試鏈 Ropsten 於2017年2月被大量算力置入太多巨型交易造成堵塞無法使用，而PoW模式的安全取決於算力，對於測試鏈只有供開發者者測試使用，其代幣無實質價值無法支付成本吸引常駐大量算力保護的狀態下，再造PoW測試鏈還是會重蹈覆轍，於是有新的PoA共識協定出現。

### Standardized proof-of-authority

目前PoA有兩條測試鏈運轉，kovan與rinkeby。

* Geth Only https://rinkeby.etherscan.io/
* Clique PoA protocol & Rinkeby PoA testnet · Issue #225 · ethereum/EIPs https://github.com/ethereum/EIPs/issues/225
* Parity Only https://kovan.etherscan.io/
* Proof of Authority Chains · paritytech/parity Wiki https://github.com/paritytech/parity/wiki/Proof-of-Authority-Chains

PoA的共識是由少數簽名授權節點排序出塊不是依照算力計算，所以協定主要落在多久出一塊、如何分配每個參與簽名節點出塊的機率以及動態加入簽署節點問題。

### Ciique 

* The protocol of maintaining the list of authorized signers must be fully contained in the block headers.
* The protocol of maintaining the list of authorized signers must fit fully into the current data models.

Yellow paper (section 4.4), we have several fields in the block header:

* parentHash, 256 bits
* ommersHash, 256 bits
* beneficiary(miner), 160 bits
* stateRoot, 256 bits
* transactionsRoot, 256 bits
* receiptsRoot, 256 bits
* logsBloom, 256 bytes (see here)
* difficulty, big int scalar
* number, big int scalar
* gasLimit, big int scalar
* gasUsed, big int scalar
* timestamp, big int scalar
* extraData, (up to) 256 bits
* mixHash, 256 bits
* nonce, 64 bits

clique extraData 改為 65 bytes可放置 secp256k1 miner signature，區塊接收者可驗證是否由簽發者簽發，與PoW驗區塊頭難度共識不同，另外miner/nonce拿來做投票新增或刪除簽屬者。

https://rinkeby.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x10d4f&boolean=true&apikey=YourApiKeyToken

```
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "difficulty": "0x2",
        "extraData": "0xd783010600846765746887676f312e372e33856c696e757800000000000000002236240a11ddeb861e92981c9e547023d10bfa9c7709c2ff5e43fb19f6b784700b1e582ef2bc02cd0db1a5c7b44ba924dbb11d855a40d1f7fc13579ed0ad3c4a01",
        "gasLimit": "0x47e7c4",
        "gasUsed": "0x0",
        "hash": "0xf72e72bbe684ee38a8c17da2f349d17f64979ffcbeadbadc340e8fdd9a9e814c",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x0000000000000000000000000000000000000000",
        "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
        "nonce": "0x0000000000000000",
        "number": "0x10d4f",
        "parentHash": "0xa4ff49f3a881783ceb5f0f4b4a6612e08270a6f99b6f2bc42287c164e3d23f4e",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "size": "0x261",
        "stateRoot": "0x3d3621fffbea0a67071f5d17f7d6293af6deee7a110f1a835f0d2dad4395cf97",
        "timestamp": "0x58fe0d70",
        "totalDifficulty": "0x213de",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    }
}
```

https://kovan.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=0x10d4f&boolean=true&apikey=YourApiKeyToken

```
{
    "jsonrpc": "2.0",
    "result": {
        "author": "0x00e4a10650e5a6d6001c38ff8e64f97016a1645c",
        "difficulty": "0x20000",
        "extraData": "0xd5830105048650617269747986312e31352e31826c69",
        "gasLimit": "0x47b760",
        "gasUsed": "0x0",
        "hash": "0xc80fcb89f8e5e0ae7d220b88a872d48ddadc76f74b50c2dacd5d9ef6a3fff9b2",
        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
        "miner": "0x00e4a10650e5a6d6001c38ff8e64f97016a1645c",
        "number": "0x10d4f",
        "parentHash": "0x0189aa4f70d9d575135da92f31d7b3e49937c64d68d15db40aa522e71b248284",
        "receiptsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "sealFields": [
            "0x84162f4672",
            "0xb841de0f45d7fbe8472ed44f6ae2b724279ec9fbd24fb9910e01ea7e42487456c22c281d73fb1091347c1771262c6d10698f313f5dbf1093107cd1c0ef398193a75b01"
        ],
        "sha3Uncles": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
        "signature": "de0f45d7fbe8472ed44f6ae2b724279ec9fbd24fb9910e01ea7e42487456c22c281d73fb1091347c1771262c6d10698f313f5dbf1093107cd1c0ef398193a75b01",
        "size": "0x236",
        "stateRoot": "0xe56f2d9a343006eb58b7a1742ed8c1d63e3cce93ed24cdf4c1ff782d14639f23",
        "step": "372196978",
        "timestamp": "0x58bd19c7",
        "totalDifficulty": "0x21aa00000",
        "transactions": [],
        "transactionsRoot": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
        "uncles": []
    },
    "id": 1
}
```

### References

* Istanbul Byzantine Fault Tolerance · Issue #650 · ethereum/EIPs  https://github.com/ethereum/EIPs/issues/650