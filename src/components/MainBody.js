import React from 'react';
import Hero from './Hero'
import Quiz from './Quiz'
import Sidebar from './Sidebar'

function MainBody() {
    return(
        <div>
            <Hero />
            <div className="grid grid-3x2">
                <Quiz />
                <Sidebar />
            </div>
        </div>
    )
}

export default MainBody