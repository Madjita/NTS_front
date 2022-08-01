import React,{useState} from 'react';
import './Table.css'

import TableHead from './TableHead/TableHead'
import TableBody from './TableBody/TableBody'

import {ITableData} from './TableInterface/TableInterface'


type Props = {
    data?: ITableData
}
  

interface ILoading{
    isLoading: boolean,
}

 
const Table:  React.FC<Props> = ({data}) => {

    const [isLoading_, isLoading] = useState<ILoading>();

    return(
            <div className="scroll-table">
                <div>
                    <table className='scroll-table-head'>
                        <TableHead children={data}/>
                    </table>
                </div>
                <div className='scroll-table-body'>
                    <table>
                        <TableBody children={data}/>
                    </table>
                </div>
            </div>
    )
}

export default Table;