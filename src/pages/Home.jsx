import React from 'react';
import imagen from '../assets/home-hero.png'

export function Home() {

    return (
        <div className='home'>
            <h1>Home</h1>
            <img src={imagen} className='home-image' />
        </div>
    );
}
