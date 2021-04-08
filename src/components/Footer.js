import React from 'react';
import FooterOne from './FooterOne'
import FooterTwo from './FooterTwo'
import FooterThree from './FooterThree'
import FooterFour from './FooterFour'
import Copyright from './Copyright'

function Footer() {
    return(
        <div className="">
            <div className="grid grid-1x4">
                <FooterOne />
                <FooterTwo />
                <FooterThree />
                <FooterFour />
            </div>
            <Copyright />
        </div>

    )
}

export default Footer