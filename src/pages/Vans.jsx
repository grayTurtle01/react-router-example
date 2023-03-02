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
            <Link to={`/vans/${van.id}`} className="van--link">
                <VanCard name={van.name}
                    price={van.price}
                    imageUrl={van.imageUrl}
                    type={van.type} />
            </Link>
        </div>
    })

    return (
        <div>
            <h1>Explore Our Vans Options</h1>

            <div className="vans-filters">
                <button onClick={() => setSearchParams('?type=simple')} className="vans-filters-button simple">
                    Simple
                </button>

                <button onClick={() => setSearchParams('?type=rugged')} className="vans-filters-button rugged">
                    Rugged
                </button>

                <button onClick={() => setSearchParams('?type=luxury')} className="vans-filters-button luxury">
                    Luxury
                </button>

                <button onClick={ () => setSearchParams('')} className="">Clear</button>
            </div>

            <div className="vans--container">

                {vans ? vansElements : <h1>Loading ...</h1>}
            </div>
        </div>
    )
}


export default Vans