import React from 'react'

class FooterItem extends React.Component {

    render() {

        return(
    
            <div>
                <ul className="footer-menu">
                    <li>
                        <a className="title">{this.props.col.title}</a>
                    </li>
                    <li>
                        <a href="">{this.props.col.menuItemOne}</a>
                    </li>
                    <li>
                        <a href="">{this.props.col.menuItemTwo}</a>
                    </li>
                    <li>
                        <a href="">{this.props.col.menuItemThree}</a>
                    </li>
                    <li>
                        <a href="">{this.props.col.menuItemFour}</a>
                    </li>
                    <li>
                        <a href="">{this.props.col.menuItemFive}</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FooterItem