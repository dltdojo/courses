### http協定客戶端工具curl

```
# curl -v http://google.com
* Rebuilt URL to: http://google.com/
*   Trying 216.58.200.46...
* TCP_NODELAY set
* Connected to google.com (216.58.200.46) port 80 (#0)
> GET / HTTP/1.1
> Host: google.com
> User-Agent: curl/7.52.1
> Accept: */*
>
< HTTP/1.1 302 Found
< Cache-Control: private
< Content-Type: text/html; charset=UTF-8
< Referrer-Policy: no-referrer
< Location: http://www.google.com.tw/?gfe_rd=cr&ei=yuJVWebNCvH88wfHmp7oAg
< Content-Length: 262
< Date: Fri, 30 Jun 2017 05:34:02 GMT
<
<HTML><HEAD><meta http-equiv="content-type" content="text/html;charset=utf-8">
<TITLE>302 Moved</TITLE></HEAD><BODY>
<H1>302 Moved</H1>
The document has moved
<A HREF="http://www.google.com.tw/?gfe_rd=cr&amp;ei=yuJVWebNCvH88wfHmp7oAg">here</A>.
</BODY></HTML>
* Curl_http_done: called premature == 0
* Connection #0 to host google.com left intact
```

### nginx http服務映像檔測試

```
$ cd httpd
$ pwd
/home/dltdojo/smb/container/dltdojo/rise/httpd
$ docker build -t httpd .
$ docker run -p 8080:80 -d httpd
b8357f7cffdba22205b19c1d1adc4e7313d628aef6cdb6631e871faf2aa36c57d
$ docker ps
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                  NAMES
b8357f7cffdb        httpd               "nginx -g 'daemon ..."   31 seconds ago      Up 31 seconds       0.0.0.0:8080->80/tcp   dreamy_montalcini

$ ip addr | grep global
    inet 192.168.2.106/24 brd 192.168.2.255 scope global enp0s3
    inet 172.18.0.1/16 scope global br-b05c7db85752
    inet 172.20.0.1/16 scope global br-b35a2a794334
    inet 172.19.0.1/16 scope global br-351ab61255ab
    inet 172.17.0.1/16 scope global docker0
$ curl -v http://192.168.2.106:8080

* Rebuilt URL to: http://192.168.2.106:8080/
*   Trying 192.168.2.106...
* Connected to 192.168.2.106 (192.168.2.106) port 8080 (#0)
> GET / HTTP/1.1
> Host: 192.168.2.106:8080
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Server: nginx/1.12.1
< Date: Wed, 19 Jul 2017 10:35:35 GMT
< Content-Type: text/html
< Content-Length: 612
< Last-Modified: Tue, 11 Jul 2017 19:01:54 GMT
< Connection: keep-alive
< ETag: "596520a2-264"
< Accept-Ranges: bytes
<
<!DOCTYPE html>
<html>
<head>
<title>Welcome to nginx!</title>
<style>
    body {
        width: 35em;
        margin: 0 auto;
        font-family: Tahoma, Verdana, Arial, sans-serif;
    }
</style>
</head>
<body>
<h1>Welcome to nginx!</h1>
<p>If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.</p>

<p>For online documentation and support please refer to
<a href="http://nginx.org/">nginx.org</a>.<br/>
Commercial support is available at
<a href="http://nginx.com/">nginx.com</a>.</p>

<p><em>Thank you for using nginx.</em></p>
</body>
</html>
* Connection #0 to host 192.168.2.106 left intact

$ curl -v http://localhost:8080
$ docker stop b835
$ docker ps
```

### nginx http服務映像檔置入預設首頁

* visual studio code 開啟編輯 index.html
* nano index.html

```
$ docker build -f Dockerfile.index -t httpd.index .
$ docker run -p 8080:80 -d httpd.index
a6c270fe8cc542187f5d1c42c3702210167578cfa025017de42daf249c89d518
$ curl http://192.168.2.106:8080
$ docker stop a6c2
$ docker ps
```

### nginx http服務映像檔掛載首頁

* 映像檔內路徑 /usr/share/nginx/html/
* visual studio code 開啟編輯 index.html

```
$ docker run -v $(pwd):/usr/share/nginx/html -p 8080:80 -d httpd
a283a3c3964461288739154422254127251d58cc8ea4f86512b2a3824f6d0e0f
$ curl http://192.168.2.106:8080
$ docker stop a283
$ docker ps
```

### 參考連結

* HTTP 超文本傳輸協定 - 維基百科 https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE
* HTML - 維基百科 https://zh.wikipedia.org/wiki/HTML
* curl - Tutorial https://curl.haxx.se/docs/httpscripting.html
* Evelyn's Note: curl 指令用法 http://evelynnote.blogspot.tw/2011/03/curl.html
* 網頁伺服器 - 維基百科 https://zh.wikipedia.org/wiki/%E7%B6%B2%E9%A0%81%E4%BC%BA%E6%9C%8D%E5%99%A8
* nginx - 維基百科 https://zh.wikipedia.org/wiki/Nginx
* Docker (軟體) - 維基百科 https://zh.wikipedia.org/wiki/Docker_(%E8%BB%9F%E9%AB%94)
* Use the Docker command line | Docker Documentation  https://docs.docker.com/engine/reference/commandline/cli/
* 《Docker —— 從入門到實踐­》https://philipzheng.gitbooks.io/docker_practice/content/introduction/