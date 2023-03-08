import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'



function Header() {
    let navigate = useNavigate()

    function handleClick(){
        localStorage.removeItem('logged')
        navigate('/login')
    }

    return (
        <header>
            <nav>
                <NavLink to={'/'} className='logo' >#App</NavLink>


                <NavLink className={ ({isActive}) => isActive? 'is-active': '' } 
                         to={'/host'}>Host</NavLink>
                <NavLink className={ ({isActive}) => isActive? 'is-active': '' } 
                         to={'/about'}>About</NavLink>
                <NavLink className={ ({isActive}) => isActive? 'is-active': '' } 
                         to={'/vans'}>Vans</NavLink>
                <NavLink className={ ({isActive}) => isActive? 'is-active': '' } 
                         to={'/login'}>Login</NavLink>

                {   localStorage.getItem('logged') &&
                    <button onClick={ handleClick }>LogOut</button>
                }
            </nav>
        </header>
    )
}

export default Header