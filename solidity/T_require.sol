pragma solidity ^0.4.15;

// solidity - Difference between require and assert and the difference between revert and throw - Ethereum Stack Exchange 
// https://ethereum.stackexchange.com/questions/15166/difference-between-require-and-assert-and-the-difference-between-revert-and-thro/

contract Foo {
  function mul2Require(uint amount) constant returns (uint) {
    require(amount < 100);
    return amount*2;
  }

    function mul2Assert(uint amount)  constant returns (uint) {
    assert(amount < 100);
    return amount*2;
  }
}