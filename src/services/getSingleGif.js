import {API_KEY,API_URL} from './settings'
export const getSingleGif = ({id})=>{
return (fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`)
    .then(res=>res.json())
    .then(result=>{
        const{id, title,images} = result.data
        const{url} = images.downsized_medium

     return {id, title,url}
    })
)
}