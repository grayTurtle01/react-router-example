import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

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

function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()


    let typeFilter = searchParams.get('type')

    useEffect(() => {
        fetch('/api/vans')
            .then(res => res.json())
            .then(data => {
                setVans(data.vans);

            })

    }, [])

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

                {vans ? vansElements : <h1>Loading ...</h1>}
            </div>
        </div>
    )
}


export default Vans