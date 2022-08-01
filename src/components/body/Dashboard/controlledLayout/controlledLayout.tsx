import React from 'react';
import './controlledLayout.css';

import LayoutColumn from './LayoutColumn/LayoutColumn'


import F from '../../../components/F'
import Z from '../../../components/Z'
import H from '../../../components/H'
import X from '../../../components/X'
import Table from '../../../components/Table/Table'

import {ITableData,ITableDataLines} from '../../../components/Table/TableInterface/TableInterface'

type Props = {
    className?: string
}
  



const ControlledLayout:  React.FC<Props> = (props) => {

    

    ///
    let data = new Object as ITableData
    data.headers = []
    data.lines = []

    for (let i = 0; i < 10; i++) {
        data.headers.push("Column "+i);
    }

    for (let i = 0; i < 10; i++) {

        let cells = []

        for (let j = 0; j < 10; j++) {

            cells.push("Row "+i+" Column"+j)
        }

        data.lines.push({cells});
    }

    /*
    data.headers = [
        'Column_1',
        'Column_2',
        'Column_3',
    ]

    data.lines = [
        {cells: [
            'Row_1_Column_1',
            'Row_1_Column_2',
            'Row_1_Column_3',
        ]},
        {cells: [
            'Row_2_Column_1',
            'Row_2_Column_2',
            'Row_2_Column_3',
        ]},
        {cells: [
            'Row_3_Column_1',
            'Row_3_Column_2',
            'Row_3_Column_3',
        ]}
    ]*/
    ///
    let mas = []

    mas.push(<Table key={1} data={data }/>);
    mas.push(<F key={0}/>);
    mas.push(<F key={2}/>);
    mas.push(<F key={3}/>);

    let mas2 = []

    mas2.push(<H key={0}/>);
    mas2.push(<X key={1}/>);
  
    return(
            <div className='controlledLayout Layout'>
                <LayoutColumn children= {mas} flexGrow={2}/>
                <LayoutColumn children= {mas2}  flexGrow={1}/>
            </div>
    )
}

export default ControlledLayout;