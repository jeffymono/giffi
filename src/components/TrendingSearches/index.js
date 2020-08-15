import React,{Suspense} from 'react'
import {useNearScreen} from 'hooks/useNearScreen'
import Spinner from '../Spinner'
const TrendingSearches = React.lazy(()=>import('./TrendingSearches'))

const LazyTrending = () =>{
 
    const {isNearScreen,elementRef} = useNearScreen()
    return <div ref={elementRef}>
        <Suspense fallback={<Spinner/>}>
        {
            isNearScreen
            ? <TrendingSearches/>
            :<Spinner/>
        }
        </Suspense>
    </div>
    
}
export default LazyTrending