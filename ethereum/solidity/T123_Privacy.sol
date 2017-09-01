pragma solidity ^0.4.14;
// 
// http://remix.ethereum.org/
// Everything on the Ethereum blockchain is public.
// 

contract Foo {
    
    uint public a = 10 ;
    
    uint private b = 8 ;
    
    function set(uint _b){
        b = _b;
    }
}

contract FooTest {
    
    function testPrivacy() {
        Foo foo = new Foo();
        require(foo.a() == 10);
    }
    
    // b ?
}

//
// 1. initial state b
//
// Foo.Create - Launch debuger
// b = 8 => PUSH1 08
//

// 2. find state b in function set()
//
// foo.set(9) - Launch debuger
// Functions :  0dbe671f a() 60fe47b1 set(uint256)
// calldata : 0x60fe47b10000000000000000000000000000000000000000000000000000000000000009
// instructions : SSTORE
// stack 0x1 0x9
// 

// 3. find state b in Foo At Address
// Foo At Address
// a() Launch debugger
// Storagecompletely loaded
// key: 0x0000000000000000000000000000000000000000000000000000000000000001
//

// TODO
// set a new number and find it.