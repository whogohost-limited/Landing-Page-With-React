import React from 'react'
import hero from './hero.jpg'

function Hero() {
    return(
    <div className="container bg-primary hero-image flex flex-col center ">
        <img src={hero} alt="hero image" height={300} width={448} className="rounded"/>
        <h1 className="hero-title bold mb-0">What Kind Of Developer You?</h1>
        <p className="lead-text">Take this quiz to find out what kind of developer you are!</p>
        <button className="btn blue-dark white-text p-4">Take this Quiz</button>
    </div>
    )
}

export default Hero