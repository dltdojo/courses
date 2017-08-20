var MultiSigWallet = artifacts.require("./MultiSigWallet.sol");

contract('MultiSigWallet', function(accounts) {
  
  //
  // https://github.com/trufflesuite/truffle-contract
  //
  // 2-of-3 multisigwallet
  // deployer.deploy(MultiSigWallet, [accounts[0],accounts[1],accounts[2]],2);
  // 
  it("TestMultiSigWallet.sol.testInitial2of3()", function() {
    var msw;
    var txid;
    var balance1
    // If you only want to send Ether to the contract a shorthand is available:
    // instance.send(web3.toWei(1, "ether")).then(function(result) {});
    return MultiSigWallet.deployed().then(function(instance) {
      msw = instance;
      return msw.send(web3.toWei(1.23,"ether"))
    }).then(function(sendResult) {
      balance1 = web3.eth.getBalance(accounts[1])
      return msw.submitTransaction(accounts[1], web3.toWei(1,"ether"), "foo")
      // how to get the txid ?
    }).then(function(r){
      console.log(r)
      // function getTransactionIds(uint from, uint to, bool pending, bool executed)
      return msw.getTransactionIds(0,1,true,false)
    }).then(function(r){
      txid = r[0].toNumber()
      // console.log(txid)
      assert.equal(txid, 0)
      return msw.isConfirmed(txid)
    }).then(function(r){
      // console.log(r)
      assert.isFalse(r, "wallet.isConfirmed() should be false after 1/3 confirmations")
      return msw.confirmTransaction(txid, {from:accounts[2]})
    }).then(function(r){
      return msw.isConfirmed(txid)
    }).then(function(r){
      assert.isTrue(r, "wallet.isConfirmed() should be true after 2/3 confirmations")
      assert.equal(web3.eth.getBalance(msw.address), web3.toWei(0.23,"ether"))
      assert.equal(web3.eth.getBalance(accounts[1]) - balance1 , web3.toWei(1,"ether"))
    })
  });

  // user1.confirmTransaction(wallet ,txid);
  // Assert.isTrue(wallet.isConfirmed(txid), "wallet.isConfirmed() should be true after 2/3 confirmations");
  // 3+1 = 4 ether
  // Assert.equal(user3.balance, 4 ether, "User3 should have 4 ether after 2/3 confirmations");

});
