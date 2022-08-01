import React from 'react';
import './TableRow.css'

import TableColumn from '../TableColumn'


type Props = {
    children?: any,
}
  

 
const TableRow:  React.FC<Props> = ({children}) => {

    let column;

    if(Array.isArray(children))
    {
        column =  children.map((element,index) => {
                return <TableColumn key={index} children={element}/>
        })
    }

    return(
            <tr className='TableRow'>
                {column}
            </tr>
    )
}

export default TableRow;