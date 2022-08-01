import React from 'react';
import './TableBody.css'

import TableRow from '../TableColumn/TableRow/TableRow';

import {ITableData,ITableDataLines} from '../TableInterface/TableInterface'
import TableColumn from '../TableColumn/TableColumn';


type Props = {
    children?: ITableData,
}
  

const TableBody:  React.FC<Props> = ({children}) => {


    

    /*let rows =  children?.lines.map((elementRow)=>{
            let columns = elementRow.cells.map((elementColumn)=>{
                return elementColumn
           })
           return <TableRow  children={columns}/>
        
     })*/

     return(
        <tbody className='TableTbody'>
            {
                 children?.lines.map((elementRow,index)=>{
                    let columns = elementRow.cells.map((elementColumn,index2)=>{
                        return elementColumn
                   })
                   return <TableRow key={index} children={columns}/>
                
             })
            }
        </tbody>
    )
   

   
}

export default TableBody;