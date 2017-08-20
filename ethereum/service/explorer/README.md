## Ethereum 區塊瀏覽器

* carsenk/explorer: Ethereum Block Explorer (ETHExplorer V2) - https://github.com/carsenk/explorer
* exploere http://DEVIP:8000/
* 新增合約與交易 remix http://DEVIP:8080/
* web3 http provider http://DEVIP:8545/
* 修改 docker-compose.yml裡 start.sh 192.168.2.103 成為 start.sh DEVIP
* carsenk/explorer非使用資料庫而直接使用web3查節點，導致生成區塊過快網頁容易停滯現象
* explorer/app/scripts/controllers at master · carsenk/explorer  https://github.com/carsenk/explorer/tree/master/app/scripts/controllers

### 啟動區塊瀏覽器 carsenk/explorer

```
$ docker-compose up -d
```

### 停止區塊瀏覽器 carsenk/explorer

```
$ docker-compose stop
```