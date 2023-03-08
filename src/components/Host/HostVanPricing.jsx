import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {
  const {van} = useOutletContext()

  return (
    <div>
      <h2>${van.price}/day</h2>
    </div>
  )
}

export default HostVanPricing