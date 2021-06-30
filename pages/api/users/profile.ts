import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import authMiddleware from '../../../src/middlewares/auth';
import User from '../../../src/models/User';
import UserService from '../../../src/services/UserService';

type Data = {
    id: number,
    name: string
}

export default async function profileHandler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
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
        switch (method) {
            case 'GET':
                userService.getUser(userId).then((user: User) => {
                    res.status(200).json({ id: user.id, name: user.name })
                    resolve();
                }).catch(console.error);
                break;
            case 'PUT':
                const name = JSON.parse(req.body).name;
                userService.updateUser(userId, name).then((user: User) => {
                    res.status(200).json({ id: user.id, name: user.name });
                    resolve();
                }).catch(console.error);
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
}
