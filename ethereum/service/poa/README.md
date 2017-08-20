* https://github.com/dltdojo/container/tree/master/dltdojo/clique
* Network name: foonet
* 4 nodes
* the genesis file data/foonet.json

```
$ docker run -it -v $(pwd)/data:/dltdojo dltdojo/clique:1.6.7 ./build.sh foonet 4
```

log details

```
=== node0 address ===
bfdae52c9309862a3c491ada373afa56cb8b3b34
=== node1 address ===
62aab5accd6a7ebd0339665ac05435d766924c3a
=== node2 address ===
800f887de0f81ce889238fd7f14c4324f5160b8d
=== node3 address ===
a4d132c893deefbb95c3af5fd45a25c15842ad9c
+-----------------------------------------------------------+
| Welcome to puppeth, your Ethereum private network manager |
|                                                           |
| This tool lets you create a new Ethereum network down to  |
| the genesis block, bootnodes, miners and ethstats servers |
| without the hassle that it would normally entail.         |
|                                                           |
| Puppeth uses SSH to dial in to remote servers, and builds |
| its network components out of Docker containers using the |
| docker-compose toolset.                                   |
+-----------------------------------------------------------+

Please specify a network name to administer (no spaces, please)
> foonet
Sweet, you can set this via --network=foonet next time!

INFO [08-20|13:51:01] Administering Ethereum network           name=foonet
WARN [08-20|13:51:01] No previous configurations found         path=/root/.puppeth/foonet

What would you like to do? (default = stats)
 1. Show network stats
 2. Configure new genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which consensus engine to use? (default = clique)
 1. Ethash - proof-of-work
 2. Clique - proof-of-authority
> 2

How many seconds should blocks take? (default = 15)
>

Which accounts are allowed to seal? (mandatory at least one)
> 0xbfdae52c9309862a3c491ada373afa56cb8b3b34
> 0x

Which accounts should be pre-funded? (advisable at least one)
> 0xbfdae52c9309862a3c491ada373afa56cb8b3b34
> 0x62aab5accd6a7ebd0339665ac05435d766924c3a
> 0x


Specify your chain/network ID if you want an explicit one (default = random)
>

Anything fun to embed into the genesis block? (max 32 bytes)
> FOONET

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> 2

Which file to save the genesis into? (default = foonet.json)
>
INFO [08-20|13:51:47] Exported existing genesis block

What would you like to do? (default = stats)
 1. Show network stats
 2. Save existing genesis
 3. Track new remote server
 4. Deploy network components
> ^C
/dltdojo/foonet
├── foonet.json
├── node0
│   ├── UTC--2017-08-20T13-50-52.036357156Z--bfdae52c9309862a3c491ada373afa56cb8b3b34
│   └── passfile
├── node1
│   ├── UTC--2017-08-20T13-50-52.791241664Z--62aab5accd6a7ebd0339665ac05435d766924c3a
│   └── passfile
├── node2
│   ├── UTC--2017-08-20T13-50-53.558596366Z--800f887de0f81ce889238fd7f14c4324f5160b8d
│   └── passfile
└── node3
    ├── UTC--2017-08-20T13-50-54.314622608Z--a4d132c893deefbb95c3af5fd45a25c15842ad9c
    └── passfile

4 directories, 9 files
=== foonet.json ===
{
  "chainId": 39914,
  "homesteadBlock": 1,
  "eip150Block": 2,
  "eip150Hash": "0x0000000000000000000000000000000000000000000000000000000000000000",
  "eip155Block": 3,
  "eip158Block": 3,
  "clique": {
    "period": 15,
    "epoch": 30000
  }
}
```

### 啟動PoA網路

確認修改 docker-compose.yml的NET_NAME: "foonet"

* https://github.com/dltdojo/container/blob/master/dltdojo/clique/start.sh

```
$ docker-compose up -d
Recreating clique_node0_1
Recreating clique_node1_1
Recreating clique_node3_1
Recreating clique_node2_1

$ docker-compose ps
     Name         Command     State   Ports
-------------------------------------------
clique_node0_1   ./start.sh   Up
clique_node1_1   ./start.sh   Up
clique_node2_1   ./start.sh   Up
clique_node3_1   ./start.sh   Up

$ docker-compose logs node0
$ docker-compose logs node1
```

logs node0

