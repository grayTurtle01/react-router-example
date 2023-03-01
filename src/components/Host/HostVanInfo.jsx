import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  let { van } = useOutletContext()
  console.log(van);

  return (
    <div>
      <h1>{van.name}</h1>
      <p>{van.description}</p>
    </div>
  )
}

export default HostVanInfo