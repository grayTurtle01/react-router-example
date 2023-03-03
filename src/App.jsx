import React from 'react'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'


import './App.css'

import '../server.js'
import Vans from './pages/Vans'
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

function Home() {
   
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}




function App() {
    return (
        <BrowserRouter>


            <Routes>
                <Route element={<Layout />}>

                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/vans' element={<Vans />} />
                    <Route path='/vans/:id' element={<VanDetails />} />

                    <Route path='/host' element={<HostLayout />} >
                        <Route index element={<Dashboard />} />
                        <Route path='income' element={<Income />} />
                        <Route path='reviews' element={<Reviews />} />
                        <Route path='vans' element={<HostVans />} />

                        <Route path='vans/:id' element={<HostVan /> } >

                            <Route index element={<HostVanInfo /> } />
                            <Route path='pricing' element={<HostVanPricing />} />
                            <Route path='photos' element={<HostVanPhotos />} />
                        </Route>

                    </Route>

                    <Route path='*' element={<NotFound />} />
                </Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App