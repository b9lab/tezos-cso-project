#!/bin/bash

zip -r ./dist/dist.zip build public database tezos-app-project knexfile.ts next-env.d.ts next.config.js package-lock.json package.json postcss.config.js server.js tailwind.config.js tsconfig.json tsconfig.knex.json -x *.git* *node_modules/\*