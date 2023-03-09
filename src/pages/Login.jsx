import React, { useState } from "react"
import { Form, Navigate, useActionData, useLocation, useNavigate, useNavigation } from "react-router-dom"
import { loginUser } from "../../services"

import './Login.css'

async function action(obj){
    let { request, params } = obj
    let formData = await request.formData()

    let email = formData.get('email')
    let password = formData.get('password')

    try{

        let data = await loginUser({email, password})
        localStorage.setItem('logged', true)
        return data

    }catch(err){
        return {
            error: err.message
        }
    }


}

export default function Login() {
    
    const navigate = useNavigate()
    
    const location = useLocation()
    const  lastPath  = location.state?.lastPath || '/'

    
    let data =  useActionData()
    if (data?.token) {
        // console.log(location.state);

        // navigate(lastPath ?? '/host')
        return <Navigate to='/host' />
    }

    const navigation = useNavigation()
    console.log(navigation);

    return (
        <div className="login-container">

            { data?.error && <h3 className="error">{data.error}</h3>}
            { location.state && <h1 className="error">{location.state.message}</h1>}

            <h1>Sign in to your account</h1>

            <Form action='/login' method="post" className="login-form">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"  
                    type="password"
                    placeholder="Password"
                />
                { navigation.state === 'idle'? 
                 <button>Log in</button> : 
                 <button disabled>Log in ...</button> }
            </Form>

        </div>
    )

}

export { action }