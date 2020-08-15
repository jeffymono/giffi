import { useState, useEffect, useContext } from "react";
import { getApi } from "services/getApi";
import GifContext from 'context/GifContext'
const INITIAL_PAGE = 0
export const useGifs = ({ keyword }={keyword:null}) => {
  const gifContext = useContext(GifContext)
  const [page, setPage] = useState(INITIAL_PAGE)
  const{gifs,setGifs} = gifContext
  const [loading, setLoading] = useState(false);
  const [loadingNextPage,setLoadingNextPage] = useState(false)

  const keyWordToUse = keyword || localStorage.getItem("lastKeyword")||"random"
  useEffect(() => {
      // 
    setLoading(true);
    //Recuperamos la keyword del localstorage
    getApi({ keyword:keyWordToUse }).then((response) => {
      setGifs(response);
      setLoading(false);
      //Guardamos la keyword en el localstorage
      localStorage.setItem("lastKeyword", keyword)
    });
  }, [keyword,keyWordToUse,setGifs]);

  useEffect(()=>{
    if(page === INITIAL_PAGE)return
    setLoadingNextPage(true)
    getApi({ keyword:keyWordToUse, page }).then(nextGifs=>{
      setGifs(prevGifs=>prevGifs.concat(nextGifs))
      setLoadingNextPage(false)
    })
  },[page,keyWordToUse,setGifs])
  return { loading, gifs, setPage, loadingNextPage };
};
