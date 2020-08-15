import React from "react";
import Gif from 'components/Gif'
import {useSingleGif} from 'hooks/useSingleGif'
import Spinner from "components/Spinner";
import { Redirect } from "wouter";
import {Helmet} from 'react-helmet'
const Detail = ({ params }) => {
  const { id } = params;
  const {gif,loading, isError} = useSingleGif({id})
  const title = gif ? gif.title : ""

  if(loading){
    return(
      <>
    <Helmet>
        <title>Cargando...</title>
    </Helmet>
    <Spinner/>
    </>
    )
  }
  if(isError) return <Redirect to='/404'/>
  if(!gif) return null
  return (
    <div>
      <Helmet>
  <title>{`${title} | giffi`}</title>
      </Helmet>
      <h3>{gif.title}</h3>
      <Gif {...gif}/>     
    </div>
  );
};
export default Detail;
