import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {
    let error = useRouteError()
    console.log(error.message);

    return (
        <div>
            <h1> Error: {error.message }</h1>
            <p>{error.status}</p>
        </div>

    )
}

export default Error