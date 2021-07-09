import NextAuth from 'next-auth';
import Adapters from 'next-auth/adapters';
import Providers from 'next-auth/providers';
import Models from '../../../src/models';

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
            host: process.env.LOCAL_DATABASE_HOST,
            port: parseInt(process.env.LOCAL_DATABASE_PORT || '5432'),
            username: process.env.LOCAL_DATABASE_USER,
            password: process.env.LOCAL_DATABASE_PASSWORD,
            database: process.env.LOCAL_DATABASE_NAME
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
