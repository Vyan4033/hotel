//@ts-check

import { db } from "../../Library/db"

const handler = async (req, res) => {
    const {no, nama_hotels, fasilitas, harga} = req.body
    try{
        if(!no || !nama_hotels || !fasilitas || !harga){
            return res
            .status(400)
            .json({message : 'Isian tidak boleh kosong'})
        }
        const results = await db.query(
            `UPDATE hotel set no = ?, nama_hotels = ?, fasilitas = ?, harga = ? WHERE no = ?`,
            [no, nama_hotels, fasilitas, harga, no]
        )
        
        return res.json(results)
    } 
    catch (e) {
        res.status(500).json({messaage : e.message})
    }
}

export default handler;