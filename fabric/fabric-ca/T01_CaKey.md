## Hyperledger Fabric CA

* https://jamielinux.com/docs/openssl-certificate-authority/create-the-root-pair.html
* How to setup your own CA with OpenSSL https://gist.github.com/Soarez/9688998

### 新增ecdsa-with-SHA256的CA憑證

* openssl預設的CA簽署無Certificate Key Usage欄位，但是Fabric CA需要讀取這個欄位，直接編輯openssl.cnf或是用sed去掉前置#讓其生效。
* 目前Fabric CA支援ECDSA的ASN1 OID為prime256v1/secp384r1/secp521r1。
* openssl生成金鑰格式需轉換為PKCS#8格式。
* 完成後將金鑰與憑證置入CA設定路徑。

```
$ docker-compose up -d ddj
$ docker-compose exec ddj bash
bash-4.3# sed -i.bak '/cRLSign, keyCertSign/s/^# //' /etc/ssl/openssl.cnf
bash-4.3# grep -B 5 -A 5 cRLSign /etc/ssl/openssl.cnf
bash-4.3# mkdir -p /data/ca/fabric-ca-server && cd /data/ca/fabric-ca-server
bash-4.3# openssl ecparam -name prime256v1 -genkey -out key.pem
bash-4.3# openssl pkcs8 -topk8 -nocrypt -in key.pem -out ca-key.pem
bash-4.3# openssl req -new -x509 -key ca-key.pem -out ca-cert.pem -days 999
bash-4.3# openssl x509 -in ca-cert.pem -text
bash-4.3# tree /data/
bash-4.3# exit
```

log details

```
dltdojo:fabric-ca$ docker-compose up -d ddj
Creating fabricca_ddj_1
dltdojo:fabric-ca$ docker-compose exec ddj bash
bash-4.3# sed -i.bak '/cRLSign, keyCertSign/s/^# //' /etc/ssl/openssl.cnf
bash-4.3# grep -B 5 -A 5 cRLSign /etc/ssl/openssl.cnf
basicConstraints = CA:true

# Key usage: this is typical for a CA certificate. However since it will
# prevent it being used as an test self-signed certificate it is best
# left out by default.
keyUsage = cRLSign, keyCertSign

# Some might want this also
# nsCertType = sslCA, emailCA

# Include email address in subject alt name: another PKIX recommendation
bash-4.3# mkdir -p /data/ca/fabric-ca-server && cd /data/ca/fabric-ca-server
bash-4.3# openssl ecparam -name prime256v1 -genkey -out key.pem
bash-4.3# openssl pkcs8 -topk8 -nocrypt -in key.pem -out ca-key.pem
bash-4.3# openssl req -new -x509 -key ca-key.pem -out ca-cert.pem -days 999
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:TW
State or Province Name (full name) [Some-State]:TAIWAN
Locality Name (eg, city) []:TAICHUNG
Organization Name (eg, company) [Internet Widgits Pty Ltd]:DLTDOJO
Organizational Unit Name (eg, section) []:ca.dltdojo.org
Common Name (e.g. server FQDN or YOUR name) []:ca.dltdojo.org
Email Address []:
bash-4.3# openssl x509 -in ca-cert.pem -text
Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            a5:a2:b3:36:6f:73:17:51
    Signature Algorithm: ecdsa-with-SHA256
        Issuer: C=TW, ST=TAIWAN, L=TAICHUNG, O=DLTDOJO, OU=ca.dltdojo.org, CN=ca.dltdojo.org
        Validity
            Not Before: Aug 14 14:53:34 2017 GMT
            Not After : May  9 14:53:34 2020 GMT
        Subject: C=TW, ST=TAIWAN, L=TAICHUNG, O=DLTDOJO, OU=ca.dltdojo.org, CN=ca.dltdojo.org
        Subject Public Key Info:
            Public Key Algorithm: id-ecPublicKey
                Public-Key: (256 bit)
                pub:
                    04:ff:40:cf:a1:a9:47:b3:47:e3:09:45:69:e4:ee:
                    0f:aa:4f:ed:69:ce:ad:22:62:93:34:6e:27:ff:8b:
                    ae:82:aa:a5:20:17:72:06:bd:4c:ae:c2:41:c0:fa:
                    fd:3e:27:9c:de:5d:99:12:f6:05:7b:89:c0:fe:fe:
                    9d:dc:a0:b3:df
                ASN1 OID: prime256v1
                NIST CURVE: P-256
        X509v3 extensions:
            X509v3 Subject Key Identifier:
                DD:BB:AA:A5:50:C0:53:32:CC:98:A6:D3:71:E9:35:97:78:F1:77:C7
            X509v3 Authority Key Identifier:
                keyid:DD:BB:AA:A5:50:C0:53:32:CC:98:A6:D3:71:E9:35:97:78:F1:77:C7

            X509v3 Basic Constraints:
                CA:TRUE
            X509v3 Key Usage:
                Certificate Sign, CRL Sign
    Signature Algorithm: ecdsa-with-SHA256
         30:46:02:21:00:f1:00:91:1c:27:dd:dc:8c:37:69:60:78:12:
         5d:3a:d8:ed:4b:c7:81:81:1f:9d:37:f7:2c:24:b3:9f:c6:bc:
         a2:02:21:00:dc:a3:4c:95:db:d7:68:9c:3c:77:a7:9a:71:7f:
         d7:02:57:ab:ba:4f:1b:38:a6:72:b3:2e:94:5e:e2:b9:3c:d7
-----BEGIN CERTIFICATE-----
MIICPzCCAeSgAwIBAgIJAKWiszZvcxdRMAoGCCqGSM49BAMCMHUxCzAJBgNVBAYT
AlRXMQ8wDQYDVQQIDAZUQUlXQU4xETAPBgNVBAcMCFRBSUNIVU5HMRAwDgYDVQQK
DAdETFRET0pPMRcwFQYDVQQLDA5jYS5kbHRkb2pvLm9yZzEXMBUGA1UEAwwOY2Eu
ZGx0ZG9qby5vcmcwHhcNMTcwODE0MTQ1MzM0WhcNMjAwNTA5MTQ1MzM0WjB1MQsw
CQYDVQQGEwJUVzEPMA0GA1UECAwGVEFJV0FOMREwDwYDVQQHDAhUQUlDSFVORzEQ
MA4GA1UECgwHRExURE9KTzEXMBUGA1UECwwOY2EuZGx0ZG9qby5vcmcxFzAVBgNV
BAMMDmNhLmRsdGRvam8ub3JnMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/0DP
oalHs0fjCUVp5O4Pqk/tac6tImKTNG4n/4uugqqlIBdyBr1MrsJBwPr9Piec3l2Z
EvYFe4nA/v6d3KCz36NdMFswHQYDVR0OBBYEFN27qqVQwFMyzJim03HpNZd48XfH
MB8GA1UdIwQYMBaAFN27qqVQwFMyzJim03HpNZd48XfHMAwGA1UdEwQFMAMBAf8w
CwYDVR0PBAQDAgEGMAoGCCqGSM49BAMCA0kAMEYCIQDxAJEcJ93cjDdpYHgSXTrY
7UvHgYEfnTf3LCSzn8a8ogIhANyjTJXb12icPHenmnF/1wJXq7pPGzimcrMulF7i
uTzX
-----END CERTIFICATE-----
bash-4.3# tree /data/
/data/
└── ca
    └── fabric-ca-server
        ├── ca-cert.pem
        ├── ca-key.pem
        └── key.pem

2 directories, 3 files

bash-4.3# exit
exit
```