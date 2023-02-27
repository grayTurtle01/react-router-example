import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './VanDetails.css'

function VanDetails() {

    const params = useParams()
    
    const [van, setVan] = useState({})


    useEffect( () => {
        fetch(`/api/vans/${params.id}`)
            .then( res => res.json() )
            .then( data => {
                setVan(data.vans);
            })
            .catch( err => {
                console.log(' => err: ', err);
            })
    }, [])


    return (
        <div className='van--details'>

            <img src={van.imageUrl} className='van--details--image'/>
            <button>Boton</button>
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>

            <p>{van.description}</p>

        </div>
    )
}

export default VanDetails