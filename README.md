# Tezos CSO App

## Setup

```
npm install
```

### Docker

- Go to /docker folder
- Create the .env file (see .env.example file)
- Run the command
```
docker-compose up -d
```

### Environment

- Create the .env file (see .env.example file)

## Local development

### Starting the server

```
npm run dev
```

## Testing
will run both unit and e2e tests
```
npm run test
```

### e2e test
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

## Database
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
