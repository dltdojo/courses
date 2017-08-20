### Test First or TDD

* Test-driven development https://zh.wikipedia.org/wiki/%E6%B5%8B%E8%AF%95%E9%A9%B1%E5%8A%A8%E5%BC%80%E5%8F%91
* Add support for custom compiler version · Issue #265 · trufflesuite/truffle  https://github.com/trufflesuite/truffle/issues/265

log details

```
$ cd multisig && truffle init
$ curl -sL https://raw.githubusercontent.com/ConsenSys/MultiSigWallet/master/contracts/solidity/MultiSigWallet.sol -o contracts/MultiSigWallet.sol
$ truffle test

/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:1:1: SyntaxError: Source file requires different compiler version (current compiler is 0.4.13+commit.0fb4cb1a.Emscripten.clang - note that nightly builds are considered to be strictly less than the released version
pragma solidity 0.4.4;
^---------------------^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:36:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:42:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:48:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:54:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:60:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:66:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:72:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:78:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:87:13: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
            throw;
            ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:111:17: Warning: "throw" is deprecated in favour of "revert()", "require()" and "assert()".
                throw;
                ^---^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:30:9: Warning: Variable is declared as a storage pointer. Use an explicit "storage" keyword to silence this warning.
        bytes data;
        ^--------^
,/home/dltdojo/smb/courses/ethereum/truffle/multisig/contracts/MultiSigWallet.sol:227:13: Warning: Variable is declared as a storage pointer. Use an explicit "storage" keyword to silence this warning.
            Transaction tx = transactions[transactionId];
            ^------------^
Compiliation failed. See above.

```

### upgrade MultiSigWallet.sol

* Type Checker: Fix invalid "specify storage keyword" warning for reference members of structs. https://github.com/ethereum/solidity/blob/develop/Changelog.md#0414-2017-07-31
* Upgrade to solidity 0.4.13 · Issue #484 · trufflesuite/truffle https://github.com/trufflesuite/truffle/issues/484

```
$ truffle test
```

### LogoVote TestCase

LogoVote2017/taipei-eth-logovote/test at master · EtherTW/LogoVote2017  https://github.com/EtherTW/LogoVote2017/tree/master/taipei-eth-logovote/test
