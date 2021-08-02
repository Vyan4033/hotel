//@ts-check

import { db } from "../../Library/db";

const handler = async(req, res) => {
    const {no, nama_hotels, fasilitas, harga} = req.body
    try{
        if(!no || !nama_hotels || !fasilitas || !harga){
            return res
            .status(400)
            .json({message : "Input harus diisi semua"})
        }

        const results = await db.query(
            `INSERT INTO hotel (no, nama_hotels, fasilitas, harga) 
            VALUES (?,?,?,?)`,
            [no, nama_hotels, fasilitas, harga]
        )
        await db.end;
        
        return res.json(results)
    }
    catch (e) {
        res.status(500).json({message : e.message});
    }
}

export default handler