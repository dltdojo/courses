var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var MultiSigWallet = artifacts.require("./MultiSigWallet.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  // 2-of-3 multisigwallet
  deployer.deploy(MultiSigWallet, [accounts[0],accounts[1],accounts[2]],2);
};
