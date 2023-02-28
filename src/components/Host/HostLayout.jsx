import React from 'react'
import { Outlet } from 'react-router-dom'

import { Link } from 'react-router-dom'

function DashboardNav() {
    return (
        <header>
            <nav className='host--nav'>
                <Link to={'/host/'}>Dashboard</Link>
                <Link to={'/host/income'}>Income</Link>
                <Link to={'/host/reviews'}>Reviews</Link>
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