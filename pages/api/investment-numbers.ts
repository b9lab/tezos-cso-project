import type { NextApiRequest, NextApiResponse } from 'next';
import DataHandler from '../../src/services/DataHandler';
import { InvestmentNumbersDto } from '../../src/utils/dtos';

/**
 * Get investment numbers API
 */
export default async function investmentNumbersHandler(
  req: NextApiRequest,
  res: NextApiResponse<InvestmentNumbersDto>
) {
    const { method } = req;

    const dataHandler = new DataHandler();

    return new Promise<void>(resolve => {

        const handleSuccess = (data: InvestmentNumbersDto) => {
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
                dataHandler.getInvestmentNumbers().then(handleSuccess).catch(handleError);
                break;
            default:
                res.setHeader('Allow', ['GET']);
                res.status(405).end(`Method ${method} Not Allowed`);
                resolve();
        }
    });
}
