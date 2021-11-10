import { NextApiRequest, NextApiResponse } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/client";

/**
 * If not authenticated returns an unauthorized response
 */
export default async function authMiddleware(
    req: NextApiRequest, 
    res: NextApiResponse<any>
): Promise<Session | null> {
    
    const session = await getSession({ req });

    if (!session || !session.user) {
        res.status(401).end(`Unauthorized`);
    }

    return session;
}
