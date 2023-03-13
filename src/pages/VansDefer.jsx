import { Suspense, useState } from "react"
import { Link, useLoaderData, useSearchParams, defer, Await } from "react-router-dom"
import { getVans } from "../../services"

import './Vans.css'

function VanCard({ imageUrl, name, price, type }) {
    return (
        <div className="van--card">

            <img src={imageUrl} className="van--card--image" />
            <div className="van--info">
                <span>{name}</span>
                <span>${price}/day</span>
            </div>
            <i className={`van--type ${type} `}>{type}</i>
        </div>
    )
}

async function loader(){
    let promise =  getVans()
    return defer( {vans: promise} )

}

function VansDefer() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [error, setError] = useState('')

    const loaderData = useLoaderData()

    let typeFilter = searchParams.get('type')


    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    function renderVansElements (vans) {
        let filteredVans = typeFilter ?
                            vans.filter(obj => obj.type === typeFilter) :
                            vans

        let vansElements = filteredVans.map(van => {
            return <div key={van.id}>
                <Link to={van.id} className="van--link" state={ { search: '?'+searchParams.toString(),
                                                                type: typeFilter } }>
                    <VanCard name={van.name}
                        price={van.price}
                        imageUrl={van.imageUrl}
                        type={van.type} />
                </Link>
            </div>
        })

        return vansElements
    }

    if( error ){
        return <h1>Error: {error}</h1>
    }

    return (
        <div>
            <h1>Explore Our Vans Options</h1>

            <div className="vans-filters">


                <button onClick={() => handleFilterChange('type', 'simple')}
                    className={`vans-filters-button simple ${typeFilter === 'simple'? 'selected': ''}`}>
                    Simple
                </button>

                <button onClick={() => handleFilterChange('type', 'rugged')}
                    className={`vans-filters-button rugged ${typeFilter === 'rugged'? 'selected': ''}`}>
                    Rugged
                </button>

                <button onClick={() => handleFilterChange('type', 'luxury')}
                    className={`vans-filters-button luxury ${typeFilter === 'luxury'? 'selected': ''}`}>
                    Luxury
                </button>

                {
                    typeFilter &&
                    <button onClick={() => handleFilterChange('type', null)}
                        className="">
                        Clear
                    </button>
                }

            </div>

            <div className="vans--container">
                <Suspense fallback={<h1>Loading...</h1> }>
                    <Await resolve={ loaderData.vans }>
                        { renderVansElements }
                    </Await>
                </Suspense>
            </div>
        </div>
    )
}


export default VansDefer
export { loader }