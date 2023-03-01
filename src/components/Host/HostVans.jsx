import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import './Host.css'

function HostVans() {
    const [vans, setVans] = useState([])

    useEffect(() => {
        fetch('/api/host/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans);
            })
    }, [])

    return (
        <div>
            <h1>Your listed vans</h1>
            {
                vans.map(van => {

                    return (
                        <Link to={`/host/vans/${van.id}`} key={van.id}  style={{ color: 'black', textDecoration:'none'}} >
                            <div  className='host-vans-card'>
                                <img src={van.imageUrl} />

                                <div>
                                    <h2>{van.name}</h2>
                                    <span>${van.price}/day</span>
                                </div>
                            </div> 
                        </Link>
                        )
                })
            }
        </div>
    )
}

export default HostVans