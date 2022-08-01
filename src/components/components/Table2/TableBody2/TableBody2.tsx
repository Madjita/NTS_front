import React from 'react';
import './TableBody2.css'

import TableRow from '../../Table/TableColumn/TableRow/TableRow';

import {ITableData,ITableDataLines} from '../../Table/TableInterface/TableInterface'
import TableColumn from '../../Table/TableColumn/TableColumn';
import TableRow2 from '../TableRow2/TableRow2';


type Props = {
    children?: ITableData,
}
  

const TableBody2:  React.FC<Props> = ({children}) => {


    
    let rows =  children?.lines.map((elementRow, index)=>{


        let columns = elementRow.cells.map((elementColumn)=>{
            if(elementColumn === null)
            {
                return "-"
            }
            return elementColumn
       })

       return <TableRow2 key={index}  children={columns}/>
     

      
    })

    return(
            <tbody className=''>
                {rows}
            </tbody>
    )
}

export default TableBody2;