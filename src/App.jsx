import React from 'react'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'


import './App.css'

import '../server.js'
import Vans from './pages/Vans'

function Home(){
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About</h1>
        </div>
    )
}


function NavBar(){
    return(
        <nav>

            <Link to={'/'} className='logo' >#App</Link>
            <Link to={'/about'}>About</Link>
            <Link to={'/vans'}>Vans</Link>
        </nav>
    )
}

function Footer(){
    return(
        <footer className='vans--footer'>
         @ 2023 App
        </footer>
    )
}

function App() {
  return (
    <BrowserRouter>
        
        <NavBar />
        
        <Routes>
            <Route path='/'  element={<Home />}/>
            <Route path='/about'  element={<About />}/>
            <Route path='/vans'  element={<Vans />}/>
        </Routes>


        {/* <Footer /> */}

    </BrowserRouter>
  )
}

export default App