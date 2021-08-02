//@ts-check

import { useState } from "react";
import Link from 'next/link'
const CreateHotels = () => {

    const [no, setNo] = useState('');
    const [nama_hotels, setNama_Hotels] = useState('');
    const [fasilitas, setFasilitas] = useState('');
    const [harga, setHarga] = useState('');

    async function submitHandler(e) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:3000/api/createdatahotels", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no,
                    nama_hotels,
                    fasilitas,
                    harga,
                }),
            })

            const json = await res.json()
            if (!res.ok) throw Error(json.message)
            alert("Penambahan Data Sukses")
        } catch (e) {
            throw Error(e.message)
        }
    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                <h2 className="text-center">Tambah Data Hotel</h2>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "no"
                            type = "text"
                            placeholder = "No"
                            value = {no}
                            onChange = {(e) => setNo(e.target.value)}
                        />
                        <label htmlFor="no">No</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "nama_hotels"
                            type = "text"
                            placeholder = "Nama Hotel"
                            value = {nama_hotels}
                            onChange = {(e) => setNama_Hotels(e.target.value)}
                        />
                        <label htmlFor="nama_hotels">Nama Hotel</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "fasilitas"
                            type = "text"
                            placeholder = "Fasilitas"
                            value = {fasilitas}
                            onChange = {(e) => setFasilitas(e.target.value)}
                        />
                        <label htmlFor="fasilitas">Fasilitas</label>
                    </div>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "harga"
                            type = "text"
                            placeholder = "Harga"
                            value = {harga}
                            onChange = {(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Tambah
                        </button>
                        <Link href="/admin/DataPaket">
                            <a className="btn btn-primary">Kembali</a>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateHotels;