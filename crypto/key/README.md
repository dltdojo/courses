* 橢圓曲線密碼學 - 維基百科 https://zh.wikipedia.org/wiki/%E6%A4%AD%E5%9C%86%E6%9B%B2%E7%BA%BF%E5%AF%86%E7%A0%81%E5%AD%A6

### docker 

```
$ alias ethnode='docker run -it --rm -v $(pwd)/js:/opt/ddj/js dltdojo/ethnode:6.a.2 node'
$ ethnode js/eckey.js
```

### node

```
$ npm i 
$ node js/eckey.js
```

### References

* SafeCurves: Introduction https://safecurves.cr.yp.to/
* SM2 - 維基百科 https://zh.wikipedia.org/wiki/SM2
* https://github.com/qingche123/sm_crypto_golang/blob/master/sm2/curve.go
* Elliptic curve cryptography - Wikipedia https://en.wikipedia.org/wiki/Elliptic_curve_cryptography