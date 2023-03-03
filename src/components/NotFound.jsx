import React from 'react'
import { Link } from 'react-router-dom'

let link_styles = {
    background: 'black',
    color: 'white',
    padding: '20px',

    display: 'inline-block',
    width: '80%',

    borderRadius: '10px',
    margin: '100px 50px',

    textAlign: 'center'

}

function NotFound() {
  return (
    <div>
        <h1>404: Page Not Found</h1>
        <Link to='/' style={link_styles}>
            Back to Home
        </Link>
    </div>
  )
}

export default NotFound