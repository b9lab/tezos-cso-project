import { Knex, knex } from 'knex';
import knexfile from '../knexfile';

const env = process.env.NODE_ENV || 'development';
const config: Knex.Config = knexfile[env];

const db = knex(config);

export default db;