// https://github.com/indutny/elliptic
// EdDSA - Wikipedia https://en.wikipedia.org/wiki/EdDSA
/*
Like other discrete-log-based signature schemes, EdDSA uses a secret value called a nonce 
unique to each signature. In the signature schemes DSA and ECDSA, this nonce is traditionally 
generated randomly for each signature—and if the random number generator is ever broken and 
predictable when making a signature, the signature can leak the private key, as happened with 
the Sony PlayStation 3 firmware update signing key.

In contrast, EdDSA chooses the nonce deterministically as the hash of the private key and 
the message. Thus, once a private key is generated, EdDSA has no further need for a random 
number generator in order to make signatures, and there is no danger that a broken random 
number generator used to make a signature will reveal the private key.
*/
// https://fossies.org/linux/tor/src/test/ed25519_vectors.inc
const EdDSA = require('elliptic').eddsa;
const ethUtil = require('ethereumjs-util')


// Ed25519 is the EdDSA signature scheme EdDSA - Wikipedia https://en.wikipedia.org/wiki/EdDSA
// EdDSA-SHA512-Ed25519 
// chain core https://github.com/chain/chain/tree/main/crypto/ed25519
// monero https://github.com/monero-project/monero/blob/master/src/crypto/crypto_ops_builder/crypto_sign.h
// corda https://github.com/corda/corda/search?utf8=%E2%9C%93&q=EdDSA
// ripple https://github.com/ripple/rippled/tree/master/src/ed25519-donna
// Curves with a Twist | Ripple https://ripple.com/dev-blog/curves-with-a-twist/
// Hyperledger iroha https://github.com/hyperledger/iroha-android/blob/master/iroha-android/src/main/java/io/soramitsu/irohaandroid/security/KeyGenerator.java
// zcash switch from ECDSA to Ed25519 https://github.com/zcash/zcash/issues/715
function ed25519Sig(msg) {
    var eddsa = new EdDSA('ed25519')
    var pair = eddsa.keyFromSecret('26c76712d89d906e6672dafa614c42e5cb1caac8c6568e4d2493087db51f0d36', 'hex')
    var publicKey = pair.getPublic('hex')
    var msgHash = ethUtil.sha256(msg)
    var signature = pair.sign(msgHash)
    var signature2 = pair.sign(msgHash)
    var R = signature.R()
    var S = signature.S()
    var signatureHex = signature.toHex()
    var sig = {
        hex : signatureHex,
        sigR : signatureHex.slice(0, 64),
        sigS : signatureHex.slice(64),
        x: R.getX().toString('hex'),
        y: R.getY().toString('hex')
    }

    // Import public key
    var keyFromPublic = eddsa.keyFromPublic(publicKey, 'hex');
    // Verify signature
    var valid = keyFromPublic.verify(msgHash, signature);
    return {
        msg: msg,
        msgHash: msgHash.toString('hex'),
        signature: sig,
        signature2: signature2.toHex(),
        secret: pair.getSecret('hex'),
        publicKey: publicKey,
        validFromPublic: valid
    }
}

var result = {
    ed25519Sig: ed25519Sig('abc')
}

console.log(JSON.stringify(result, null, 2))