import { useEffect, useState } from "react"

import './Vans.css'

function VanCard({imageUrl, name, price, type}){
    return(
        <div className="van--card">
            
            <img src={imageUrl} className="van--card--image"/>
            <div className="van--info">
               <span>{name}</span> 
               <span>${price}/day</span>
            </div>
            <i className="van--type">{type}</i>
        </div>
    )
}

function Vans(){
    const [vans, setVans] = useState([])


    useEffect( () => {
       fetch('/api/vans')
            .then( res => res.json())
            .then( data => {
                setVans(data.vans);
                
            })
        
    }, [])

    let vansElements = vans.map( van => {
        return <div key={van.id}>
                  <VanCard name={van.name} 
                           price={van.price} 
                           imageUrl={van.imageUrl} 
                           type={van.type}/>  
               </div>
    })

    return(
        <div>
            <h1>Vans</h1>

            <div className="vans--container">

                {vansElements}
            </div>
        </div>
    )
}


export default Vans