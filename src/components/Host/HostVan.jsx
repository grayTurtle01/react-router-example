import React, { useEffect, useState } from 'react'
import {  NavLink, useParams } from 'react-router-dom'

function HostVan() {
    const [van, setVan] = useState({})

    let parameters = useParams()

    useEffect( () => {
        fetch(`/api/host/vans/${parameters.id}`)
            .then( res => res.json() )
            .then( data => {
                setVan(data.vans[0]);
            })
    }, [])

    let link_style = {
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
    
    const foo = ({isActive}) => isActive? link_style: {}
    

    return (
        <div className='host-van-details-card'>

            <header className='host-van-details-header'>
                <img src={van.imageUrl} />
                
                <div>
                    <button className='host-van-detail-button'>{van.type}</button>
                    <h1>{van.name}</h1>
                    <p><b>${van.price}</b>/day</p>
                </div>
            </header>

            <footer>
                <NavLink style={ foo }to={'/host/vans/:id/details'}>Details</NavLink>
                <NavLink style={ foo }to={'/host/vans/:id/pricing'}>Pricing</NavLink>
                <NavLink style={ foo }to={'/host/vans/:id/photos'}>Photos</NavLink>
            </footer>

        </div>
    )
}

export default HostVan