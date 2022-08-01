import React from 'react';
import './layoutPanel1.css';



type Props = {
    className?: string
}
  

 
const LayoutPanel1:  React.FC<Props> = (props) => {
    /*const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }*/
    return(
            <div className='LayoutPanel'>
              <div className="DashboardCompanyInfo">
                 <div className='CompanyInfoContainer'>
                    <div className="companyLogo link" data-automation="companyLogo" style={{backgroundImage: 'url(https://secure.zervant.com/images/addcompanyinfo_dashboard.svg)'}}/>
                    <div className="companyInfoEmptyState">
                        <div data-automation="setCompanyInfoLink" className="Button link"><span>Add company details</span></div>
                    </div>
                 </div>
                 <div className="actionButton">
                     <div className="Button accept button-menu-div">
                        <div data-automation="createInvoiceMenuButton" className="menu-base"><span>New invoice</span></div>
                        <div data-automation="createInvoiceMenuButton-menu" className="dropdown"></div>
                     </div>
                </div>
                 <div style={{clear:'both'}}></div>
              </div>
            </div>
    )
}

export default LayoutPanel1;