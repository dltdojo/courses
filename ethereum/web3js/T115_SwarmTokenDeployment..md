### swarm private net

* https://github.com/dltdojo/container/blob/master/projects/swarm/README.md
* Deploy static sites and Dapps using swarm and ENS › Martin Wagner  https://blog.mawalabs.de/ethereum/decentralized/blockchain/2017/08/18/deploy-ENS-static-page/

siteroot files

```
$ cd /tmp/siteroot
$ tree /tmp/siteroot
/tmp/siteroot
├── cdn.jsdelivr.net
│   └── lodash
│       └── 4.17.4
│           └── lodash.min.js
├── rawgit.com
│   └── ethereum
│       └── web3.js
│           └── master
│               └── dist
│                   └── web3.js
├── root
│   ├── index.html
│   ├── index.html.orig
│   ├── T107_TokenDeployment.html
│   ├── T107_TokenDeployment.html.orig
│   └── token-contract.js
└── unpkg.com
    ├── robots.txt
    └── vue

10 directories, 9 files
```

start swarm private net

```
$ cd /tmp
$ cp /home/dltdojo/smb/courses/ethereum/web3js/docker-compose.swarm.yml docker-compose.yml
$ docker-compose up -d
Creating network "tmp_default" with the default driver
Creating tmp_snode2_1 ...
Creating tmp_snode1_1 ...
Creating tmp_snode2_1
Creating tmp_snode1_1 ... done
$ docker-compose exec snode2 geth --exec "bzz.info" attach /tmp/BZZ/bzzd.ipc

{
  Branches: 128,
  BucketSize: 4,
  BzzKey: "0x7ed81a86c75e834c714a6ca6053e80168c4b950ba12571365fd6af2d92ea9a74",
  CacheCapacity: 5000,
  CallInterval: 3000000000,
  ChunkDbPath: "/tmp/BZZ/swarm/bzz-4f554b71a36024be4f5bb9cf25d8a8e7603f4c75/chunks",
  ConnRetryExp: 2,
  ContractAbi: "[{\"constant\":false,\"inputs\":[],\"name\":\"kill\",\"outputs\":[],\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"name\":\"\",\"type\":\"address\"}],\"name\":\"sent\",\"outputs\":[{\"name\":\"\",\"type\":\"uint256\"}],\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"name\":\"beneficiary\",\"type\":\"address\"},{\"name\":\"amount\",\"type\":\"uint256\"},{\"name\":\"sig_v\",\"type\":\"uint8\"},{\"name\":\"sig_r\",\"type\":\"bytes32\"},{\"name\":\"sig_s\",\"type\":\"bytes32\"}],\"name\":\"cash\",\"outputs\":[],\"type\":\"function\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"name\":\"deadbeat\",\"type\":\"address\"}],\"name\":\"Overdraft\",\"type\":\"event\"}]",
  ContractCode: "0x606060405260008054600160a060020a031916331790556101ff806100246000396000f3606060405260e060020a600035046341c0e1b581146100315780637bf786f814610059578063fbf788d614610071575b005b61002f60005433600160a060020a03908116911614156100bd57600054600160a060020a0316ff5b6100ab60043560016020526000908152604090205481565b61002f600435602435604435606435608435600160a060020a03851660009081526001602052604081205485116100bf575b505050505050565b60408051918252519081900360200190f35b565b50604080516c0100000000000000000000000030600160a060020a0390811682028352881602601482015260288101869052815190819003604801812080825260ff861660208381019190915282840186905260608301859052925190926001926080818101939182900301816000866161da5a03f11561000257505060405151600054600160a060020a0390811691161461015a576100a3565b600160a060020a038681166000908152600160205260409020543090911631908603106101b357604060008181208790559051600160a060020a0388169190819081818181818881f1935050505015156100a357610002565b60005460408051600160a060020a03929092168252517f2250e2993c15843b32621c89447cc589ee7a9f049c026986e545d3c2c0c6f9789181900360200190a185600160a060020a0316ff",
  DbCapacity: 5000000,
  EnsRoot: "0x112234455c3a32fd11230c42e7bccd4a84e02010",
  Hash: "SHA3",
  InitialRetryInterval: 42000000,
  KadDbPath: "/tmp/BZZ/swarm/bzz-4f554b71a36024be4f5bb9cf25d8a8e7603f4c75/bzz-peers.json",
  KeyBufferSize: 1024,
  ListenAddr: "127.0.0.1",
  MaxIdleInterval: 42000000000,
  MaxProx: 8,
  NetworkId: 322,
  Path: "/tmp/BZZ/swarm/bzz-4f554b71a36024be4f5bb9cf25d8a8e7603f4c75",
  Port: "8500",
  ProxBinSize: 2,
  PublicKey: "0x04683d7eb9914c172b83dda0298880ab48d49f985f4acd94da25c966aa52cdf8adaaac64ea9f18ac3ca0494aef3752b6c08a19148d8881016106e75403215518c4",
  PurgeInterval: 151200000000000,
  Radius: 0,
  RequestDbBatchSize: 512,
  RequestDbPath: "/tmp/BZZ/swarm/bzz-4f554b71a36024be4f5bb9cf25d8a8e7603f4c75/requests",
  Swap: {
    AutoCashInterval: 300000000000,
    AutoCashThreshold: 50000000000000,
    AutoDepositBuffer: 100000000000000,
    AutoDepositInterval: 300000000000,
    AutoDepositThreshold: 50000000000000,
    Beneficiary: "0x4f554b71a36024be4f5bb9cf25d8a8e7603f4c75",
    BuyAt: 20000000000,
    Contract: "0x0000000000000000000000000000000000000000",
    DropAt: 10000,
    PayAt: 100,
    PublicKey: "0x04683d7eb9914c172b83dda0298880ab48d49f985f4acd94da25c966aa52cdf8adaaac64ea9f18ac3ca0494aef3752b6c08a19148d8881016106e75403215518c4",
    SellAt: 20000000000
  },
  SyncBatchSize: 128,
  SyncBufferSize: 128,
  SyncCacheSize: 1024,
  SyncModes: [true, true, true, true, false],
  SyncPriorities: [2, 1, 1, 0, 0]
}
```

