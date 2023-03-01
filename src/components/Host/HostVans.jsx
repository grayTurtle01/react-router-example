import React, { useEffect, useState } from 'react'

import './Host.css'

function HostVans() {
    const [vans, setVans] = useState([])

    useEffect( () => {
        fetch('/api/host/vans')
            .then( res => res.json())
            .then( data => {
                setVans(data.vans);
            })
    }, [])

    return (
        <div>
            <h1>Your listed vans</h1>
            {
                vans.map( van => {
                    return <div key={van.id} className='host-vans-card'>
                            <img src={van.imageUrl} />

                            <div>
                                <h2>{van.name}</h2>
                                <span>${van.price}/day</span>
                            </div>
                          </div>
                })
            }
        </div>
    )
}

export default HostVans