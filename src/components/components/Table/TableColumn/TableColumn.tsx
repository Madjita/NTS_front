import React from 'react';
import './TableColumn.css'



type Props = {
    children?: any,
    type?: string,
}
  

 
const TableColumn:  React.FC<Props> = ({children,type}) => {

    let flag = type === 'header'
    return(
            flag ?  
                    <th className='TableColumn'>
                            <p>{children}</p>
                     </th> 
            :

                    <td className='TableColumn'>
                        <p>{children}</p>
                    </td>
          
    )
}

export default TableColumn;