import React from 'react'
import { Link } from 'wouter'

const Category = ({name, options})=>{
    return <div>
        <h1>{name}</h1>
        {
            options.map(option=>{
                return <Link key={option} to={`/search/${option}`}>{option}</Link>
            })
        }
    </div>
}
export default Category