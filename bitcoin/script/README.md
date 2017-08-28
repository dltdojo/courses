* Script - Bitcoin Wiki https://en.bitcoin.it/wiki/Script
* Script | Bitcore https://bitcore.io/api/lib/script
* Transaction Scripts and Script Language | Mastering Bitcoin  http://chimera.labs.oreilly.com/books/1234000001802/ch05.html#tx_script


### console 

* https://rawgit.com/dltdojo/courses/master/bitcoin/script/console.html

```
> testCode1()
true
> runCode('OP_2','OP_3 OP_ADD OP_5 OP_EQUAL')
true
> runCode('OP_2 OP_3','OP_ADD OP_5 OP_EQUAL')
true
> runCode('OP_2 OP_3','OP_ADD OP_6 OP_EQUAL')
false
```

### TODO

* Pizza for bitcoins?  https://bitcointalk.org/index.php?topic=137.0
* Bitcoin Transaction cca7507897abc89628f450e8b1e0c6fca4ec3f7b34cccf55f3f531c659ff4d79 
 https://blockchain.info/tx/cca7507897abc89628f450e8b1e0c6fca4ec3f7b34cccf55f3f531c659ff4d79

```
> pizzaSignature = '30450221009908144ca6539e09512b9295c8a27050d478fbb96f8addbc3d075544dc41328702201aa528be2b907d316d2da068dd9eb1e23243d97e444d59290d2fddf25269ee0e01'
pizzaPublicKey = '042e930f39ba62c6534ee98ed20ca98959d34aa9e057cda01cfd422c6bab3667b76426529382c23f42b9b08d7832d4fee1d6b437a8526e59667ce9c4e9dcebcabb'
inputScript = pizzaSignature + ' ' + pizzaPublicKey
outputScript = 'OP_DUP OP_HASH160 df1bd49a6c9e34dfa8631f2c54cf39986027501b OP_EQUALVERIFY OP_CHECKSIG'
runCode(inputScript, outputScript)
```