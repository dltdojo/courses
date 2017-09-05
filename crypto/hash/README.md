* hash 雜湊函數 - 維基百科，自由的百科全書 https://zh.wikipedia.org/wiki/%E6%95%A3%E5%88%97%E5%87%BD%E6%95%B8


### docker 

```
$ alias ethnode='docker run -it --rm -v $(pwd)/js:/opt/ddj/js dltdojo/ethnode:6.a.2 node'
$ ethnode js/sha256.js
```

### node

```
$ npm i 
$ node js/sha256.js
```

### References

* SHA-2 - 維基百科  https://zh.wikipedia.org/wiki/SHA-2
* Google Online Security Blog: Announcing the first SHA1 collision https://security.googleblog.com/2017/02/announcing-first-sha1-collision.html
* SHA-3 - 維基百科 https://zh.wikipedia.org/wiki/SHA-3
* SM3 - 維基百科 https://zh.wikipedia.org/wiki/SM3