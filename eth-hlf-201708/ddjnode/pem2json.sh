#!/bin/bash
set -e
PUBKEY=$(openssl ec -text -noout -in $1 | grep pub -A 5 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^04//')
PRIVKEY=$(openssl ec -text -noout -in $1 | grep priv -A 3 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^00//')
echo -e {\"pubkey\":\"$PUBKEY\", \"privkey\":\"$PRIVKEY\"}