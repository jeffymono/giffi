import { useContext } from "react";
import GifContext from "context/GifContext";
const useGlobalGif = () => {
  const { gifs } = useContext(GifContext);
  return gifs;
};
export default useGlobalGif;
