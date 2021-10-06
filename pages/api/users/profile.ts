import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import authMiddleware from '../../../src/middlewares/auth';
import User from '../../../src/models/User';
import UserHandler from '../../../src/services/UserHandler';

export interface ProfileDto {
    id: number,
    email: string,
    name: string | null,
    country: string | null,
    address: string | null
}

export interface UpdateProfileDto {
    name: string | null,
    country: string | null,
    address: string | null
}

/**
 * GET/PUT/DELETE user API
 */
export default async function profileHandler(
  req: NextApiRequest,
  res: NextApiResponse<ProfileDto>
) {
    const { method } = req;

    const session: Session & {userId?: number} | null = await authMiddleware(req, res);
    if (!session) return;

    if (!session.userId) {
        res.status(500).end(`Failed to fetch user id`);
        return;
    }

    const userHandler = new UserHandler();
    const userId: number = session.userId;

    return new Promise<void>(resolve => {

        const handleSuccess = (user: User) => {
            const data: ProfileDto = { id: user.id, name: user.name, email: user.email, country: user.country, address: user.address };
            res.status(200).json(data);
            resolve();
        };

        const handleError = (error: Error) => {
            console.error(error);
            res.status(500).end(`An error has occurred`);
            resolve();
        }

        switch (method) {
            case 'GET':
                userHandler.getUser(userId).then(handleSuccess).catch(handleError);
                break;
            case 'PUT':
                const body: UpdateProfileDto = JSON.parse(req.body);
                userHandler.updateUser(userId, body.name, body.country, body.address).then(handleSuccess).catch(handleError);
                break;
            case 'DELETE':
                userHandler.deleteUser(userId).then(() => res.status(200).end()).catch(handleError);
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
}
