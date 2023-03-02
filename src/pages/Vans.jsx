import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

import './Vans.css'

function VanCard({imageUrl, name, price, type}){
    return(
        <div className="van--card">

            <img src={imageUrl} className="van--card--image"/>
            <div className="van--info">
               <span>{name}</span> 
               <span>${price}/day</span>
            </div>
            <i className={`van--type ${type} `}>{type}</i>
        </div>
    )
}

function Vans(){
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    let typeFilter = searchParams.get('type')
    console.log(typeFilter);

    useEffect( () => {
       fetch('/api/vans')
            .then( res => res.json())
            .then( data => {
                setVans(data.vans);
                
            })
        
    }, [])

    let filteredVans = typeFilter? 
                       vans.filter( obj => obj.type === typeFilter ):
                       vans

    let vansElements = filteredVans.map( van => {
        return <div key={van.id}>
                  <Link to={`/vans/${van.id}`} className="van--link">
                    <VanCard name={van.name} 
                            price={van.price} 
                            imageUrl={van.imageUrl} 
                            type={van.type}/>  
                 </Link>  
               </div>
    })

    return(
        <div>
            <h1>Explore Our Vans Options</h1>

            <div className="vans-filters">
                <Link to='?type=simple'className="vans-filters-button simple">Simple</Link>
                <Link to='?type=rugged'className="vans-filters-button rugged">Rugged</Link>
                <Link to='?type=luxury'className="vans-filters-button luxury">Luxury</Link>
                <Link to='.'className="">Clear</Link>
            </div>

            <div className="vans--container">

                {vans ? vansElements : <h1>Loading ...</h1>} 
            </div>
        </div>
    )
}


export default Vans