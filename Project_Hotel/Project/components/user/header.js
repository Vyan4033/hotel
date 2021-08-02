import Link from 'next/link'

export default function header() {
    return (
        <div>
            <header class="blog-header py-3 bg-primary">
                <div class="row flex-nowrap justify-content-between align-items-center">
                    <div class="col-15 text-center">
                        <h2 class="blog-header-logo text-white">Banyuwangi Hotels Agency</h2>
                    </div>
                </div>
            </header>
            <div class="nav-scroller py-1 mb-2 align-items-center bg-info">
            <nav class="nav d-flex justify-content-center text-white">
                <Link href="/user/Home"><a class="p-2 link-secondary" >Homepage</a></Link>
                <Link href="/user/DataHotels"><a class="p-2 link-secondary" >Data Hotel</a></Link>
                <Link href="/PemesananHotels"><a class="p-2 link-secondary" >Pemesanan</a></Link>
            </nav>
        </div>
        </div>
    )
}