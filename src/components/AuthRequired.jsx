import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

function AuthRequired() {
    let location = useLocation()

    // let isLogged = localStorage.getItem('logged')
    let isLogged = true


    if( !isLogged ){
        return <Navigate to='/login'
                         replace 
                         state={ 
                            { 
                                message:'You must login first',
                                lastPath: location.pathname
                            }
                        } 
                         />
    }

    return <Outlet />
}

export default AuthRequired