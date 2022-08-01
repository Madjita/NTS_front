import React from 'react';
import './TableColumn2.css'



type Props = {
    children?: any,
    type?: string,
}
  

 
const TableColumn2:  React.FC<Props> = ({children,type}) => {

    /*if(type == null)
    {
        return (
            <td className=''>
                {children}
            </td>
        )
    }*/
    
    let flag = (type === 'header')

    return(
            flag ?  
                    <th className=''>
                            <p>{children}</p>
                     </th> 
            :

                    <td className=''>
                        {children}
                    </td>
          
    )
}

export default TableColumn2;