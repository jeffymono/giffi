import { useEffect, useState, useRef } from "react";
export const useNearScreen = ({ distance = "0px", externalRef, once =true } = {}) => {
  const elementRef = useRef();

  const [isNearScreen, setShow] = useState(false);
  useEffect(() => {
    let observer;
    const refToUse = externalRef ? externalRef.current : elementRef.current;
    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        once&&observer.disconnect();
      }else{
          !once && setShow(false)
      }
    };
    Promise.resolve(
      typeof IntersectionObserver !== undefined
        ? IntersectionObserver
        : import ("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      if (refToUse) observer.observe(refToUse);
    });

    return () => observer && observer.disconnect();
  });
  return { isNearScreen, elementRef };
};
