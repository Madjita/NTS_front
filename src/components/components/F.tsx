import React from 'react';
import './F.css'

type Props = {
    className?: string
}
  

 
const F:  React.FC<Props> = (props) => {
    return(
           

<div className="Initial">
   <div className="OutstandingInvoices">
      <div className="OutstandingInvoicesInfo">
         <div className="InfoTitle">Outstanding invoices</div>
         <div className="InvoicesInfoRow NewInvoicesInfoRow">
            <div className="InvoicesInfoRow__indicator">+</div>
            <div className="InvoicesInfoRow__content">
               <div className="InvoicesInfoRow__label">Create your first invoice</div>
            </div>
         </div>
         <div className="InvoicesInfoRow OpenInvoicesInfoRow faded">
            <div className="InvoicesInfoRow__indicator small"></div>
            <div className="InvoicesInfoRow__content">
               <div className="InvoicesInfoRow__label">Due</div>
               <div className="InvoicesInfoRow__value"></div>
            </div>
         </div>
         <div className="InvoicesInfoRow OverdueLessThan30daysInvoicesInfoRow faded">
            <div className="InvoicesInfoRow__indicator small"></div>
            <div className="InvoicesInfoRow__content">
               <div className="InvoicesInfoRow__label">Overdue &lt; 30 days</div>
               <div className="InvoicesInfoRow__value"></div>
            </div>
         </div>
         <div className="InvoicesInfoRow OverdueMoreThan30daysInvoicesInfoRow faded">
            <div className="InvoicesInfoRow__indicator small"></div>
            <div className="InvoicesInfoRow__content">
               <div className="InvoicesInfoRow__label">Overdue &gt; 30 days</div>
               <div className="InvoicesInfoRow__value"></div>
            </div>
         </div>
      </div>
      <div className="OutstandingInvoicesPie" style={{position: 'relative'}}>
         <div style={{overflow: 'visible', height: '0px'}}>
            <div className="ZervantPie">
               <svg width="250" height="270">
                  <g className="vx-group" transform="translate(125, 135)">
                     <g>
                        <path className="ZervantPie__Arc" d="M6.735557395310443e-15,-110A110,110,0,1,1,6.735557395310443e-15,110L5.5109105961630896e-15,90A90,90,0,1,0,5.5109105961630896e-15,-90Z" fill="#0F9FAF"></path>
                     </g>
                     <g>
                        <path className="ZervantPie__Arc" d="M6.735557395310443e-15,110A110,110,0,0,1,-104.6162167924669,-33.9918693812442L-85.59508646656383,-27.811529493745255A90,90,0,0,0,5.5109105961630896e-15,90Z" fill="#eb5b3f"></path>
                     </g>
                     <g>
                        <path className="ZervantPie__Arc" d="M-104.6162167924669,-33.9918693812442A110,110,0,0,1,-2.0206672185931328e-14,-110L-1.6532731788489267e-14,-90A90,90,0,0,0,-85.59508646656383,-27.811529493745255Z" fill="#B22222"></path>
                     </g>
                  </g>
               </svg>
               <div className="ZervantPie__text" style={{width: '250px', height: '270px'}}>
                  <div className="underlayComponent">
                     <div className="OutstandingTotalAmount">0,00 R</div>
                     <div className="OutstandingTotalCount">0 Invoices</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="resize-triggers">
            <div className="expand-trigger">
               <div style={{width: '251px', height: '271px'}}></div>
            </div>
            <div className="contract-trigger"></div>
         </div>
      </div>
   </div>
</div>


    )
}

export default F;