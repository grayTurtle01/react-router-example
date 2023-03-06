import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import imagen from '../assets/home-hero.png'

export function loader(){
    // throw new Error('Hello Error')
    return "Hello from hello-Loader"
}

export function Home() {
    let data = useLoaderData()

    return (
        <div className='home'>
            <h1>You got the travel plans, we got the travel vans.</h1>
            <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
            <img src={imagen} className='home-image' />
            <Link to="vans">Find your van</Link>
        </div>
    );
}
