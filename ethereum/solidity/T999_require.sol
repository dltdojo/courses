pragma solidity ^0.4.15;

// solidity - Difference between require and assert and the difference between revert and throw - Ethereum Stack Exchange 
// https://ethereum.stackexchange.com/questions/15166/difference-between-require-and-assert-and-the-difference-between-revert-and-thro/
// solidity 0.4.10 require vs throw - Ethereum Stack Exchange https://ethereum.stackexchange.com/questions/13337/solidity-0-4-10-require-vs-throw
// throw is now (v0.4.13) deprecated, 
// use require for external input checks, 
// assert for internal status checks and revert to show an explicit error to the user.

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