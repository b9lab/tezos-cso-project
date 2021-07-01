import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import authMiddleware from '../../../src/middlewares/auth';
import User from '../../../src/models/User';
import UserService from '../../../src/services/UserService';

interface ProfileDto {
    id: number,
    email: string,
    name: string | null,
    country: string | null,
    address: string | null
}

interface UpdateProfileDto {
    name: string | null,
    country: string | null,
    address: string | null
}

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

    const userService = new UserService();
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
                userService.getUser(userId).then(handleSuccess).catch(handleError);
                break;
            case 'PUT':
                const body: UpdateProfileDto = JSON.parse(req.body);
                userService.updateUser(userId, body.name, body.country, body.address).then(handleSuccess).catch(handleError);
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
}
