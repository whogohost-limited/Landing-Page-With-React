import React from 'react'
import team from './team.png'
import play from './play.png'
import appstore from './appstore.svg'

function Sidebar() {
    return(
        <div className="side-nav">
            <img src={team} alt="team" className="max-width" />
            <h2 className="hero-title bold">
                Join over 2,000,000 people who trust us to save, invest and reach their financial goals.
            </h2>
        <button className="btn blue-dark white-text p-4">Create a free account</button>
        <img src={play} alt="Playstore" className="max-width" />
        <img src={appstore} alt="Playstore"/>
        </div>
    )
}

export default Sidebar