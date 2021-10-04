
import React from 'react';
import background from '../../img/pexels-kampus-production-5940841.jpg';
import './HeroSection.css'

const HeroSection = () => {

    return (
        <div className='hero' >
            <div className="hero-text">
                <h3 >The Best Learning Institute</h3>
                <h1>Welcome to our institute</h1>
                <p>We Believe There is nothing More important than education </p>
                <button className='p-2 '>Read More</button>
            </div>

        </div>
    );
};

export default HeroSection;