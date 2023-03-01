import React from 'react'
import { Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom'

let link_style = {
    fontWeight: 'bold',
    textDecoration: 'underline'
}

const foo = ({isActive}) => isActive? link_style: {}

function DashboardNav() {
    return (
        <header>
            <nav className='host--nav'>
                <NavLink style={foo} to={'.'} end>Dashboard</NavLink>
                <NavLink style={foo} to={'income'}>Income</NavLink>
                <NavLink style={foo} to={'vans'}>Vans</NavLink>
                <NavLink style={foo} to={'reviews'}>Reviews</NavLink>
            </nav>
        </header>
    )
}

function HostLayout() {
    return (
        <div>
            <DashboardNav />
            <Outlet />
        </div>
    )
}

export default HostLayout