swarm up siteroot

```
$ docker-compose exec snode2 bash

bash-4.3# cd /opt/ddj/
bash-4.3# ls
siteroot
bash-4.3# tree
.
└── siteroot
    ├── cdn.jsdelivr.net
    │   └── lodash
    │       └── 4.17.4
    │           └── lodash.min.js
    ├── rawgit.com
    │   └── ethereum
    │       └── web3.js
    │           └── master
    │               └── dist
    │                   └── web3.js
    ├── root
    │   ├── T107_TokenDeployment.html
    │   ├── T107_TokenDeployment.html.orig
    │   ├── index.html
    │   ├── index.html.orig
    │   └── token-contract.js
    └── unpkg.com
        ├── robots.txt
        └── vue

11 directories, 9 files
bash-4.3# swarm --recursive --defaultpath siteroot/root/index.html up siteroot
413d7b64a92dd79ccd59dad388049ec6988608da50365f19b3ee226ad0685c55

$ curl -s http://localhost:8500/bzz:/413d7b64a92dd79ccd59dad388049ec6988608da50365f19b3ee226ad0685c55

<head>
        <meta charset="UTF-8">
        <title>etheereum/web3js</title>
        <style>
            body {
                width: 30em;
                margin: 0 auto;
            }
        </style>
        <script src="../unpkg.com/vue"></script>
    </head>

    <body>
        <h2>Hello World web3.js</h2>
        <div id="app">
            <div>
                <div v-for="html in htmls">
                    <h3><a :href="html">{{html}}</a></h3>
                </div>
            </div>
        </div>
        <script>
            var app;
            var data = {
                message: 'Hello Vue! 2017 & Web3js',
                htmls: ['T101_GetBlockAndTxs.html','T103_SendRawTx.html','T105_SendTx.html', 'T107_TokenDeployment.html']
            };
            var app = new Vue({
                el: '#app',
                data: data
            })
        </script>
    </body>

    </html>

$ curl -s http://localhost:8500/bzz:/413d7b64a92dd79ccd59dad388049ec6988608da50365f19b3ee226ad0685c55/root/T107_TokenDeployment.html

```

stop swarm private net

```
$ cd /tmp
$ docker-compose stop
```