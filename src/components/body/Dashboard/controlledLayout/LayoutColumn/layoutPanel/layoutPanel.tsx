import React from 'react';
import './layoutPanel.css';


type Props = { 
    children: React.ReactNode,
    maxWidth?: number
 };

 
const LayoutPanel:  React.FC<Props> = ({children,maxWidth}) => {
    /*const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }*/
    return(
         <div  className='LayoutPanel' style={{maxWidth: maxWidth}}>
             {children}
         </div>
        /*
            <div className=''>
                <div className="sales-graph__heading">Sales</div>
                <div className="sales-graph__summary">
                    <div className="sales-graph__summary__heading">Last 12 months</div>
                    <div className="sales-graph__summary__amount" data-automation="sales-last-12-months">0,00 R</div>
                </div>
                <div className="sales-graph__summary">
                    <div className="sales-graph__summary__heading">This month</div>
                    <div className="sales-graph__summary__amount" data-automation="sales-last-month">0,00 R</div>
                </div>
            </div>
        */
    )
}

export default LayoutPanel;