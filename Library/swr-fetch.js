//@ts-check

import useSWR from 'swr'

async function fetcher(url) {
    const res = await fetch(url);
    return res.json()
}

export const useDataHotel = (hotel) => {
    //url
    const url = "http://localhost:3000/api/datahotels"
    //data error
    const {data, error} = useSWR(url, fetcher, {initialData : hotel, refreshInterval : 1000})

    return {data, error}
}