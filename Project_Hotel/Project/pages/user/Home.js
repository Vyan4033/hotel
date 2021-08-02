import Jumbotron from '../../components/props/Jumbotron'
import LayoutUser from '../../components/user/LayoutUser'

const Home = () => {
  let jumbotron = {judul : "Banyuwangi Hotels Agency",
  isi: "Bingung Menginap? Bingung Cari Tempat Aman? Tenang Kami Punya Solusinya, Klik Saja dibawah ini",
  link : "Lanjutkan"}

  return (
    <div className="container">
      <LayoutUser>
        <Jumbotron judul = {jumbotron.judul} isi = {jumbotron.isi}/>
      </LayoutUser>
    </div>
  )
}


export default Home;