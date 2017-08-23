#!/bin/bash
set -e
# 
# https://wiki.openssl.org/index.php/Command_Line_Utilities
# https://kobl.one/blog/create-full-ethereum-keypair-and-address/
# 
echo // ===========================
echo $ openssl version
openssl version
#
echo ; echo // ===========================
echo $ openssl ecparam -list_curves
openssl ecparam -list_curves
#
echo ; echo // ===========================
PEM=secp256k1.key.pem
echo $ openssl ecparam -name secp256k1 -genkey -out $PEM
openssl ecparam -name secp256k1 -genkey -out $PEM
echo $ openssl ec -text -in $PEM
openssl ec -text -in $PEM
#
echo ; echo // ===========================
echo $ openssl ecparam -name prime256v1 -genkey -out prime256v1.key.pem
openssl ecparam -name prime256v1 -genkey -out prime256v1.key.pem
echo $ openssl ec -text -in prime256v1.key.pem
openssl ec -text -in prime256v1.key.pem
#
echo ; echo // ===========================
PUBKEY=$(openssl ec -text -noout -in $PEM | grep pub -A 5 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^04//')
PRIVKEY=$(openssl ec -text -noout -in $PEM | grep priv -A 3 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^00//')
echo -e {\"pem\":\"$PEM\", \"pubkey\":\"$PUBKEY\", \"privkey\":\"$PRIVKEY\"} > $PEM.json
cat $PEM.json | jq .