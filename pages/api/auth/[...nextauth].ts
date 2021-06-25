import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

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
        })
    ],
    database: {
        type: 'postgres',
        host: process.env.LOCAL_DATABASE_HOST,
        port: parseInt(process.env.LOCAL_DATABASE_PORT || '0'),
        username: process.env.LOCAL_DATABASE_USER,
        password: process.env.LOCAL_DATABASE_PASSWORD,
        database: process.env.LOCAL_DATABASE_NAME
    }
})
