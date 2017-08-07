// https://github.com/ethereumjs/ethereumjs-util
const ethUtil = require('ethereumjs-util')
// https://github.com/bitpay/bitcore-lib/blob/master/docs/crypto.md
const bitcore = require('bitcore-lib')
const bitcoreHash = bitcore.crypto.Hash
const msg = 'abc'
var hashUtil = ethUtil.sha256(msg)
var hashBitcore = bitcoreHash.sha256(Buffer.from(msg))
var result = {
    util: { msg: msg, hashBuffer: hashUtil , hash: hashUtil.toString('hex')},
    bitcore: { msg: msg, hash: hashBitcore.toString('hex')}
}
console.log(JSON.stringify(result, null, 2))