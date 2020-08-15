import React, {useEffect,useState} from 'react'
import Category from '../Category'
import {getTrendingTerms} from 'services/getTrendingTerms'
const TrendingSearches = ()=>{
    const [trends, setTrends] = useState([])
    useEffect(()=>{
        getTrendingTerms().then(singletrend=>setTrends(singletrend))
    },[])
    
    return <Category name="Trendings" options={trends}/>
    }
    export default TrendingSearches