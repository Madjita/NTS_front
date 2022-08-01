import React from 'react';

import { ITableData } from '../Table/TableInterface/TableInterface';
import './Table2.css';
import TableBody2 from './TableBody2/TableBody2';
import TableHead2 from './TableHead2/TableHead2';

interface Props {
    className?: string,
    data?: ITableData,
    key?: string
}
  

 
const Table2:  React.FC<Props> = ({data}) => {


    return(
            <div className='table-events__table-wrapper'>
                            
<table className='table2'>
   <TableHead2 children={data}/>
   <TableBody2 children={data}/>
</table>

            </div>
    )
}

export default Table2;


/*
   <tr>
         <td className="company">
            <div className="small-logo">
               <div>
                  <a href="https://finrange.com/ru/company/NYSE/CPB" className="small-logo__inner">
                     <img src="https://finrange.com/storage/companies/logo/svg/NYSE_CPB.svg" alt="" className="small-logo__img" width="26" height="26"/> 
                     <div className="small-logo__text"><span data-toggle="tooltip" data-original-title="Campbell Soup" className="small-logo__name-company">
                        Campbell Soup
                        </span> <span className="small-logo__ticker-company">
                        CPB
                        </span>
                     </div>
                  </a>
               </div>
               
            </div>
         </td>
         <td className="date">
            08.06.2022
         </td>
         <td className="events">
            <div className="company-events"><span className="company-events__round" style={{backgroundColor: 'rgb(0, 192, 255)'}}></span>
               Финансовые результаты за 3 кв. 2022 г.
            </div>
            <div className="company-data company-data-mobile">
               <div className="small-logo">
                  <div>
                     <a href="https://finrange.com/ru/company/NYSE/CPB" className="small-logo__inner">
                        <img src="https://finrange.com/storage/companies/logo/svg/NYSE_CPB.svg" alt="" className="small-logo__img" width="26" height="26"/> 
                        <div className="small-logo__text"><span data-toggle="tooltip" data-original-title="Campbell Soup" className="small-logo__name-company">
                           Campbell Soup
                           </span> <span className="small-logo__ticker-company">
                           CPB
                           </span>
                        </div>
                     </a>
                  </div>
                  
               </div>
            </div>
         </td>
      </tr>
      <tr>
         <td className="company">
            <div className="small-logo">
               <div>
                  <a href="https://finrange.com/ru/company/NYSE/ABM" className="small-logo__inner">
                     <img src="https://financialmodelingprep.com/image-stock/ABM.jpg" alt="" className="small-logo__img" width="26" height="26"/> 
                     <div className="small-logo__text"><span data-toggle="tooltip" data-original-title="ABM Industries" className="small-logo__name-company">
                        ABM Industries
                        </span> <span className="small-logo__ticker-company">
                        ABM
                        </span>
                     </div>
                  </a>
               </div>
               
            </div>
         </td>
         <td className="date">
            08.06.2022
         </td>
         <td className="events">
            <div className="company-events"><span className="company-events__round" style={{backgroundColor: 'rgb(0, 192, 255)'}}></span>
               Финансовые результаты за 2 кв. 2022 г.
            </div>
            <div className="company-data company-data-mobile">
               <div className="small-logo">
                  <div>
                     <a href="https://finrange.com/ru/company/NYSE/ABM" className="small-logo__inner">
                        <img src="https://financialmodelingprep.com/image-stock/ABM.jpg" alt="" className="small-logo__img" width="26" height="26"/> 
                        <div className="small-logo__text"><span data-toggle="tooltip" data-original-title="ABM Industries" className="small-logo__name-company">
                           ABM Industries
                           </span> <span className="small-logo__ticker-company">
                           ABM
                           </span>
                        </div>
                     </a>
                  </div>
                  
               </div>
            </div>
         </td>
      </tr>
*/