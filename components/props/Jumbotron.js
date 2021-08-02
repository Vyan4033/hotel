import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'

export default function jumbotron(props){
    return(
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">{props.judul}</h1>
                    <p className="col-md-8 fs-4">{props.isi}</p>
                    <Link href="/Profilehotels">
                        <button className="btn btn-primary btn-lg" type="button">Lanjutkan</button>
                    </Link>
                </div>
            </div>
    )
}
