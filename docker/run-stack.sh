#!/bin/bash

set -x

docker-compose -f ./sandbox.yml down -v
docker-compose -f ./sandbox.yml up