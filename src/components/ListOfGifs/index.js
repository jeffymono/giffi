import React from "react";
import Gif from "../Gif";
import './style.css'

const GifList = ({ gifs }) => {
  return (
    <div className="ListOfGifs">
      {gifs.map(({id, title, url, ...moreParams}) => {
        return (
          <Gif
            key={id}
            id={id}
            title={title}
            url={url}
            moreParams={moreParams}
          />
        );
      })}
    </div>
  );
};
export default GifList;
