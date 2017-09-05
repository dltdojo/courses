# Ethereum 以太坊開發課程 2017-09

## 課程環境

* nodejs
* docker
* VirtualBox
* Visual Studio Code
* ssh client ( PuTTY http://www.putty.org/ )
* https://github.com/dltdojo/courses

## Ethereum 介紹 

* http://truffleframework.com/tutorials/ethereum-overview

## 收發乙太幣資產 MyEtherWallet/MetaMask

* https://faucet.rinkeby.io/
* https://github.com/kovan-testnet/faucet
* https://www.myetherwallet.com/
* https://metamask.io/

Rinkeby Testnet

* PrivateKey : 0x43c46fd957c001c88a9206900e35325169ba60d398bdb6f1e317a1b62e27ac15
* Address: https://rinkeby.etherscan.io/address/0xd7C3C049a0D010cCEc02078cabDe42818B5880C2

## 建立與執行智能合約

* coin.sol
* https://remix.ethereum.org
* JavaScript VM

## 區塊鏈練習

How does blockchain really work? I built an app to show you. https://medium.freecodecamp.org/how-does-blockchain-really-work-i-built-an-app-to-show-you-6b70cd4caf7d

```
$ sudo npm install -g blockchain-cli
$ blockchain
👋  Welcome to Blockchain CLI!

  Commands:

    help [command...]      Provides help for a given command.
    exit                   Exits application.
    blockchain             See the current state of the blockchain.
    mine <data>            Mine a new block. Eg: mine hello!
    open <port>            Open port to accept incoming connections. Eg:
                           open 2727
    connect <host> <port>  Connect to a new peer. Eg: connect localhost
                           2727
    peers                  Get the list of connected peers.
    discover               Discover new peers from your connected peers.

blockchain → blockchain
┌─────────────────────────────────────────┐
│            🏆  Genesis Block             │
├────────────────────┬────────────────────┤
│ ⏮  Previous Hash   │ 0                  │
├────────────────────┼────────────────────┤
│ 📅  Timestamp       │ Thu, 27 Jul 2017   │
│                    │ 02:30:00 GMT       │
├────────────────────┼────────────────────┤
│ 📄  Data            │ Welcome to         │
│                    │ Blockchain CLI!    │
├────────────────────┼────────────────────┤
│ 📛  Hash            │ 0000018035a828da0… │
├────────────────────┼────────────────────┤
│ 🔨  Nonce           │ 56551              │
└────────────────────┴────────────────────┘
blockchain → mine dltdojo
💶  Mining new block.
┌─────────────────────────────────────────┐
│               ⛓  Block #1               │
├────────────────────┬────────────────────┤
│ ⏮  Previous Hash   │ 0000018035a828da0… │
├────────────────────┼────────────────────┤
│ 📅  Timestamp       │ Tue, 05 Sep 2017   │
│                    │ 14:12:50 GMT       │
├────────────────────┼────────────────────┤
│ 📄  Data            │ dltdojo            │
├────────────────────┼────────────────────┤
│ 📛  Hash            │ 00005e452a38e906c… │
├────────────────────┼────────────────────┤
│ 🔨  Nonce           │ 38355              │
└────────────────────┴────────────────────┘
🎉  Congratulations! A new block was mined. 💎
⬆  Sending peer latest block
//
// blockchain-cli open 5000 in another session
// mine dltdojohaha 
//
blockchain → connect localhost 5000
👥  Successfully connected to a new peer!
⬆  Asking peer for latest block
⬇  Peer requested for latest block.
⬆  Sending peer latest block
⬇  Peer sent over single block.
💤  Received latest block is not longer than current blockchain. Do nothing
⬇  Peer sent over single block.
💤  Received latest block is not longer than current blockchain. Do nothing
⬇  Peer sent over single block.
🐢  Blockchain possibly behind. Received latest block is #2. Current latest block is #1.
👍  Previous hash received is equal to current hash. Append received block to blockchain.
⬆  Sending peer latest block
blockchain → blockchain
┌─────────────────────────────────────────┐
│            🏆  Genesis Block             │
├────────────────────┬────────────────────┤
│ ⏮  Previous Hash   │ 0                  │
├────────────────────┼────────────────────┤
│ 📅  Timestamp       │ Thu, 27 Jul 2017   │
│                    │ 02:30:00 GMT       │
├────────────────────┼────────────────────┤
│ 📄  Data            │ Welcome to         │
│                    │ Blockchain CLI!    │
├────────────────────┼────────────────────┤
│ 📛  Hash            │ 0000018035a828da0… │
├────────────────────┼────────────────────┤
│ 🔨  Nonce           │ 56551              │
└────────────────────┴────────────────────┘
┌─────────────────────────────────────────┐
│               ⛓  Block #1               │
├────────────────────┬────────────────────┤
│ ⏮  Previous Hash   │ 0000018035a828da0… │
├────────────────────┼────────────────────┤
│ 📅  Timestamp       │ Tue, 05 Sep 2017   │
│                    │ 14:12:50 GMT       │
├────────────────────┼────────────────────┤
│ 📄  Data            │ dltdojo            │
├────────────────────┼────────────────────┤
│ 📛  Hash            │ 00005e452a38e906c… │
├────────────────────┼────────────────────┤
│ 🔨  Nonce           │ 38355              │
└────────────────────┴────────────────────┘
┌─────────────────────────────────────────┐
│               ⛓  Block #2               │
├────────────────────┬────────────────────┤
│ ⏮  Previous Hash   │ 00005e452a38e906c… │
├────────────────────┼────────────────────┤
│ 📅  Timestamp       │ Tue, 05 Sep 2017   │
│                    │ 14:31:45 GMT       │
├────────────────────┼────────────────────┤
│ 📄  Data            │ dltdojohaha        │
├────────────────────┼────────────────────┤
│ 📛  Hash            │ 0000f9ac06069e786… │
├────────────────────┼────────────────────┤
│ 🔨  Nonce           │ 102900             │
└────────────────────┴────────────────────┘
blockchain → exit

```

## 下載課程程式碼

新建

```
$ cd /home/dltdojo/smb
$ git clone git@github.com:dltdojo/courses.git
$ cd courses
```

更新

```
$ cd /home/dltdojo/smb/courses
$ git pull
```