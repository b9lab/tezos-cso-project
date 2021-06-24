import type { NextApiRequest, NextApiResponse } from 'next'

type TestDto = {
    title: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<TestDto>) {
    setTimeout(() => res.status(200).json({ title: 'This is my first page' }), 500);
}