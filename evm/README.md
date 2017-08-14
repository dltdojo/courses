* pirapira/awesome-ethereum-virtual-machine: Ethereum Virtual Machine Awesome List https://github.com/pirapira/awesome-ethereum-virtual-machine
* evm-tools/guide.md at master · CoinCulture/evm-tools https://github.com/CoinCulture/evm-tools/blob/master/analysis/guide.md


### ethereumjs-vm

```
$ node js/runcode-all.js
```

### browser-solidity

* https://ethereum.github.io/browser-solidity/

T01_StateVariable

```
pragma solidity ^0.4.15;
// https://github.com/dltdojo/courses/tree/master/evm
import "github.com/dltdojo/courses/evm/T01_StateVariable.sol";
```

T02_Function

```
pragma solidity ^0.4.15;
// https://github.com/dltdojo/courses/tree/master/evm
import "github.com/dltdojo/courses/evm/T01_StateVariable.sol";
```

### sloc, porosity

* http://solidity.readthedocs.io/en/develop/using-the-compiler.html
* comaeio/porosity: Decompiler for Blockchain-based Ethereum Smart-Contracts https://github.com/comaeio/porosity
* https://github.com/dltdojo/container/tree/master/dltdojo/ethtool

```
$ alias ethtool='docker run -it --rm dltdojo/ethtool'

$ ethtool solc --version
solc, the solidity compiler commandline interface
Version: 0.4.15+commit.bbb8e64f.Linux.g++

$ ethtool cat foo.sol
pragma solidity ^0.4.15;
contract Foo { uint public foo = 5;}

$ ethtool solc --abi foo.sol

======= foo.sol:Foo =======
Contract JSON ABI
[{"constant":true,"inputs":[],"name":"foo","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"}]

$ ethtool solc --bin-runtime foo.sol

======= foo.sol:Foo =======
Binary of the runtime part:
60606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c298557814603d575b600080fd5b3415604757600080fd5b604d6063565b6040518082815260200191505060405180910390f35b600054815600a165627a7a72305820abe9b1ad00ffbd2423e8d19a207a96b933e519f445c6a08911d997e0cf51081c0029

$ ethtool solc --asm foo.sol

======= foo.sol:Foo =======
EVM assembly:
    /* "foo.sol":26:62  contract Foo { uint public foo = 5;} */
  mstore(0x40, 0x60)
    /* "foo.sol":59:60  5 */
  0x5
    /* "foo.sol":41:60  uint public foo = 5 */
  0x0
  sstore
    /* "foo.sol":26:62  contract Foo { uint public foo = 5;} */
  jumpi(tag_1, iszero(callvalue))
  0x0
  dup1
  revert
tag_1:
tag_2:
  dataSize(sub_0)
  dup1
  dataOffset(sub_0)
  0x0
  codecopy
  0x0
  return
stop

sub_0: assembly {
        /* "foo.sol":26:62  contract Foo { uint public foo = 5;} */
      mstore(0x40, 0x60)
      calldataload(0x0)
      0x100000000000000000000000000000000000000000000000000000000
      swap1
      div
      0xffffffff
      and
      dup1
      0xc2985578
      eq
      tag_2
      jumpi
    tag_1:
      0x0
      dup1
      revert
        /* "foo.sol":41:60  uint public foo = 5 */
    tag_2:
      jumpi(tag_3, iszero(callvalue))
      0x0
      dup1
      revert
    tag_3:
      tag_4
      jump(tag_5)
    tag_4:
      mload(0x40)
      dup1
      dup3
      dup2
      mstore
      0x20
      add
      swap2
      pop
      pop
      mload(0x40)
      dup1
      swap2
      sub
      swap1
      return
    tag_5:
      sload(0x0)
      dup2
      jump      // out

    auxdata: 0xa165627a7a72305820abe9b1ad00ffbd2423e8d19a207a96b933e519f445c6a08911d997e0cf51081c0029
}

$ ethtool solc --opcodes foo.sol

======= foo.sol:Foo =======
Opcodes:
PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x5 PUSH1 0x0 SSTORE CALLVALUE ISZERO PUSH1 0x13 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST JUMPDEST PUSH1 0x95 DUP1 PUSH2 0x22 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x60 PUSH1 0x40 MSTORE PUSH1 0x0 CALLDATALOAD PUSH29 0x100000000000000000000000000000000000000000000000000000000 SWAP1 DIV PUSH4 0xFFFFFFFF AND DUP1 PUSH4 0xC2985578 EQ PUSH1 0x3D JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE ISZERO PUSH1 0x47 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST PUSH1 0x4D PUSH1 0x63 JUMP JUMPDEST PUSH1 0x40 MLOAD DUP1 DUP3 DUP2 MSTORE PUSH1 0x20 ADD SWAP2 POP POP PUSH1 0x40 MLOAD DUP1 SWAP2 SUB SWAP1 RETURN JUMPDEST PUSH1 0x0 SLOAD DUP2 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xab 0xe9 0xb1 0xad STOP SELFDESTRUCT 0xbd 0x24 0x23 0xe8 0xd1 SWAP11 KECCAK256 PUSH27 0x96B933E519F445C6A08911D997E0CF51081C002900000000000000


$ CODE=60606040526000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063c298557814603d575b600080fd5b3415604757600080fd5b604d6063565b6040518082815260200191505060405180910390f35b600054815600a165627a7a72305820abe9b1ad00ffbd2423e8d19a207a96b933e519f445c6a08911d997e0cf51081c0029

$ ethtool porosity --code $CODE --decompile
Porosity v0.1 (https://www.comae.io)
Matt Suiche, Comae Technologies <support@comae.io>
The Ethereum bytecode commandline decompiler.
Decompiles the given Ethereum input bytecode and outputs the Solidity code.

Hash: 0xC2985578
executeInstruction: NOT_IMPLEMENTED: REVERT
function func_c2985578 {
      if (!msg.value) {
      }
      return;
}

```

### TODO

* [Request] Simple deploy/call contract example · Issue #128 · ethereumjs/ethereumjs-vm https://github.com/ethereumjs/ethereumjs-vm/issues/128