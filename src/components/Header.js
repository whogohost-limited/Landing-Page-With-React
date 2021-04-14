import React from 'react'
import logo from './logo.png'

class Header extends React.Component {

    render() {

        return(
            <div className="container menu flex space-between v-center">
    
                <li className="float-right">
                    <a href="#">
                        <img src={logo} alt="logo" />
                    </a>
                </li>
                <nav className="menu-items flex">
                    <li><a href="#">Save</a></li>
                    <li><a href="#">Invest</a></li>
                    <li><a href="#">Stories</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Login</a></li>
                    <li className="btn blue-dark"><a href="#" className="white-text">Create a Free Account</a></li>
                </nav>
    
                <nav className="mobile-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </nav>
    
            </div>
        )
        
    }
}

export default Header