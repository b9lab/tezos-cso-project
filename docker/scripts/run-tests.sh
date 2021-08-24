#!/bin/bash

set -x

cd /opt/app
npm ci && npm run test