import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanInfo() {
  let { van } = useOutletContext()

  return (
    <div>
      <p>{van.description}</p>
    </div>
  )
}

export default HostVanInfo