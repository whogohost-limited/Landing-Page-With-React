import Reac from 'react'

function FooterItem(props) {
    return(

        <div>
            <ul className="footer-menu">
                <li>
                    <a href="">{props.col.title}</a>
                </li>
                <li>
                    <a href="">{props.col.menuItemOne}</a>
                </li>
                <li>
                    <a href="">{props.col.menuItemTwo}</a>
                </li>
                <li>
                    <a href="">{props.col.menuItemThree}</a>
                </li>
                <li>
                    <a href="">{props.col.menuItemFour}</a>
                </li>
                <li>
                    <a href="">{props.col.menuItemFive}</a>
                </li>
            </ul>
        </div>
    )
}

export default FooterItem