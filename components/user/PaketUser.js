//@ts-check

import Link from "next/link";

const Data = ({data}) => {
    return(
        <div className="container">
                        <h3 className="font-bold text-center">Data Paket</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th className="text-center">No</th>
                        <th className="text-center">Nama Hotel</th>
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
                                <td className="text-center">
                                    {hotel.harga}
                                </td>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <Link href="/Pemesanan">
                                            <button className = "btn btn-primary">Pesan</button>
                                        </Link>
                                     </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Data