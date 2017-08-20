## TrustEnd

* http://DEVIP:8900

### 啟動容器服務

```
$ pwd
/home/dltdojo/smb/container/dltdojo/rise/trustend
$ docker-compose up -d
$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
trustend_bitcoin   /entrypoint.sh     Up                 0.0.0.0:12750->1
d_1                /testapp.sh                           2750/tcp,
                                                         18332/tcp,
                                                         18333/tcp,
                                                         18444/tcp,
                                                         8332/tcp,
                                                         8333/tcp
trustend_fullsta   node server        Up                 0.0.0.0:8900->89
ck_1                                                     00/tcp
```

### 修改重新啟動

```
$ docker-compose build
$ docker-compose up -d
```

### 關閉容器

```
$ docker-compose stop
```