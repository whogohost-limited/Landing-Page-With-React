import React from 'react';
import FooterItem from './FooterItem'
import Copyright from './Copyright'

function Footer() {
    return(
        <div className="bg-footer">
            <div className="grid grid-1x4 menu-row">
                <FooterItem col = {{ title: "Quick Links", menuItemOne: "Domains", menuItemTwo: "Hosting", menuItemFour: "Websites", menuItemFive: "More"}} />
                <FooterItem col = {{ title: "Packages", menuItemOne: "Affiliates", menuItemTwo: "Reseller", menuItemFour: "Enterprise"}} />
                <FooterItem col = {{ title: "Legal", menuItemOne: "Terms of Service", menuItemTwo: "Poilicy"}} />
                <FooterItem col = {{ title: "Company", menuItemOne: "Whogohost is a Web hosting company that specializes in all things web"}} />
            </div>
            <Copyright />
        </div>

    )
}

export default Footer