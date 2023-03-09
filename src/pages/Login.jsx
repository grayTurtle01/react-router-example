import React, { useState } from "react"
import { Form, useLocation, useNavigate } from "react-router-dom"
import { loginUser } from "../../services"

import './Login.css'

export async function action(obj){
    let { request, params } = obj
    let formData = await request.formData()

    let email = formData.get('email')
    let password = formData.get('password')

    let data = await loginUser({email, password})
    localStorage.setItem('logged', true)


    return 'foo'
}

export default function Login() {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const location = useLocation()
    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)

    const navigate = useNavigate()

    const { lastPath } = location.state ?? '/'

    function handleSubmit(e) {
        e.preventDefault()
       
        setStatus('submitting')
        setError(null)

        loginUser( loginFormData )
            .then( res => {
                console.log(res);
                setError(null)
                localStorage.setItem('logged', true)
                navigate(lastPath, { replace: true} )
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

    function fillFields(){
        setLoginFormData({
            email: 'b@b.com',
            password: 'p123'
        })
    }

  

    return (
        <div className="login-container">

            { location.state && <h1 className="error">{location.state.message}</h1>}

            <h1>Sign in to your account</h1>
            <h2 className="error">{ error && error.message }</h2>

            <Form action='/login' method="post" className="login-form">
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
            </Form>

            <button onClick={ fillFields }>Dummy Creedentials</button>
        </div>
    )

}