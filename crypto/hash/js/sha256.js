// https://github.com/ethereumjs/ethereumjs-util
const ethUtil = require('ethereumjs-util')
// https://github.com/bitpay/bitcore-lib/blob/master/docs/crypto.md
const bitcore = require('bitcore-lib')
const bitcoreHash = bitcore.crypto.Hash
const msg = 'abc'
var hashUtil = ethUtil.sha256(msg)
var hashBitcore = bitcoreHash.sha256(Buffer.from(msg))

// 
// the sha256 hash of the fabric block header.
// https://github.com/hyperledger/fabric/blob/master/protos/common/block.go#L74
//

var result = {
    util: { msg: msg, hashBuffer: hashUtil , hash: hashUtil.toString('hex')},
    bitcore: { msg: msg, hash: hashBitcore.toString('hex')},
    sha512: { msg: msg, hash:  bitcoreHash.sha512(Buffer.from(msg)).toString('hex')}
}
console.log(JSON.stringify(result, null, 2))