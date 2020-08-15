import {useEffect, useRef} from 'react'
export default function useSEO({title,description}){
    const titleRef = useRef(document.title)
    const descriptionRef = useRef(document.querySelector(`meta[name="description"]`).getAttribute("Content"))
   
    useEffect(()=>{
        const prevTitle = titleRef.current
        if(title){
        document.title = `${title} | giffi`
        }
        return ()=>{
            console.log("excute title")
            document.title = prevTitle
        }
    },[title])

    useEffect(()=>{
        const prevDescription = descriptionRef.current
        const elementDescription = document.querySelector(`meta[name="description"]`)
        if(description){
        elementDescription.setAttribute("Content",description) 
        }
        return()=> elementDescription.setAttribute("Content",prevDescription)
    },)
}