import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import './App.css'

import '../server.js'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'

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


function Footer() {
    return (
        <footer className='vans--footer'>
            @ 2023 App
        </footer>
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
                </Route>
            </Routes>


            {/* <Footer /> */}

        </BrowserRouter>
    )
}

export default App