```
Attaching to poa_node0_1
node0_1  | ACCOUNT=bfdae52c9309862a3c491ada373afa56cb8b3b34
node0_1  | INFO [08-20|14:03:33] Allocated cache and file handles         database=/root/.ethereum/geth/chaindata cache=16 handles=16
node0_1  | INFO [08-20|14:03:33] Writing custom genesis block
node0_1  | INFO [08-20|14:03:33] Successfully wrote genesis state         database=chaindata                      hash=fd59ca…5cacc2
node0_1  | INFO [08-20|14:03:33] Allocated cache and file handles         database=/root/.ethereum/geth/lightchaindata cache=16 handles=16
node0_1  | INFO [08-20|14:03:33] Writing custom genesis block
node0_1  | INFO [08-20|14:03:33] Successfully wrote genesis state         database=lightchaindata                      hash=fd59ca…5cacc2
node0_1  | networkid=39914
node0_1  | YES
node0_1  | --rpc --rpcapi "miner,admin,db,personal,eth,net,web3" --unlock bfdae52c9309862a3c491ada373afa56cb8b3b34 --password /root/.ethereum/keystore/passfile
node0_1  | INFO [08-20|14:03:33] Starting peer-to-peer node               instance=Geth/v1.6.7-stable/linux-amd64/go1.9beta2
node0_1  | INFO [08-20|14:03:33] Allocated cache and file handles         database=/root/.ethereum/geth/chaindata cache=128 handles=1024
node0_1  | WARN [08-20|14:03:33] Upgrading chain database to use sequential keys
node0_1  | INFO [08-20|14:03:33] Initialised chain configuration          config="{ChainID: 39914 Homestead: 1 DAO: <nil> DAOSupport: false EIP150: 2 EIP155: 3 EIP158: 3 Metropolis: <nil> Engine: clique}"
node0_1  | WARN [08-20|14:03:33] Upgrading db log bloom bins
node0_1  | INFO [08-20|14:03:33] Bloom-bin upgrade completed              elapsed=147.849µs
node0_1  | INFO [08-20|14:03:33] Initialising Ethereum protocol           versions="[63 62]" network=39914
node0_1  | INFO [08-20|14:03:33] Loaded most recent local header          number=0 hash=fd59ca…5cacc2 td=1
node0_1  | INFO [08-20|14:03:33] Loaded most recent local full block      number=0 hash=fd59ca…5cacc2 td=1
node0_1  | INFO [08-20|14:03:33] Loaded most recent local fast block      number=0 hash=fd59ca…5cacc2 td=1
node0_1  | INFO [08-20|14:03:33] Starting P2P networking
node0_1  | INFO [08-20|14:03:33] Database conversion successful
node0_1  | INFO [08-20|14:03:35] UDP listener up                          self=enode://0472e9cadfd737612a13577d8ed91b6a2ead8f0c337486f7e414fd46e0a03fdb7700ba9d3ee92a34be571bd457a4f7da3be9c70a5522e37f8f893a8509c90869@[::]:30303
node0_1  | INFO [08-20|14:03:35] HTTP endpoint opened: http://127.0.0.1:8545
node0_1  | INFO [08-20|14:03:35] RLPx listener up                         self=enode://0472e9cadfd737612a13577d8ed91b6a2ead8f0c337486f7e414fd46e0a03fdb7700ba9d3ee92a34be571bd457a4f7da3be9c70a5522e37f8f893a8509c90869@[::]:30303
node0_1  | INFO [08-20|14:03:35] IPC endpoint opened: /root/.ethereum/geth.ipc
node0_1  | INFO [08-20|14:03:38] Unlocked account                         address=0xbfdae52c9309862a3c491ada373afa56cb8b3b34
node0_1  | ENDOE="enode://0472e9cadfd737612a13577d8ed91b6a2ead8f0c337486f7e414fd46e0a03fdb7700ba9d3ee92a34be571bd457a4f7da3be9c70a5522e37f8f893a8509c90869@192.168.224.2:30303"
node0_1  | ENODE_BOOT="enode://0472e9cadfd737612a13577d8ed91b6a2ead8f0c337486f7e414fd46e0a03fdb7700ba9d3ee92a34be571bd457a4f7da3be9c70a5522e37f8f893a8509c90869@192.168.224.2:30303"
node0_1  | WARN [08-20|14:03:40] Removing static dial candidate           id=0472e9cadfd73761 addr=192.168.224.2:30303 err="is self"
node0_1  | true
node0_1  | null
node0_1  | INFO [08-20|14:03:40] Transaction pool price threshold updated price=18000000000
node0_1  | INFO [08-20|14:03:40] Starting mining operation
node0_1  | INFO [08-20|14:03:40] Commit new mining work                   number=1 txs=0 uncles=0 elapsed=92.3µs
node0_1  | INFO [08-20|14:03:40] Successfully sealed new block            number=1 hash=12aae8…05bf3b
node0_1  | INFO [08-20|14:03:40] 🔨 mined potential block                  number=1 hash=12aae8…05bf3b
node0_1  | INFO [08-20|14:03:40] Commit new mining work                   number=2 txs=0 uncles=0 elapsed=285.507µs

```


