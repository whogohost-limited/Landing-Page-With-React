import React from 'react';
import FooterItem from './FooterItem'
import Copyright from './Copyright'

class Footer extends React.Component {
    render() {
        
        return(
            <div className="bg-footer">
                <div className="grid grid-1x4 menu-row">
                    <FooterItem col = {{ title: "Quick Links", menuItemOne: "Domains", menuItemTwo: "Hosting", menuItemThree: "Products", menuItemFour: "Websites", menuItemFive: "More"}} />
                    <FooterItem col = {{ title: "Packages", menuItemOne: "Affiliates", menuItemTwo: "Reseller", menuItemFour: "Enterprise"}} />
                    <FooterItem col = {{ title: "Legal", menuItemOne: "Terms of Service", menuItemTwo: "Poilicy"}} />
                    <FooterItem col = {{ title: "Company", menuItemOne: "3A Olumuyiwa St. Omole", menuItemTwo: "0987654321", menuItemThree: "info@whogohost.com"}} />
                </div>
                <Copyright />
            </div>
        )  

    }

}

export default Footer