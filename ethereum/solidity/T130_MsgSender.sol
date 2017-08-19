pragma solidity ^0.4.14;
// https://ethereum.github.io/browser-solidity/
// this, selfdestruct http://solidity.readthedocs.io/en/develop/units-and-global-variables.html?#contract-related
// fallback http://solidity.readthedocs.io/en/develop/contracts.html#fallback-function
// event http://solidity.readthedocs.io/en/develop/contracts.html#events

contract Base {
    event InfoEvent(address contractAddress,  uint balance);
    function info(){
       InfoEvent(this, this.balance);
    }
}

contract Foo is Base {
  
  function Foo() payable {
     
  }

  function() payable {
    
  }
  
  function kill(){
      selfdestruct(msg.sender);
  }
}

// https://ethereum.stackexchange.com/questions/1891/whats-the-difference-between-msg-sender-and-tx-origin
contract Alice is Base {
    
    Foo foo;
    
    function Alice(address _fooAddress) payable {
        foo = Foo(_fooAddress);
    }
    
    function() payable {
       
    }

    function testFooSend(){
        // Warning: Failure condition of 'send' ignored. Consider using 'transfer' instead.
        foo.send(1 ether);
        // foo.transfer(1 ether);
    }
    
    function testFooKill(){
        foo.kill();
    }
    
    //function kill(){
    //  selfdestruct(msg.sender);
    //}
}

contract Bob is Base {
    
    Foo foo;
    Alice alice;
    
    function Bob(address _fooAddress, address _aliceAddress) payable {
        foo = Foo(_fooAddress);
        alice = Alice(_aliceAddress);
    }
    
    function() payable {
       
    }

    function testFooSend(){
        foo.transfer(3 ether);
    }
    
    function testFooKill(){
        foo.kill();
    }
    
    function testAliceFooSend(){
        alice.testFooSend();
    }
    
    function testAliceFooKill(){
        alice.testFooKill();
    }
}