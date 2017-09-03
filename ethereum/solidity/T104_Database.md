### Blockchain v.s. Relational Database

* 關聯式資料庫 - 維基百科 https://zh.wikipedia.org/wiki/%E5%85%B3%E7%B3%BB%E6%95%B0%E6%8D%AE%E5%BA%93
* 區塊鏈 - 維基百科 https://zh.wikipedia.org/wiki/%E5%8C%BA%E5%9D%97%E9%93%BE

```
$ docker-compose up -d remix
$ docker-compose up -d mariadb
$ docker-compose up -d phpmyadmin
$ docker-compose up -d bitcoind
$ docker-compose ps
     Name           Command       Sta                      Ports                 
                                 te                                             
----------------------------------------------------------------------------------
solidity_bit   /entrypoint.sh    Up    0.0.0.0:12750->12750/tcp, 18332/tcp,     
coind_1        /testapp.sh             18333/tcp, 18444/tcp, 8332/tcp, 8333/tcp 
solidity_mar   docker-           Up    3306/tcp                                 
iadb_1         entrypoint.sh                                                    
               mysqld                                                           
solidity_php   /run.sh           Up    0.0.0.0:8088->80/tcp                     
myadmin_1      phpmyadmin          
solidity_rem   http-server .     Up    0.0.0.0:8080->8080/tcp                          
ix_1                                                                  
```

#### Ethereum blockchain

* Ethereum remix IDE http://VMIP:8080/

#### MariaDB/phpmyadmin

* phpmyadmin http://VMIP:8088/
* username: root
* password: root

新增資料庫mydb並修改帳戶餘額

伺服器: db - SQL - 在伺服器 "db" 執行 SQL 查詢: 

```
CREATE DATABASE mydb;
use mydb;
CREATE TABLE mytable ( id INT PRIMARY KEY, name VARCHAR(34) , balance INT UNSIGNED );
INSERT INTO mytable VALUES ( 1, "mpywCp28LcmDHNKxJy9tUuXc1LcXK5gCoT", 1000);
INSERT INTO mytable VALUES ( 2, "mjisABTPq6DwgUv4rzBtt1gY44hwBX4zZy", 2000);
SELECT * FROM mytable;
```

#### Bitcoin blockchain

* bitcoin abe explorer http://VMIP:12750/

#### Stop all containers

```
$ docker-compose stop
```

#### More Info About SQL and blockchain

* https://github.com/dltdojo/courses/blob/master/blockchain/README.SQL.md