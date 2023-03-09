import React from 'react'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom'


import './App.css'

import '../server.js'
import Vans, { loader as vansLoader } from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Dashboard from './components/Host/Dashboard'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import HostLayout from './components/Host/HostLayout'
import HostVans from './components/Host/HostVans'
import HostVan from './components/Host/HostVan'
import HostVanPricing from './components/Host/HostVanPricing'
import HostVanPhotos from './components/Host/HostVanPhotos'
import HostVanInfo from './components/Host/HostVanInfo'
import NotFound from './components/NotFound'
import { Home, loader as homeLoader } from './pages/Home'
import { About } from './pages/About'

import Error from './components/Error'
import Login, { action as loginAction } from './pages/Login'
import AuthRequired from './components/AuthRequired'

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />} errorElement={<Error />}>

        <Route path='/' element={<Home />}
               loader={homeLoader} />
        <Route path='/about' element={<About />} />
        <Route path='/vans' element={<Vans />} loader={vansLoader} />
        <Route path='login' element={<Login />} action={loginAction}/>

        <Route path='/vans/:id' element={<VanDetails />} />


        <Route element={<AuthRequired />}>
            <Route path='/host' element={<HostLayout />} >
                <Route index element={<Dashboard />} />
                <Route path='income' element={<Income />} />
                <Route path='reviews' element={<Reviews />} />
                <Route path='vans' element={<HostVans />} />

                <Route path='vans/:id' element={<HostVan />} >

                    <Route index element={<HostVanInfo />} />
                    <Route path='pricing' element={<HostVanPricing />} />
                    <Route path='photos' element={<HostVanPhotos />} />
                </Route>

            </Route>

            <Route path='protected' element={<h1>Super Secrete Info</h1>} />

        </Route>


       

        <Route path='*' element={<NotFound />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    )
}

export default App