import React from 'react';

import image from '../assets/about-hero.png'

export function About() {
    return (
        <div className='about'>
            <h1>About</h1>
            <img src={image} className='about-image'  />
        </div>
    );
}
