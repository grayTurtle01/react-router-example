import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  const {van} = useOutletContext()

  return (
    <div className='host-van-photos'>
        {/* <h1>HostVanPhotos</h1> */}
        <img src={van.imageUrl} className="host-van-photo" />
    </div>
  )
}

export default HostVanPhotos