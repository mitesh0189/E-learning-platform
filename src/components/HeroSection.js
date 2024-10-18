import React from 'react'
import {Button} from './Button'
import '../css/HeroSection.css' 
function HeroSection() {
    return (
        <div className='hero-container'>
            <img src="/images/banner07.jpg" />
            <h1 className="hero-text" >The Only Place for Programming Hustlers!</h1>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--calltoaction' buttonSize='btn--large'>GET STARTED</Button>
            </div>
            
        </div>
    );
}

export default HeroSection
