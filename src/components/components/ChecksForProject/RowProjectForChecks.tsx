import { Button, TableCell, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { IBusinessTrip } from '../../IDataInterface/IDataInterface';


type Props = {
    row: IBusinessTrip;
    handleSelectProject: (row: IBusinessTrip) => void;
    handleCloseBuisnessTrip: (row: IBusinessTrip) => void,
    handleRemove: any;
    setRowsPerPage: any;

    index: number;
    color: any;
}

const RowProjectForChecks:  React.FC<Props> = (props) => {

    const {
        row,
        handleSelectProject,
        handleCloseBuisnessTrip,
        handleRemove,
        setRowsPerPage,
        index,
        color,
    } = props;

   return (
    <React.Fragment>
    <TableRow>
        <TableCell align="center"> 
            {index}
        </TableCell>
        <TableCell align="center"> 
            {row.userProject.project.code}
        </TableCell>
        <TableCell align="center"> 
            {row.userProject.project.title}
        </TableCell>
        <TableCell align="center"> 
            {row.name}
        </TableCell>
        <TableCell align="center"> 
            {row.descriptions}
        </TableCell>
        <TableCell align="center"> 
            {row.dateStart ? new Date(row.dateStart).toLocaleDateString(): "-"}
        </TableCell>
        <TableCell align="center"> 
            {
            row.dateEnd ? new Date(row.dateEnd).toLocaleDateString()
            :
            <Button onClick={()=>{handleCloseBuisnessTrip(row)}}>Завершить командировку</Button>
            }
        </TableCell>
        <TableCell align="center"> 
            {row.reportChecks.length}
        </TableCell>
        <TableCell align="center"> 
            {row.spent}
        </TableCell>
        <TableCell align="center"> 
            <Button>
                Скачать архив
            </Button>
        </TableCell>
        <TableCell align="center"> 
            <ArrowRightAltIcon 
            onClick={(event) => {
                handleSelectProject(row);
            }}/>
        </TableCell>
    </TableRow>
    </React.Fragment>
   )
}

export default RowProjectForChecks;


