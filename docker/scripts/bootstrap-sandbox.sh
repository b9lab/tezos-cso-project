#!/bin/bash

set -x

#flobox start &

echo "Bootstrap: Waiting for port 20000 to become reachable"
#timeout 20 ash -c 'until printf "" 2>>/dev/null >>/dev/tcp/$0/$1; do sleep 1; done' localhost 20000

timeout 20 sh -c 'while ! curl -s localhost:20000; do sleep 1; done'

if [ $? -eq 0 ]
then
	echo "Bootstrap: Sandbox ready, port 20000 available"
else
	echo "Bootstrap: Sandbox bootstrap failed($?), port 20000 not reachable"
	exit 1
fi

echo "Bootstrap: Sandbox bootstrap (1/2) - setup accounts"
tezos-client --endpoint http://localhost:20000 bootstrapped
tezos-client --endpoint http://localhost:20000 config update
tezos-client import secret key alice unencrypted:edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq --force
tezos-client import secret key bob unencrypted:edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt --force

echo "Bootstrap: Sandbox bootstrap (2/2) - deploy contract"
#/opt/contract/deployment.sh
