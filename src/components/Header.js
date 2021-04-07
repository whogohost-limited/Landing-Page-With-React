import React from 'react'

function Header() {
    return(
        <div className="Flex Space-between">
            <li className="Float-right">Logo</li>
            <nav className="Menu-items Flex">
                <li>Save</li>
                <li>Invest</li>
                <li>Stories</li>
                <li>FAQs</li>
                <li>Login</li>
            </nav>
        </div>
    )
}

export default Header