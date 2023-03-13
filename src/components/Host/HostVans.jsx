import React, { Suspense, useEffect, useState } from 'react'
import { Await, defer, Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../../services'

import './Host.css'

async function loader(){
    let promise = getHostVans()
    return defer( {vans: promise })

}

function HostVans() {


    let loaderData = useLoaderData()


    function renderHostVans(vans){
        return  vans.map(van => {
            
                return (
                    <Link to={van.id} key={van.id}  style={{ color: 'black', textDecoration:'none'}} >
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

    return (
        <div>
            <h1>Your listed vans</h1>
            <Suspense fallback={ <h1>Loading ..</h1>}>
                <Await resolve={loaderData.vans}>

                { renderHostVans }
                </Await>
            </Suspense>
        </div>
    )
}

export default HostVans
export { loader }