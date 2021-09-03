#!/bin/bash

set -x

docker-compose -f ./sandbox.yml down -v
chmod +x scripts/db/create-multiple-db.sh
docker-compose -f ./sandbox.yml up --abort-on-container-exit