// https://github.com/ethereumjs/ethereumjs-util
var ethUtils = require('ethereumjs-util')
var keyjson = require('./secp256k1.key.pem.json')
// console.log(keyjson)
var privKeyBuf = Buffer.from(keyjson.privkey,'hex')
var pubKeyBuf = Buffer.from(keyjson.pubkey,'hex')
var address = ethUtils.addHexPrefix(ethUtils.privateToAddress(privKeyBuf).toString('hex'))
var result = {
    privKeyValid : ethUtils.isValidPrivate(privKeyBuf),
    pubKeyValid : ethUtils.isValidPublic(pubKeyBuf),
    privKey : keyjson.privkey,
    pubKey : keyjson.pubkey,
    address : address,
    addressValid: ethUtils.isValidAddress(address)
}
console.log(JSON.stringify(result, null, 2))