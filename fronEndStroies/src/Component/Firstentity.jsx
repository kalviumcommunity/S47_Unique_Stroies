import React from 'react'
import { Link } from 'react-router-dom'

function Firstentity({entity}) {
    return (
        <div>
            <div>{entity.map((data)=>{
                return(
                    <div key={data.StoryNo}>
                        <p>{data.StoryNo}</p>
                        <p>{data.title}</p>
                        <p>{data.author}</p>
                        <p>{data.PlaceOfOrigin}</p>
                    </div>
                
                )
            })}</div>
        </div>
    )
}
export default Firstentity