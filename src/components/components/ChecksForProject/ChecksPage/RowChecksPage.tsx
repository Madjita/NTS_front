import { Button, TableCell, TableRow, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

type Props = {
    page: any;
    rowsPerPage: any;
    index: any;
    row: any;
    labelId: any;
    rowsCount: any;
    order: any;
    handleRemove: any;
    setRowsPerPage: any;
    color: any;
}

const RowChecksPage:  React.FC<Props> = (props) => {

    const {
        page,
        rowsPerPage,
        index,
        row,
        labelId,
        rowsCount,
        order,
        handleRemove,
        setRowsPerPage,
        color,
    } = props;

   return (
    <React.Fragment>
    <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center"> 
            {"1"}
        </TableCell>
        <TableCell align="center"> 
            {"12345654432"}
        </TableCell>
        <TableCell align="center"> 
            {"Аргентина"}
        </TableCell>
        <TableCell align="center"> 
            {"20/12/2022"}
        </TableCell>
        <TableCell align="center"> 
            {"20/12/2023"}
        </TableCell>
        <TableCell align="center"> 
           {"5"}
        </TableCell>
        <TableCell align="center"> 
           {"20000"}
        </TableCell>
        <TableCell align="center"> 
            <Button>
                Скачать архив
            </Button>
        </TableCell>
    </TableRow>
    </React.Fragment>
   )
}

export default RowChecksPage;


