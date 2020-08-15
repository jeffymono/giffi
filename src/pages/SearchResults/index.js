import React, { useRef, useEffect, useCallback } from "react";
import GifList from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import { useNearScreen } from "hooks/useNearScreen";
import throttle from "just-throttle";
import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

const SearchResult = ({ params }) => {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const title = gifs ? `${gifs.length} results of ${decodeURI(keyword)}` : "";

  // const handleNextPage = ()=>setPage(prevGifs => prevGifs+1)
  //const handleNextPage = ()=>console.log("NextPage")
  const handleDebounce = useCallback(
    throttle(() => setPage((prevGifs) => prevGifs + 1), 200),
    [setPage]
  );
  useEffect(() => {
    console.log(isNearScreen);
    if (isNearScreen) {
      handleDebounce();
    }
  }, [isNearScreen, handleDebounce]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{`${title} | giffi`}</title>
            <meta
              name="description"
              content={`${title}`}
            />
          </Helmet>
          <h3 style={{ marginRight: "auto" }}>{decodeURI(keyword)}</h3>
          <GifList gifs={gifs} />
          <div id="visor" ref={externalRef}></div>
        </>
      )}
    </>
  );
};
export default SearchResult;
