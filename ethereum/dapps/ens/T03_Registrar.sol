pragma solidity ^0.4.15;
//
// https://ethereum.github.io/browser-solidity/
// https://github.com/ethereum/ens/blob/master/contracts/ENS.sol
//
import "./ENS.sol";
import "./FIFSRegistrar.sol";

contract TestRegistrar {
    bytes32 ensRootNode = 0x0;
    bytes32 public ethLabel = sha3('eth'); 
    bytes32 public ethNode = sha3(ensRootNode, ethLabel);
    bytes32 public swarmLabel = sha3('swarm');
    bytes32 public swarmNode = sha3(ethNode, swarmLabel);
    ENS public ens;
    FIFSRegistrar public registrar;
    
    function init(){
        ens = new ENS();
        registrar = new FIFSRegistrar(ens, ethNode);
        ens.setSubnodeOwner(ensRootNode, ethLabel,registrar);
        require(registrar == ens.owner(ethNode));
    }
    
    function testRegisterSwarm(){
        init();
        registrar.register(swarmLabel,msg.sender);
        require(msg.sender == ens.owner(swarmNode));
    }
    
}