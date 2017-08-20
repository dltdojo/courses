### docker-composer介紹

```
$ pwd
/home/dltdojo/smb/container/dltdojo/rise/backend
$ cat docker-compose.yml
```

* Compose 簡介 https://wild0522.gitbooks.io/yeasy_dp/content/compose/intro.html
* YAML - 維基百科 https://zh.wikipedia.org/wiki/YAML

### 啟動mariadb資料庫

```
$ docker-compose db up -d
$ docker-compose logs db
Attaching to backend_db_1
...
...
db_1          | 2017-07-20  6:21:07 140247435618240 [Note] mysqld: ready for connections.
db_1          | Version: '10.1.25-MariaDB-1~jessie'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  mariadb.org binary distribution
$ docker-compose ps
    Name                 Command             State    Ports
-------------------------------------------------------------
backend_db_1   docker-entrypoint.sh mysqld   Up      3306/tcp
```
* mariadb https://hub.docker.com/_/mariadb/
* mariadb:10.1 https://github.com/docker-library/mariadb/blob/master/10.1/Dockerfile

### 進入容器操作資料庫

```
$ docker-compose exec db bash

root@ada3fe7fceb9:/# mysql -u root -proot

Welcome to the MariaDB monitor.  Commands end with ; or \g.
Your MariaDB connection id is 2
Server version: 10.1.25-MariaDB-1~jessie mariadb.org binary distribution

MariaDB [(none)]> CREATE DATABASE mydb1;
Query OK, 1 row affected (0.00 sec)

MariaDB [(none)]> USE mydb1;
Database changed
MariaDB [mydb1]> CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );
Query OK, 0 rows affected (0.01 sec)

MariaDB [mydb1]> INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);
Query OK, 1 row affected (0.01 sec)

MariaDB [mydb1]> INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);
Query OK, 1 row affected (0.00 sec)

MariaDB [mydb1]> SELECT * FROM mytable;
+----+------------------------------------+---------+
| id | name                               | balance |
+----+------------------------------------+---------+
|  1 | mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT |    1000 |
|  2 | mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy |    2000 |
+----+------------------------------------+---------+
2 rows in set (0.00 sec)

MariaDB [mydb1]> exit
Bye
root@ada3fe7fceb9:/# exit
exit
```

* MySQL 超新手入門（1）重新開始 by Michael | CodeData http://www.codedata.com.tw/database/mysql-tutorial-getting-started

### 啟動後端應用phpmyadmin，確認連結到資料庫容器

* phpmyadmin http://DEVIP:8088/
* username: root
* password: root

```
$ docker-compose up -d phpmyadmin
Creating backend_phpmyadmin_1

$ docker-compose ps
      Name             Command             State              Ports
-------------------------------------------------------------------------
backend_db_1       docker-            Up                 3306/tcp
                   entrypoint.sh
                   mysqld
backend_phpmyadm   /run.sh            Up                 0.0.0.0:8088->80
in_1               phpmyadmin                            /tcp

$ docker-compose exec phpmyadmin sh

/ # ping db
PING db (172.21.0.2): 56 data bytes
64 bytes from 172.21.0.2: seq=0 ttl=64 time=0.061 ms
64 bytes from 172.21.0.2: seq=1 ttl=64 time=0.070 ms
^C
--- db ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.061/0.065/0.070 ms

/ # ping phpmyadmin
PING phpmyadmin (172.21.0.3): 56 data bytes
64 bytes from 172.21.0.3: seq=0 ttl=64 time=0.024 ms
64 bytes from 172.21.0.3: seq=1 ttl=64 time=0.044 ms
^C
--- phpmyadmin ping statistics ---
2 packets transmitted, 2 packets received, 0% packet loss
round-trip min/avg/max = 0.024/0.034/0.044 ms

/ # exit
```
* phpMyAdmin - 維基 https://zh.wikipedia.org/wiki/PhpMyAdmin
* MySQL 資料庫網頁管理軟體phpMyAdmin http://download.ithome.com.tw/article/index/id/309

### 新增資料庫mydb並修改帳戶餘額

* 伺服器: db - SQL - 在伺服器 "db" 執行 SQL 查詢: 

```
CREATE DATABASE mydb;
use mydb;
CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );
INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);
INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);
SELECT * FROM mytable;
```

### 啟動後端開發PHP容器

* http://DEVIP:8081/

```
$ docker-compose up -d backend
$ docker ps
CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                  NAMES
2c0ca4a5d398        backend_backend         "docker-php-entryp..."   18 minutes ago      Up 18 minutes       0.0.0.0:8081->80/tcp   backend_backend_1
d484852a6326        phpmyadmin/phpmyadmin   "/run.sh phpmyadmin"     About an hour ago   Up About an hour    0.0.0.0:8088->80/tcp   backend_phpmyadmin_1
ada3fe7fceb9        mariadb:10.1            "docker-entrypoint..."   About an hour ago   Up About an hour    3306/tcp               backend_db_1

```
* PHP - 維基百科 https://zh.wikipedia.org/wiki/PHP
* PHP 5 Tutorial https://www.w3schools.com/php/
* php docker image https://hub.docker.com/_/php/
* php:7.0-apache https://github.com/docker-library/php/blob/master/7.1/apache/Dockerfile
* AngularJS - 維基百科 https://zh.wikipedia.org/wiki/AngularJS
* AngularJS Tutorial https://www.w3schools.com/angular/

### 停止所有容器服務

```
$ docker-compose stop
Stopping backend_backend_1 ... done
Stopping backend_phpmyadmin_1 ... done
Stopping backend_db_1 ... done

$ docker-compose ps
        Name                      Command               State    Ports
----------------------------------------------------------------------
backend_backend_1      docker-php-entrypoint apac ...   Exit 0
backend_db_1           docker-entrypoint.sh mysqld      Exit 0
backend_phpmyadmin_1   /run.sh phpmyadmin               Exit 0

```
