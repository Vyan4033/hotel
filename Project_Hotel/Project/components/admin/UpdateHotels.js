//@ts-check

import { useEffect, useState } from "react";
import Router, { useRouter } from 'next/router';


const updateHotels = () => {
    const [_no, setNo] = useState('');
    const [_nama_hotels, setNama_Hotels] = useState('');
    const [_fasilitas, setFasilitas] = useState('');
    const [_harga, setHarga] = useState('');

    const router = useRouter();
    const { no, nama_hotels, fasilitas, harga } = router.query;

    useEffect(() => {
        if (typeof no == 'string') {
            setNo(no);
        }
        if (typeof nama_hotels == 'string') {
            setNama_Hotels(nama_hotels);
        }
        if (typeof fasilitas == 'string') {
            setHarga(fasilitas);
        }
        if (typeof harga == 'string') {
            setHarga(harga);
        }
    }, [no, nama_hotels, fasilitas, harga, no])

    const submitHandler = async (e) => {
        e.preventDefault()
        //setsubmitting(true)
        try {
            const res = await fetch('/api/updatedatahotels', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    no: _no,
                    nama_hotels: _nama_hotels,
                    fasilitas: _fasilitas,
                    harga: _harga,
                }),
            })
            const json = await res.json()
            // set submitting(false)
            if (!res.ok) throw Error(json.message)

            alert("Update Data Sukses")
            Router.push('/admin/DataPaket')

        } catch (e) {
            throw Error(e.message)

        }

    }

    return (
        <div>
            <div className="container mt-4">
                <form className="w-50 mx-auto" onSubmit={submitHandler}>
                    <h2 className="text-center">Update Data Hotel </h2>
                    <div className="form-floating">
                        <input
                            className="form-control mb-2"
                            id = "no"
                            type = "text"
                            placeholder = "No"
                            value = {_no}
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
                            value = {_nama_hotels}
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
                            value = {_fasilitas}
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
                            value = {_harga}
                            onChange = {(e) => setHarga(e.target.value)}
                        />
                        <label htmlFor="harga">Harga</label>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" type="submit">
                            Update Data
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default updateHotels;