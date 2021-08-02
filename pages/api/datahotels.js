//@ts-check

import { db } from '../../Library/db'

const handler = async(_, res) => {
    try{
        const results = await db.query(
            `SELECT * FROM hotel
            ORDER BY no ASC`
        );
        await db.end

        return res.json(results)
    }
    catch (e) {
        res.status(500).json({message : e.message})
    }
}

export default handler;