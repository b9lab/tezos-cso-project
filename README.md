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
```
npm run dev
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
