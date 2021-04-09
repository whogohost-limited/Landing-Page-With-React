import React from 'react';
import FooterOne from './FooterOne'
import Copyright from './Copyright'

function Footer() {
    return(
        <div className="">
            <div className="grid grid-1x4">
                <FooterOne />
            </div>
            <Copyright />
        </div>

    )
}

export default Footer