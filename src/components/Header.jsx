import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
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
            </nav>
        </header>
    )
}

export default Header