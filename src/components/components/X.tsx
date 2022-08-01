import React from 'react';
import './X.css'

type Props = {
    className?: string
}



 
const H:  React.FC<Props> = (props) => {

    return(
          
        <div className='top-sales-graph initial'>
           

<div className="top-sales-graph__heading">Top customers</div>
<div className="top-sales-graph__last-12-months">Last 12 months</div>
<div className="top-sales-graph__graph" style={{height: '210px', position: 'relative'}}>
   <div style={{overflow: 'visible', height: '0px', width: '0px'}}>
      <div style={{position: 'relative', width: 'inherit', height: 'inherit'}}>
         <svg width="381" height="210">
            <rect width="331" height="210" rx="14" fill="white"></rect>
            <g className="vx-group" transform="translate(130, 0)">
               <g className="vx-group vx-columns" transform="translate(0, 0)">
                  <line className="vx-line" x1="0" y1="0" x2="0" y2="180" fill="transparent" stroke="#eaf0f6" strokeWidth="1"></line>
                  <line className="vx-line" x1="84" y1="0" x2="84" y2="180" fill="transparent" stroke="#eaf0f6" strokeWidth="1"></line>
                  <line className="vx-line" x1="168" y1="0" x2="168" y2="180" fill="transparent" stroke="#eaf0f6" strokeWidth="1"></line>
               </g>
               <rect y="18" x="0" width="101" height="12" fill="#6bc733" clipPath="url(#0-1vwq8-top-round-corner)"></rect>
               <rect y="51" x="0" width="84" height="12" fill="#6bc733" clipPath="url(#1-1vwq8-top-round-corner)"></rect>
               <rect y="84" x="0" width="67" height="12" fill="#6bc733" clipPath="url(#2-1vwq8-top-round-corner)"></rect>
               <rect y="117" x="0" width="50" height="12" fill="#6bc733" clipPath="url(#3-1vwq8-top-round-corner)"></rect>
               <rect y="150" x="0" width="34" height="12" fill="#6bc733" clipPath="url(#4-1vwq8-top-round-corner)"></rect>
               <defs>
                  <clipPath id="0-1vwq8-top-round-corner">
                     <rect x="-4" y="18" width="205" height="12" rx="3" ry="3"></rect>
                  </clipPath>
               </defs>
               <rect y="18" x="101" width="100" height="12" fill="rgba(107,199,51,0.5)" clipPath="url(#0-1vwq8-top-round-corner)"></rect>
               <defs>
                  <clipPath id="1-1vwq8-top-round-corner">
                     <rect x="-4" y="51" width="172" height="12" rx="3" ry="3"></rect>
                  </clipPath>
               </defs>
               <rect y="51" x="84" width="84" height="12" fill="rgba(107,199,51,0.5)" clipPath="url(#1-1vwq8-top-round-corner)"></rect>
               <defs>
                  <clipPath id="2-1vwq8-top-round-corner">
                     <rect x="-4" y="84" width="138" height="12" rx="3" ry="3"></rect>
                  </clipPath>
               </defs>
               <rect y="84" x="67" width="67" height="12" fill="rgba(107,199,51,0.5)" clipPath="url(#2-1vwq8-top-round-corner)"></rect>
               <defs>
                  <clipPath id="3-1vwq8-top-round-corner">
                     <rect x="-4" y="117" width="105" height="12" rx="3" ry="3"></rect>
                  </clipPath>
               </defs>
               <rect y="117" x="50" width="51" height="12" fill="rgba(107,199,51,0.5)" clipPath="url(#3-1vwq8-top-round-corner)"></rect>
               <defs>
                  <clipPath id="4-1vwq8-top-round-corner">
                     <rect x="-4" y="150" width="71" height="12" rx="3" ry="3"></rect>
                  </clipPath>
               </defs>
               <rect y="150" x="34" width="33" height="12" fill="rgba(107,199,51,0.5)" clipPath="url(#4-1vwq8-top-round-corner)"></rect>
               <g className="vx-group vx-axis vx-axis-left" transform="translate(0, 0)">
                  <g className="z-bar-left-axis">
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(-128, 30)" fontSize="12" textAnchor="left" fill="#889492">Jane the Builder</text>
                     </g>
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(-128, 63)" fontSize="12" textAnchor="left" fill="#889492">Bob's Flower Shop</text>
                     </g>
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(-128, 96)" fontSize="12" textAnchor="left" fill="#889492">Sasha's Pet Salon</text>
                     </g>
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(-128, 129)" fontSize="12" textAnchor="left" fill="#889492">The Bun Factory</text>
                     </g>
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(-128, 162)" fontSize="12" textAnchor="left" fill="#889492">Ma's Berry Pies</text>
                     </g>
                  </g>
               </g>
               <g className="vx-group vx-axis vx-axis-bottom" transform="translate(0, 180)">
                  <g className="z-bar-bottom-axis">
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(0, 28)" fontSize="12" textAnchor="middle" fill="#889492">0</text>
                     </g>
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(84, 28)" fontSize="12" textAnchor="middle" fill="#889492">5,000</text>
                     </g>
                     <g className="vx-group z-bar-axis-tick" transform="translate(0, 0)">
                        <text transform="translate(168, 28)" fontSize="12" textAnchor="middle" fill="#889492">10,000</text>
                     </g>
                     <text textAnchor="middle" transform="translate(100.5, 50)" fontSize="8"></text>
                  </g>
               </g>
            </g>
         </svg>
      </div>
   </div>
   <div className="resize-triggers">
      <div className="expand-trigger">
         <div style={{width: '332px', height: '211px'}}></div>
      </div>
      <div className="contract-trigger"></div>
   </div>
</div>


        </div>
     



    )
}

export default H;