import React from 'react'
import hero from './hero.jpg'

function Hero() {
    return(
    <div className="container bg-primary hero-image flex center">
        <img src={hero} alt="hero image" height={300} width={448} className="rounded"/>
    </div>
    )
}

export default Hero