// //@ts-check

import PaketUser from "../../components/user/PaketUser"
import LayoutUser from "../../components/user/LayoutUser"
import { useDataHotel } from "../../Library/swr-fetch"

const DataHotel = () => {
    const {data, error} = useDataHotel();

    if(error) {
        return <div>Error Loading</div>
    }
    if(!data) {
        return <div>Loading</div>
    }

    console.log(data)

    return(
        <div>
            <LayoutUser>
                <PaketUser data={data}/>
            </LayoutUser>
        </div>
    )
}

// export async function getStaticProps(){
//     const res = await fetch('http:localhost:3000/api/dtPaket')
//     const pkt = await res.json()

//     return{
//         props:{
//             pkt,
//         },
//     }
// }

export default DataHotel