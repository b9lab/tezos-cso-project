#!/bin/bash

set -x

echo "Bootstrap: Waiting for port 20000 to become reachable"
timeout 30 sh -c 'while ! curl -s localhost:20000; do sleep 1; done'

if [ $? -eq 0 ]
then
	echo "Bootstrap: Sandbox ready, port 20000 available"
else
	echo "Bootstrap: Sandbox bootstrap failed($?), port 20000 not reachable"
	exit 1
fi

echo "Bootstrap: Sandbox bootstrap (1/2) - setup accounts"
export TEZOS_CLIENT_UNSAFE_DISABLE_DISCLAIMER=yes
tezos-client --endpoint http://localhost:20000 bootstrapped
tezos-client --endpoint http://localhost:20000 config update
tezos-client import secret key alice unencrypted:edsk3QoqBuvdamxouPhin7swCvkQNgq4jP5KZPbwWNnwdZpSpJiEbq --force
tezos-client import secret key bob unencrypted:edsk3RFfvaFaxbHx8BMtEW1rKQcPtDML3LXjNqMNLCzC3wLC1bWbAt --force
tezos-client transfer 100 from bob to tz1hJBaRcjy5g9RD4hSVrZ4HdMEvVdjmgYeQ --burn-cap 0.06425

echo "Bootstrap: Sandbox bootstrap (2/2) - deploy contract"
sh /opt/contract/deployment.sh


echo "Bootstrap: Completed"