### 查詢連線節點

```
$ docker-compose exec node0 geth --exec 'admin.peers' attach

[{
    caps: ["eth/63"],
    id: "238755e1222133ec66e634b06154ce3b697e8550fcd61bc6295586cce2280827222193fd99eb82bd1a297a5f625194e9d833e6ab4a784b76bd0e9513ce0dae91",
    name: "Geth/v1.6.7-stable/linux-amd64/go1.9beta2",
    network: {
      localAddress: "192.168.224.2:30303",
      remoteAddress: "192.168.224.4:48814"
    },
    protocols: {
      eth: {
        difficulty: 1,
        head: "0xfd59ca2499a02b85a01c9ba569d1f228beee035bf9d4a87c82b13dd8395cacc2",
        version: 63
      }
    }
}, {
    caps: ["eth/63"],
    id: "c5cd06e9aa0a7ec6603b4c919d79f6f632e611bc2d0dd45ff4264b89c20c79b991654fbdea3e4e81ff11d7afd8df5d872037906cf2fe0b72765c910472a7b8db",
    name: "Geth/v1.6.7-stable/linux-amd64/go1.9beta2",
    network: {
      localAddress: "192.168.224.2:30303",
      remoteAddress: "192.168.224.3:59156"
    },
    protocols: {
      eth: {
        difficulty: 1,
        head: "0xfd59ca2499a02b85a01c9ba569d1f228beee035bf9d4a87c82b13dd8395cacc2",
        version: 63
      }
    }
}, {
    caps: ["eth/63"],
    id: "ecf65de2c5ad3452cf62c8debc1e8c886c45e6f0d3fd10aacb14dfd3e8cb9e4acad2e99df4976f38e3ad58b578fa46cdae21b0d7a126742556c22fc7b4f92fa0",
    name: "Geth/v1.6.7-stable/linux-amd64/go1.9beta2",
    network: {
      localAddress: "192.168.224.2:30303",
      remoteAddress: "192.168.224.5:54544"
    },
    protocols: {
      eth: {
        difficulty: 1,
        head: "0xfd59ca2499a02b85a01c9ba569d1f228beee035bf9d4a87c82b13dd8395cacc2",
        version: 63
      }
    }
}]

```

### 查詢每個節點帳戶

```

dltdojo:poa$ docker-compose exec node0 geth --exec 'eth.accounts[0]' attach

"0xbfdae52c9309862a3c491ada373afa56cb8b3b34"

dltdojo:poa$ docker-compose exec node1 geth --exec 'eth.accounts[0]' attach
"0x62aab5accd6a7ebd0339665ac05435d766924c3a"

dltdojo:poa$ docker-compose exec node2 geth --exec 'eth.accounts[0]' attach
"0x800f887de0f81ce889238fd7f14c4324f5160b8d"

dltdojo:poa$ docker-compose exec node3 geth --exec 'eth.accounts[0]' attach
"0xa4d132c893deefbb95c3af5fd45a25c15842ad9c"


```

### node0轉帳node2

node0與node1在創始塊有預先分配ether，適合用來轉出。

```
$ docker-compose exec node0 bash
  bash-4.3#  cat /dltdojo/foonet/node0/passfile ; echo
  bash-4.3# MDFiYTQ3MTljODBi
  bash-4.3#  ./info.sh foonet
  bash-4.3# geth attach
  > admin.peers
  > eth.blockNumber
  > loadScript("/opt/geth/gethload.js")
  > checkAllBalances();
  > personal.unlockAccount(eth.accounts[0])
  > Passphrase: MDFiYTQ3MTljODBi
  > true
  > var toaddr="0x800f887de0f81ce889238fd7f14c4324f5160b8d"
  > eth.sendTransaction({from:eth.accounts[0], to:toaddr, value: web3.toWei(99.88, "ether")})
  "0xa8807328c755e242e439dd22fbca17a648e7979ae3a9c8480082101cc053d17a"
  > exit
  bash-4.3# exit
  exit


$ docker-compose exec node2 bash
  # geth attach
  > admin.peers
  > eth.blockNumber
  > loadScript("/opt/geth/gethload.js")
  > checkAllBalances()
    eth.accounts[0]:      0x800f887de0f81ce889238fd7f14c4324f5160b8d      balance: 99.88 ether
     Total balance: 99.88 ether

```

### 停止所有容器關掉網路

```
$ docker-compose stop
$ docker-compose rm
```