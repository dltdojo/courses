pragma solidity ^0.4.10;

// https://github.com/trufflesuite/truffle/blob/beta/lib/testing/Assert.sol
import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Wallet.sol";

contract TestWallet {

  // Truffle will send the TestContract one Ether after deploying the contract.
  uint public initialBalance = 50 ether;

  function beforeAll() {
    require(this.balance== 50 ether);
  }

  function beforeEach() {
    //
  }

  function _initWallet(uint required) returns (Wallet){
    address[] memory owners = new address[](1);
    owners[0]=msg.sender;
    uint daylimit = 10 ether;
    Wallet w = new Wallet(owners, required, daylimit);
    return w;
  }

  function testInitContract() {
    Wallet w = _initWallet(1);
    w.transfer(2 ether);
    require(w.balance==2 ether);
    Assert.equal(w.balance, 2 ether, "transfer() shoule be ok");
    require(w.isOwner(msg.sender));
    Assert.isTrue(w.isOwner(msg.sender),"isOwner() shoule be true");
    require(w.isOwner(this));
    require(!w.isOwner(0xdeed));
    Assert.isFalse(w.isOwner(0xdeed),"isOwner(0xdeed) shoule be false");
  }

}
