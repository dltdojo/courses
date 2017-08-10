Introduction — ENS 0.1 documentation http://docs.ens.domains/en/latest/introduction.html

ENS提供對應到特定名稱的合約服務，ENS合約中的名稱需要轉入以太幣鎖定取得一年所有權，所有人可以添加額外資訊、建立子網域名稱或出租轉賣等。鎖定程序需要五天競標進行，得標後燒毀0.01 ether外其餘退回。

### dltdojo.eth

* parity 1.7.0 + chrome parity extension
* https://registrar.ens.domains/#dltdojo

#### tx : startAuctionAndBid

* Ethereum Transaction 0xcaebf59ca2bc67a83106e0c8819b8a6f4e2e8d023d9a38f04a32e0fd2a4a3d90 https://etherscan.io/tx/0xcaebf59ca2bc67a83106e0c8819b8a6f4e2e8d023d9a38f04a32e0fd2a4a3d90
* function startAuctionsAndBid(bytes32[] hashes, bytes32 sealedBid) payable https://github.com/ethereum/ens/blob/master/contracts/HashRegistrarSimplified.sol#L369

#### tx : unsealBid

* unsealBid(bytes32 _hash, uint256 _value, bytes32 _salt) https://etherscan.io/tx/0xe600f9ed4c86a4a16097ad94a2d7cc0028fcb4a8db3ba4998853a14e4fc85011

#### tx : finalizeAuction

* TODO

### references

*  ENS-Registrar Ethereum Account 0x6090a6e47849629b7245dfa1ca21d94cd15878ef Info https://etherscan.io/address/0x6090a6e47849629b7245dfa1ca21d94cd15878ef
* CodeTract - Ethereum Name Service (ENS) https://ens.codetract.io/
* A beginner’s guide to buying an ENS domain – The Ethereum Name Service – Medium 
 https://medium.com/the-ethereum-name-service/a-beginners-guide-to-buying-an-ens-domain-3ccac2bdc770
* My cyptocurrency domain name: scottshapiro.eth - scottshapiro.com http://www.scottshapiro.com/ens-cyptocurrency-domain-name-scottshapiro-eth/