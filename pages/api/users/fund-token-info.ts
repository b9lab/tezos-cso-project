import type { NextApiRequest, NextApiResponse } from 'next';
import { Session } from 'next-auth';
import authMiddleware from '../../../src/middlewares/auth';
import DataHandler from '../../../src/services/DataHandler';
import { FundTokenInfoDto } from '../../../src/utils/dtos';

export default async function investmentNumbersHandler(
  req: NextApiRequest,
  res: NextApiResponse<FundTokenInfoDto>
) {
    const { method } = req;

    const session: Session & {userId?: number} | null = await authMiddleware(req, res);
    if (!session) return;

    const dataHandler = new DataHandler();

    return new Promise<void>(resolve => {

        const handleSuccess = (data: FundTokenInfoDto) => {
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
                dataHandler.getFundTokenInfo().then(handleSuccess).catch(handleError);
                break;
            default:
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
}
