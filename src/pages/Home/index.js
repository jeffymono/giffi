import React,{useState, useCallback} from "react";
import { Link, useLocation } from "wouter";
import GifList from 'components/ListOfGifs'
import {useGifs} from 'hooks/useGifs'
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import {Helmet} from 'react-helmet'
const Home = () => {

  const [path, pushLocation] = useLocation();

  const {gifs} = useGifs()

  const handleSubmit = useCallback(({keyword}) => {
    pushLocation(`/search/${keyword}`)
  },[pushLocation])
  return (
    <>
    <Helmet>
      <title>Home | giffi</title>
    </Helmet>
    <SearchForm onSubmit={handleSubmit}/>
      <h1 style={{marginRight:"auto"}}>Última búsqueda</h1>
      <GifList gifs = {gifs}/>
      <TrendingSearches/>
    </>
  );
};
export default Home;
