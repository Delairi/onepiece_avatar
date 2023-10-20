import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../Urls'

const useFetch = (url) => {

    const [Data, setData] = useState({
        status:'idle',
        data:null,
        error:null
    })

    useEffect(() => {
        Fetch()
    }, [url])

    const Fetch = async (__url=url) => {
        try{

            setData({
                status:'loading',
                data:null,
                error:null
            })
            const response = await fetch(`${BASE_URL}${__url}`,{
                credentials:'include'
            })
            const data = await response.json()
            
            setData({
                status:'success',
                data:data,
                error:null
            })
            return data
        }catch(err){
            console.log(err)
            setData({
                status:'error',
                data:null,
                error:err
            })
            return err
        }
        
    }
    return {
        status:Data.status,
        data:Data.data,
        error:Data.error,
        Fetch:Fetch
    }
}

export default useFetch
