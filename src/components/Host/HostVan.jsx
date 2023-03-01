import React from 'react'
import { useParams } from 'react-router-dom'

function HostVan() {
    let parameters = useParams()

    return (
        <div>
            <h1>HostVan:  {parameters.id}</h1>
        </div>
    )
}

export default HostVan