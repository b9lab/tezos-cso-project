#!/bin/bash

set -x

cd /opt/app

npm ci

export NEXT_PUBLIC_CONTRACT_ADDRESS=`cat /opt/shared/contract-address.txt`
export NEXT_PUBLIC_CHAIN=private
export NEXT_PUBLIC_NODE_PROVIDER=http://sandbox:20000/
export NEXT_PUBLIC_INDEXER_API_ENDPOINT=http://tzkt-api:5000/
export TEST_ACCOUNT_ADDRESS=tz1P8Sm5cLivzLYxbrad1FEZuKBEazQhriUg
export TEST_ACCOUNT_MNEMONIC="cargo despair tell spare victory divorce average draw source brush fancy round"

npm run test