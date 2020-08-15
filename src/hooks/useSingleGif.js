import useGlobalGif from "./useGlobalGifs";
import { useEffect, useState } from "react";
import { getSingleGif } from "services/getSingleGif";

export function useSingleGif({id}){

    const gifs = useGlobalGif()

    const gifFromCache=gifs.find((singleGif) => singleGif.id === id);
    const [gif, setGif] = useState(gifFromCache)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(()=>{
        if(!gif){
            setLoading(true)
            getSingleGif({id}).then(singleGif =>{
                setGif(singleGif)
                setLoading(false)
                setIsError(false)
            }).catch(error=>{
                setIsError(true)
                setLoading(false)
            })
        }
    },[loading,gif,id])
    return {gif, loading,isError}
}