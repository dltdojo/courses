### solidity

* http://solidity.readthedocs.io/
* ethereum/browser-solidity: Browser-Only Solidity IDE and Runtime Environment https://github.com/ethereum/browser-solidity
* https://remix.ethereum.org
* https://ethereum.github.io/browser-solidity/
* https://github.com/dltdojo/container/tree/master/dltdojo/browser-solidity
* MetaMask https://metamask.io/
* fivedogit/solidity-baby-steps https://github.com/fivedogit/solidity-baby-steps/tree/master/contracts

### local browser-solidity node

* Remix Solidity IDE http://<VMIP>:8080/
* Bitcoin core 0.14.1 http://<VMIP>:12750/
* container/dltdojo/geth at master · dltdojo/container https://github.com/dltdojo/container/tree/master/dltdojo/geth
* container/dltdojo/browser-solidity at master · dltdojo/container https://github.com/dltdojo/container/tree/master/dltdojo/browser-solidity
* container/dltdojo/abe at master · dltdojo/container https://github.com/dltdojo/container/tree/master/dltdojo/abe

```
$ docker-compose up -d remix
$ docker-compose up -d gethdev
$ docker-compose up -d bitcoind
// docker-compose stop
```