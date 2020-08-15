import {API_KEY,API_URL} from './settings'

const fromApiResponseToGifs = result =>{
    const {data} = result
    return data
}

export const getTrendingTerms = ()=>{
const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`
return (fetch(apiUrl)
    .then(res=>res.json())
    .then(fromApiResponseToGifs)
)
}