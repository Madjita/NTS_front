import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import './header.css';


type Props = {
    className?: string
}
  

  
const Header:  React.FC<Props> = (props) => {

    const navigate = useNavigate();


    const handlerLogout = () => {
        localStorage.clear()
        navigate('/login')
    }

    return(
        <header>
            <div className='header-toolbar'>
                <div id='logo'>
                    Logo
                </div>
                <div className='Menu horizontal' style={{fontSize: '20px'}}>
                    
                <div className="left">
                    <a data-automation="mainmenu-reactDashboard" href="" target="" className="link" id="reactDashboard-tab">Home</a>
                    <a data-automation="mainmenu-reactCustomers" href="" target="" className="link" id="reactCustomers-tab">Customers</a>
                    <a data-automation="mainmenu-productsAndServices" href="" target="" className="link" id="productsAndServices-tab">Products</a>
                    <a data-automation="mainmenu-reactInvoiceList" href="" target="" className="link" id="reactInvoiceList-tab">Invoices</a>
                    <a data-automation="mainmenu-reactEstimateList" href="" target="" className="link" id="reactEstimateList-tab">Estimates</a>
                    <a data-automation="mainmenu-work" href="" target="" className="link" id="work-tab">Time tracking</a>
                    <a data-automation="mainmenu-reactReports" href="" target="" className="link" id="reactReports-tab">Reports</a>
                </div>

                <div className="right">
                    <a data-automation="mainmenu-logout" href="" target="" className="link right" id="logout-tab" onClick={handlerLogout}>Logout</a>
                    <a data-automation="mainmenu-settings" href="" target="" className="link right" id="settings-tab">My account</a>
                    <a data-automation="mainmenu-support" href="" target="_blank" className="link right" id="support-tab">Help</a>
                    <a data-automation="mainmenu-upgrade" href="" target="" className="link right" id="upgrade-tab">Premium</a>
                    <a className="notification-button link right"/>
                 </div>

  
                </div>
            </div>
        </header>
    )
}

export default Header;