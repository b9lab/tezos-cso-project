# TZMINT - Tezos Rolling Safe implementation sample App

This repository contains code for an example project which is part of the educational course on the [Tezos Developer Platform](https://tezos.b9lab.com) by [B9lab](https://b9lab.com). While it contains a working full stack application, it is intended for demonstration purposes only and **not to run in a production environment / mainnet** without further adjustments.

This project consists of two parts:

* The user-facing web application, the [TZMINT web application](https://tzmint.b9lab.com), and
* The [smart contract and the wrapper functions](https://github.com/b9lab/tezos-app-project/) to interact with it, which are included as a submodule.

## Local deployment

### Install locally

To install the web application, run:

```
npm install
```

### Database

This web application requires a (postgres) database. You can either use an existing database, or use the `docker-compose.yml` file provided in the `/docker` folder to quickly spin up a database. To use the container, inside the `/docker` folder create a `.env` file to (see `.env.example` file for reference)

Then to start the container, run:

```
docker-compose up -d
```

### Smart Contract

If you want to deploy your own smart contract, you can use the [deployment script](https://github.com/b9lab/tezos-app-project/blob/main/src/contract/deployment.sh) provided in the [smart contract and the wrapper functions repository](https://github.com/b9lab/tezos-app-project). Take note of the deployment address


### Configuration

Create a .env file (see .env.example file for reference). You must fill in:

```
LOCAL_DATABASE_NAME
LOCAL_DATABASE_USER
LOCAL_DATABASE_PASSWORD
LOCAL_DATABASE_HOST
```

for the app to work.

**To enable login**, you must set:

```
EMAIL_SERVER_USER
EMAIL_SERVER_PASSWORD
EMAIL_SERVER_HOST
EMAIL_SERVER_PORT
EMAIL_FROM

NEXTAUTH_URL=http://127.0.0.1:3000
```

To receive login emails.

**To enable login with Google**, you must set:

```
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

to a [GCP Service Account with OAuth2 enabled](https://support.google.com/cloud/answer/6158849?hl=en#zippy=%2Cservice-accounts).

**To connect to your local node and use your own contract**, set:

```
NEXT_PUBLIC_CONTRACT_ADDRESS
NEXT_PUBLIC_CHAIN
NEXT_PUBLIC_NODE_PROVIDER
NEXT_PUBLIC_INDEXER_API_ENDPOINT
```

accordingly.

## Starting the server

Run

```
npm run dev
```

to launch the server in local development mode, listening on [http://127.0.0.1](http://127.0.0.1:8080).

## Testing

Run both unit and e2e tests

```
npm run test
```

### e2e test configuration

Create "cypress.env.json" file and insert the google account credentials that you want to use for the google auth test

```json
{
    "GOOGLE_USER": "MY_EMAIL",
    "GOOGLE_PW": "MY_PASSWORD",
    "COOKIE_NAME": "next-auth.session-token",
    "SITE_NAME": "http://127.0.0.1:3000"
}
```

To run all integration tests

```
npm run test:e2e
```

To run manually the integation tests run a local server and then run

```
npm run test:e2e:open
```

### Unit test

```
npm run test:unit
```

## Development

### Database Notes

remember to use `TS_NODE_PROJECT=tsconfig.knex.json` as prefix for each knex cli command

### Create migration
```
TS_NODE_PROJECT=tsconfig.knex.json knex migrate:make migration_name -x ts
```

### Migrate
```
npm run db:migrate
```

### Migrate rollback
```
npm run db:rollback
```
