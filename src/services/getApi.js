import {API_KEY,API_URL} from './settings'
export const getApi = ({keyword="goku",limit=5, page=0}={})=>{
return (fetch(`${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit*page}&rating=g&lang=en`)
    .then(res=>res.json())
    .then(result=>{
        const{data} = result
     const datos = data.map(giffy =>{
        const{id, title,images}=giffy
        const{url} = images.downsized_medium
        return ({id, title,url})
        
     })
     return datos
    })
)
}