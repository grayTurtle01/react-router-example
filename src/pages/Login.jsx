import React, { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../../services"

import './Login.css'

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const navigate = useNavigate()


    function handleSubmit(e) {
        e.preventDefault()
       
        setStatus('submitting')
        setError(null)

        loginUser( loginFormData )
            .then( res => {
                console.log(res);
                setError(null)
                navigate('/host')
            })
            .catch( err => {
                console.log(err);
                setError(err)
                
            }).finally( () => {
                setStatus('idle')
                
            })
            
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

  
    return (
        <div className="login-container">

            { location.state && <h1>{location.state.message}</h1>}

            <h1>Sign in to your account</h1>
            <h2 className="error">{ error && error.message }</h2>

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                { status === 'idle'? 
                 <button>Log in</button> : 
                 <button disabled>Log in ...</button> }
            </form>
        </div>
    )

}