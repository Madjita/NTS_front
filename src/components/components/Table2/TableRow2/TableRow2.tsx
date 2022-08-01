import React from 'react';
import './TableRow2.css'

import TableColumn2 from '../TableColumn2/TableColumn2'


type Props = {
    children?: any,
}
  

 
const TableRow2:  React.FC<Props> = ({children}) => {

    let column;

    if(Array.isArray(children))
    {
        column =  children.map((element,index) => {
                return <TableColumn2 key={index} children={element}/>
        })
    }

    return(
            <tr className='tableRow'>
                {column}
            </tr>
    )
}

export default TableRow2;