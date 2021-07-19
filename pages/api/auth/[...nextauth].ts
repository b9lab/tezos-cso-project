import { Knex } from 'knex';
import NextAuth from 'next-auth';
import Adapters from 'next-auth/adapters';
import Providers from 'next-auth/providers';
import knexfile from '../../../knexfile';
import Models from '../../../src/models';

const env = process.env.NODE_ENV || 'development';
const config = knexfile[env];

export default NextAuth({
    providers: [
        Providers.Email({
            server: {
                host: process.env.EMAIL_SERVER_HOST || '',
                port: parseInt(process.env.EMAIL_SERVER_PORT || '0'),
                auth: {
                    user: process.env.EMAIL_SERVER_USER || '',
                    pass: process.env.EMAIL_SERVER_PASSWORD || ''
                }
            },
            from: process.env.EMAIL_FROM || ''
        }),
        Providers.Google({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    adapter: Adapters.TypeORM.Adapter(
        {
            type: 'postgres',
            host: config.connection.host,
            port: config.connection.port,
            username: config.connection.user,
            password: config.connection.password,
            database: config.connection.database
        },
        {
          models: {
            Account: Adapters.TypeORM.Models.Account,
            Session: Adapters.TypeORM.Models.Session,
            VerificationRequest: Adapters.TypeORM.Models.VerificationRequest,
            User: Models.User,
          },
        }
    ),
    callbacks: {
        session: async (session, user) => {
            session.userId = user.id;
            session.address = user.address;
            session.country = user.country;
            return Promise.resolve(session);
        }
    },
    pages: {
        newUser: '/profile'
    }
})
