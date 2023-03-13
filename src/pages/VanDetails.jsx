import React, { Suspense, useEffect, useState } from 'react'
import { Await, defer, Link, useLoaderData, useLocation, useParams } from 'react-router-dom'
import { getVan } from '../../services'

import { getObject } from '../../firebase'

import './VanDetails.css'

async function loader(obj){

    let id = obj.params.id;
    // let promise = getVan(id)
    let promise = getObject(id)
    return defer( {van: promise})
}

function VanDetails() {

    const location = useLocation()
    let search = location.state?.search || '' ;
    let type = location.state?.type || 'all'



    let loaderData = useLoaderData()

    return (
     
        <div className='van--details'>

            <Link to={`./..${search}`} > 
                &larr; {`Back to ${type} vans`}
            </Link>

            <Suspense fallback={ <h3>Loading ...</h3>}>

                <Await resolve={ loaderData.van }>

                    {
                        (van) => {
                            return <>
                                    <img src={van.imageUrl} className='van--details--image'/>
                                    <button>Rent Van</button>
                                    <h2>{van.name}</h2>
                                    <p>${van.price}/day</p>
                    
                                    <p>{van.description}</p>
                                </>  
                    }       
                    }
                </Await>
            </Suspense>

        </div>
    )
}

export default VanDetails
export { loader }