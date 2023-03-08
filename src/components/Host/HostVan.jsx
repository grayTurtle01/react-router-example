import React, { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useParams } from 'react-router-dom'

function HostVan() {
    const [van, setVan] = useState({})

    let parameters = useParams()

    useEffect( () => {
        fetch(`/api/host/vans/${parameters.id}`)
            .then( res => res.json() )
            .then( data => {
                setVan(data.vans);
            })
    }, [])

    let link_style = {
        fontWeight: 'bold',
        textDecoration: 'underline'
    }
    
    const foo = ({isActive}) => isActive? link_style: {}
    
    if( !van ){
        return <h1>Loading ...</h1>
    }

    return (
        <div className='host-van-details-card'>

            <Link to={'./..'} > &larr; Back to all Vans</Link>

            <header className='host-van-details-header'>
                <img src={van.imageUrl} />
                
                <div>
                    <button className='host-van-detail-button'>{van.type}</button>
                    <h1>{van.name}</h1>
                    <p><b>${van.price}</b>/day</p>
                </div>
            </header>

            <footer>
                <NavLink style={ foo } to={`.`} end>Details</NavLink>
                <NavLink style={ foo } to={`pricing`}>Pricing</NavLink>
                <NavLink style={ foo } to={`photos`}>Photos</NavLink>
            </footer>

            <Outlet context={ { van } }/>

        </div>
    )
}

export default HostVan