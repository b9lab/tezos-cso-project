#!/bin/bash

set -x

export CONTRACT_ADDRESS=`cat /opt/shared/contract-address.txt`
export CHAIN=private
export NODE_PROVIDER=http://tzkt-sandbox:20000/
export INDEXER_API_ENDPOINT=http://tzkt-api:5000/
export TEST_ACCOUNT_ADDRESS=tz1P8Sm5cLivzLYxbrad1FEZuKBEazQhriUg

cd /opt/app
npm ci && npm run test