import type { NextApiRequest, NextApiResponse } from 'next';
import DataHandler from '../../src/services/DataHandler';
import { CafeInfoDto } from '../../src/utils/dtos';

/**
 * Get CAFE parameters API
 */
export default async function cafeParametersHandler(
  req: NextApiRequest,
  res: NextApiResponse<CafeInfoDto>
) {
    const { method } = req;

    const dataHandler = new DataHandler();

    return new Promise<void>(resolve => {

        const handleSuccess = (data: CafeInfoDto) => {
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
                dataHandler.getRollingSafeParameter().then(handleSuccess).catch(handleError);
                break;
            default:
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
}
