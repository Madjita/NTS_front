import React from 'react';
import TableColumn2 from '../TableColumn2/TableColumn2';
import { ITableData } from '../../Table/TableInterface/TableInterface';
import './TableHead2.css'

type Props = {
    className?: string,
    children?: ITableData,
}
  

 
const TableHead2:  React.FC<Props> = ({children}) => {

    let columns =  children?.headers.map((element,index)=>{
        return <TableColumn2 key={index} children={element} type='header'/>
    })

    return(
            <thead className='tableHead'>
                <tr>
                    {columns}
                </tr>
            </thead>
    )
}

export default TableHead2;