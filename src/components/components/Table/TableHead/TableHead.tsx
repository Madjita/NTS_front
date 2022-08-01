import React from 'react';
import './TableHead.css'

import TableColumn from '../TableColumn/TableColumn'

import {ITableData} from '../TableInterface/TableInterface'

type Props = {
    children?: ITableData,
}
 
const TableHead:  React.FC<Props> = ({children}) => {

    /*let columns =  children?.headers.map((element)=>{
        return <TableColumn  children={element} type='header'/>
    })*/
    return(
            <thead className='TableHead'>
                <tr>
                    {
                         children?.headers.map((element,index)=>{
                            return <TableColumn  key={index} children={element} type='header'/>
                        })
                    }
                </tr>
            </thead>
    )
}

export default TableHead;