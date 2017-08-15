Introduction — ENS 0.1 documentation http://docs.ens.domains/en/latest/introduction.html

ENS提供對應到特定名稱的合約服務，ENS合約中的名稱需要轉入以太幣鎖定取得一年所有權，所有人可以添加額外資訊、建立子網域名稱或出租轉賣等。鎖定程序需要五天競標進行，未得標燒毀0.5%外其餘退回。

### dltdojo.eth

* Ethereum Name Service Lookup https://etherscan.io/enslookup?q=dltdojo.eth
* Ethereum Account https://etherscan.io/address/dltdojo.eth
* parity 1.7.0 + chrome parity extension
* https://registrar.ens.domains/#dltdojo

#### tx1 : startAuctionAndBid

* Ethereum Transaction 0xcaebf59ca2bc67a83106e0c8819b8a6f4e2e8d023d9a38f04a32e0fd2a4a3d90 https://etherscan.io/tx/0xcaebf59ca2bc67a83106e0c8819b8a6f4e2e8d023d9a38f04a32e0fd2a4a3d90
* function startAuctionsAndBid(bytes32[] hashes, bytes32 sealedBid) payable https://github.com/ethereum/ens/blob/master/contracts/HashRegistrarSimplified.sol#L369

#### tx2 : unsealBid

* unsealBid(bytes32 _hash, uint256 _value, bytes32 _salt) https://etherscan.io/tx/0xe600f9ed4c86a4a16097ad94a2d7cc0028fcb4a8db3ba4998853a14e4fc85011

#### tx3 : finalizeAuction

* Function: finalizeAuction(bytes32 _hash)
* https://github.com/ethereum/ens/blob/master/contracts/HashRegistrarSimplified.sol#L458
* https://etherscan.io/tx/0x60d3e31e92bae8c2822fd14f258ca59bd4dcad5d1666b0977917b878697a7755

#### tx4 setName 

* Function: setName(string DogName)
* https://github.com/ethereum/ens/blob/master/contracts/ReverseRegistrar.sol#L123
* https://etherscan.io/tx/0x5c1d875ed64d77eb91f8d29bf8196599caabb29291742130e9ca308511581bc1

#### tx5 setResolver

* Function: setResolver(bytes32 node, address resolver)
* https://github.com/ethereum/ens/blob/master/contracts/ENS.sol#L80
* https://etherscan.io/tx/0x67453430deb342cd5ead3aaeba2cddcd98875c31a8b6b38e25c7472483baed64

#### tx6 setAddr

* Function: setAddr(bytes32 node, address addr)
* https://etherscan.io/tx/0x72dc6cb8bf4ceada4401b6a8c4c876796703d8c776f0c8b576bfec463ee5b0b7
* https://github.com/ethereum/ens/blob/master/contracts/PublicResolver.sol#L85

### references

*  ENS-Registrar Ethereum Account 0x6090a6e47849629b7245dfa1ca21d94cd15878ef Info https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef
* CodeTract - Ethereum Name Service (ENS) https://ens.codetract.io/
* A beginner’s guide to buying an ENS domain – The Ethereum Name Service – Medium 
 https://medium.com/the-ethereum-name-service/a-beginners-guide-to-buying-an-ens-domain-3ccac2bdc770
* My cyptocurrency domain name: scottshapiro.eth - scottshapiro.com http://www.scottshapiro.com/ens-cyptocurrency-domain-name-scottshapiro-eth/