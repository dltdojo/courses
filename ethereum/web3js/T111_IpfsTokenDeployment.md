### start lite-server

```
$ lite-server 
```

### ipfs website

open another ssh session 

```
$ cd /tmp
$ mkdir siteroot
$ cd siteroot
$ wget -E -H -k -K -p -np -l 1 http://localhost:3000/index.html
$ wget -E -H -k -K -p -np -l 1 http://localhost:3000/T107_TokenDeployment.html

$ mv localhost\:3000 root
$ tree
.
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

$ cd ..
$ ipfs init
$ ipfs add -r siteroot

added QmQNaForbbifk4x2d93XJFa8m88nCT9DmkihGmPBiDaJXa siteroot/cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js
added Qmb6oefSKdMcXQYWczkAhHQJbr2aQ5GAyEqChmfmVug5Zy siteroot/rawgit.com/ethereum/web3.js/master/dist/web3.js
added QmRABM1czaAM8KRckuAxjvTo9wJ1bjgTLGvLfki8JuNqVN siteroot/root/T107_TokenDeployment.html
added QmQNxKQzvfqiScudosZwbg38n12GoGq3DWeA68fjVcuTPt siteroot/root/T107_TokenDeployment.html.orig
added QmacqtJAo2KtAYYyDMR1qGwsFDkRFzPukBNH96GexC7r6Q siteroot/root/index.html
added QmfTttVuKEXDXmskswRYtQL13ZEkjRPLbVTh16gupDsqLz siteroot/root/index.html.orig
added Qmey1m6TsgaiKcihCEkVEj2AHqEzpQ7eLBrwyYjWCzXp2C siteroot/root/token-contract.js
added QmbPrx37fVwE5eopMA5BHxDa2TYddBpZTG8bTN8AMfk9mu siteroot/unpkg.com/robots.txt
added Qmbe95qhKARsgbNFvm5v6N7UMWhn3C8fUTNCS3hUu52rVQ siteroot/unpkg.com/vue
added QmVGZJapmkvdFiZ1SMNx8CndFVDqdCjHFW6q6QVLzMQZs5 siteroot/cdn.jsdelivr.net/lodash/4.17.4
added QmW9inKB4BLBZjnuDZTcLvQX8zp1Sje4CDEjaFvaV41v3s siteroot/cdn.jsdelivr.net/lodash
added QmVVrDGvce7tPd7LFoDqcBuSSBPET4iFtiz327FDYZ5TyC siteroot/cdn.jsdelivr.net
added QmQiwasmmcFiHP7B4PvggmZti2uBDjwGdZ2S3u34JrFpfG siteroot/rawgit.com/ethereum/web3.js/master/dist
added QmYiJGrkKp1DPY4fCrm7cG11vWMVHWcuZsTbSUKKV7s7aA siteroot/rawgit.com/ethereum/web3.js/master
added QmfUnw1qvZuuJ5Lhnxca5Hxa2HmY8PCVeAfwq8ySv2gjjC siteroot/rawgit.com/ethereum/web3.js
added Qmdo2HDQXA4zLTarhWX472WssG1zcEV742YsTC9J8thSy3 siteroot/rawgit.com/ethereum
added QmeFNqKJabgU6nXeEnH7C78i2ZDodQReEchk4YqRwwCrnk siteroot/rawgit.com
added QmZhWztYyi4eFs1qoyY2PUWttqCHa6qKH4wGQyb6NnQRy9 siteroot/root
added QmYiS4SnVpySZRmQm3h7F9iJeonSAUFv3V7YpYXM1XZbFg siteroot/unpkg.com
added QmRE8TTdtEj5NxbqaNn6Ue8JTfFeE57qcwHCN2B484jU69 siteroot

$ ipfs daemon
Initializing daemon...
Adjusting current ulimit to 2048...
Successfully raised file descriptor limit to 2048.
Swarm listening on /ip4/10.0.2.15/tcp/4001
Swarm listening on /ip4/127.0.0.1/tcp/4001
Swarm listening on /ip4/172.17.0.1/tcp/4001
Swarm listening on /ip4/172.18.0.1/tcp/4001
Swarm listening on /ip4/172.19.0.1/tcp/4001
Swarm listening on /ip4/172.20.0.1/tcp/4001
Swarm listening on /ip4/172.21.0.1/tcp/4001
Swarm listening on /ip4/172.22.0.1/tcp/4001
Swarm listening on /ip4/172.23.0.1/tcp/4001
Swarm listening on /ip4/192.168.59.103/tcp/4001
Swarm listening on /ip6/::1/tcp/4001
API server listening on /ip4/127.0.0.1/tcp/5001
Gateway (readonly) server listening on /ip4/127.0.0.1/tcp/8080
Daemon is ready

```

* QmRE8TTdtEj5NxbqaNn6Ue8JTfFeE57qcwHCN2B484jU69 siteroot
* http://gateway.ipfs.io/ipfs/QmRE8TTdtEj5NxbqaNn6Ue8JTfFeE57qcwHCN2B484jU69
* https://gateway.ipfs.io/ipfs/QmRE8TTdtEj5NxbqaNn6Ue8JTfFeE57qcwHCN2B484jU69/root/T107_TokenDeployment.html
* Why do IPFS hashes start with "Qm"? · Issue #22 · ipfs/faq https://github.com/ipfs/faq/issues/22

### References

* https://github.com/dltdojo/container/tree/master/projects/ipfs
* https://github.com/dltdojo/container/tree/master/projects/swarm

節點上傳一個檔案自動散佈到其他節點

* ipfs需要每個節點進行pin add來得到同一檔案
* ipfs-cluster用ipfs-cluster-ctl peers add加入節點可同步檔案
* ethereum swarm利用enode url加入節點上傳即同步到其他同一個網路節點

可能問題

* ipfs-cluster是0.0.1版本測試概念階段
* ethereum swarm只是測試概念版本階段