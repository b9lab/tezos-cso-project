import * as dotenv from "dotenv";
dotenv.config();

export default {

    development: {
        client: 'postgresql',
        connection: {
            host: process.env.LOCAL_DATABASE_HOST,
            port: parseInt(process.env.LOCAL_DATABASE_PORT || '5432'),
            database: process.env.LOCAL_DATABASE_NAME,
            user: process.env.LOCAL_DATABASE_USER,
            password: process.env.LOCAL_DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations',
            directory: './database/migrations',
        }
    },
  
    test: {
        client: 'postgresql',
        connection: {
            host: process.env.TEST_DATABASE_HOST,
            port: parseInt(process.env.TEST_DATABASE_PORT || '5432'),
            database: process.env.TEST_DATABASE_NAME,
            user: process.env.TEST_DATABASE_USER,
            password: process.env.TEST_DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations',
            directory: './database/migrations',
        }
    },
  
    production: {
        client: 'postgresql',
        connection: {
            host: process.env.RDS_HOST || process.env.PROD_DATABASE_HOST,
            port: parseInt(process.env.RDS_PORT || process.env.PROD_DATABASE_PORT || '5432'),
            database: process.env.RDS_DATABASE || process.env.PROD_DATABASE_NAME,
            user: process.env.RDS_USER || process.env.PROD_DATABASE_USER,
            password: process.env.RDS_PASSWORD || process.env.PROD_DATABASE_PASSWORD
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations',
            directory: './database/migrations',
        }
    }
  
};