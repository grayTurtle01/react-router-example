import React from 'react';
import { Link } from 'react-router-dom';
import imagen from '../assets/home-hero.png'

export function Home() {

    return (
        <div className='home'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <img src={imagen} className='home-image' />
            <Link to="vans">Find your van</Link>
        </div>
    );
}
