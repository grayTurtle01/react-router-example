import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const {van} = useOutletContext()

  return (
    <div>
        <h1>HostVanPhotos</h1>
        <img src={van.imageUrl} height="50" />
    </div>
  )
}

export default HostVanPhotos