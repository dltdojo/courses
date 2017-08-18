* https://ethereum.github.io/browser-solidity/
### openzeppelin

* OpenZeppelin/zeppelin-solidity: OpenZeppelin, a framework to build secure smart contracts on Ethereum  https://github.com/OpenZeppelin/zeppelin-solidity
* zeppelin-solidity/ZeppelinAudit.md at master · OpenZeppelin/zeppelin-solidity  https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/audit/ZeppelinAudit.md

### contracts/token/BasicToken.sol#L13

* https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/token/BasicToken.sol#L13

```
using SafeMath for uint256;

function transfer(address _to, uint256 _value) returns (bool) {
    balances[msg.sender] = balances[msg.sender].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(msg.sender, _to, _value);
    return true;
  }
```

* https://github.com/ConsenSys/Tokens/blob/master/contracts/StandardToken.sol

```
 function transfer(address _to, uint256 _value) returns (bool success) {
        //Default assumes totalSupply can't be over max (2^256 - 1).
        //If your token leaves out totalSupply and can issue more tokens as time goes on, you need to check if it doesn't wrap.
        //Replace the if with this one instead.
        //require(balances[msg.sender] >= _value && balances[_to] + _value > balances[_to]);
        require(balances[msg.sender] >= _value);
        balances[msg.sender] -= _value;
        balances[_to] += _value;
        Transfer(msg.sender, _to, _value);
        return true;
    }
```