import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import './VanDetails.css'

function VanDetails() {

    const params = useParams()
    
    const [van, setVan] = useState({})

    const location = useLocation()
    let search = location.state?.search || '' ;
    let type = location.state?.type || 'all'

    let array = search.split('=');

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

            <Link to={`./..${search}`} > 
                &larr; {`Back to ${type} vans`}
            </Link>

            <img src={van.imageUrl} className='van--details--image'/>
            <button>Rent Van</button>
            <h2>{van.name}</h2>
            <p>${van.price}/day</p>

            <p>{van.description}</p>

        </div>
    )
}

export default VanDetails