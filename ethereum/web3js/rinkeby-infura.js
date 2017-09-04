var Web3 = require('web3');

function forceInfura() {
    // Inject metamask on a per-page basis · Issue #537 · MetaMask/metamask-extension https://github.com/MetaMask/metamask-extension/issues/537
    web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
    console.log(web3.currentProvider);
}
// T101
function loadBlocks() {
    forceInfura()
    // https://rinkeby.etherscan.io/address/0xc7cd2ac531c8c2af17acaf34dff5c0fc0d777267
    // 823480 - Contract Creation
    // 823492 - transfer token
    [823480, 823492].forEach(function (v) {

        // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgetblock
        // web3.eth.getBlock(blockHashOrBlockNumber [, returnTransactionObjects] [, callback])
        // https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethgettransaction

        web3.eth.getBlock(v, true, function (error, result) {
            if (!error) {
                console.log(result)
                data.blocks.push(result)
            } else {
                console.error(error)
            }
        })
    })
}



// T103
// https://github.com/ethereum/wiki/wiki/JavaScript-API#web3ethsendrawtransaction
// ethereumjs/browser-builds: Browser builds of ethereumjs libraries. https://github.com/ethereumjs/browser-builds
// <script src="https://rawgit.com/ethereumjs/browser-builds/master/dist/ethereumjs-all.js"></script>
// All exports will be available under the global EthJS.
// Nodejs
// var Tx = require('ethereumjs-tx');
// Browser 
// var Tx = EthJS.Tx

function getAddress(keyHex) {
    var Util = EthJS.Util
    var privateKey = Util.toBuffer(keyHex)
    return '0x' + Util.privateToAddress(privateKey).toString('hex')
}

function getNonce(account) {
    forceInfura()
    nonce = web3.eth.getTransactionCount(account);
    nonceHex = web3.toHex(nonce);
    console.log('nonce (transaction count on fromAccount): ' + nonce + '(' + nonceHex + ')');
    return nonceHex;
}

function signRawTransaction(keyHex, nonceHex, toAccount, amount) {
    forceInfura()
    var Tx = EthJS.Tx
    var Util = EthJS.Util
    // MetaMask - Rinkeby - Account 1 - Export Private Key
    // 
    var privateKey = Util.toBuffer(keyHex)
    var fromAccount = '0x' + Util.privateToAddress(privateKey).toString('hex')

    gasPrice = web3.eth.gasPrice;
    gasPriceHex = web3.toHex(gasPrice);
    gasLimitHex = web3.toHex(300000);

    console.log('Current gasPrice: ' + gasPrice + ' OR ' + gasPriceHex);

    var rawTx = {
        nonce: nonceHex,
        gasPrice: gasPriceHex,
        gasLimit: gasLimitHex,
        to: toAccount,
        from: fromAccount,
        value: web3.toHex(web3.toWei(amount, 'ether')),
        data: '0x0'
    };


    var tx = new Tx(rawTx);
    tx.sign(privateKey);

    var serializedTx = tx.serialize();
    var result = serializedTx.toString('hex')
    return {
        rawTx: rawTx,
        result: '0x'+result
    }
}

function sendRawTx(signedHex) {
    var result = web3.eth.sendRawTransaction(signedHex, function (err, hash) {
        console.log(err, hash)
    });

    console.log(result);
}

forceInfura();