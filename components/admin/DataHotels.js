//@ts-check

import { useDataHotel } from '../../Library/swr-fetch'
import Link from 'next/link'
import { mutate } from 'swr';
import Router from 'next/router'

const DataHotel = () => {
    const { data, error } = useDataHotel();

    if (error) {
        return <div>Error Loading</div>
    }
    if (!data) {
        return <div>Loading</div>
    }
    console.log(data)
    async function Hapushotel(no) {
        
        let res = await fetch(`/api/hapusdatahotels?no=${no}`, { method: 'DELETE' })
        let json = await res.json()
        if (!res.ok) throw error(json.message)
        mutate('/api/hapusdatahotels')
        alert('Data telah terhapus')
        Router.push('/admin/DataHotels')
    }

    return (
        <div className="container w-75 mx-auto py-4">
            <h3 className="font-bold text-center">Data Hotels</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th className="text-center">Nama Hotels</th>
                        <th className="text-center">Fasilitas</th>
                        <th className="text-center">Harga</th>
                        <th className="text-center">Tindakan</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((hotel, idx) => (
                            <tr key={idx}>
                                <td>
                                    {hotel.no}
                                </td>
                                <td>
                                    {hotel.nama_hotels}
                                </td>
                                <td>
                                    {hotel.fasilitas}
                                </td>
                                <td>
                                    {hotel.harga}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-between">
                                        <Link href={`/admin/updatePaket?
                                        &no=${hotel.no}
                                        &nama_hotels=${hotel.nama_hotels}
                                        &fasilitas=${hotel.fasilitas}
                                        &harga=${hotel.harga}
                                        `}
                                        
                                        >
                                            <button className = "btn btn-primary">Edit</button>
                                        </Link>
                                        <button
                                            className = "btn btn-danger"
                                            value={hotel.no}
                                            onClick={(e) => Hapushotel(e.target.value)}>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className="text-center">
                <Link href="/admin/create">
                    <a className="btn btn-primary">Tambah Data</a>
                </Link>
            </div>
        </div>
    );
}

export default DataHotel;