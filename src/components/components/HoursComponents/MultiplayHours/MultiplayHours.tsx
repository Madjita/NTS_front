import React from 'react';
import { IProject, IUser, IUserProject, IWeek } from '../../../IDataInterface/IDataInterface';

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import { visuallyHidden } from '@mui/utils';
import { Collapse } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import IconDelete from '@mui/icons-material/Delete'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useNavigate } from 'react-router-dom';
import { getComparator, stableSort } from '../../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_AllProject';
import RowMultiplayHours from './RowMultiplayHours';

type Props = {
    outSideTextColor?: any,
    outSideCountView?: number,
    color?: string;
}

type Order = 'asc' | 'desc';

const MultiplayHours:  React.FC<Props> = ({outSideTextColor,outSideCountView,color}) => {

    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(outSideCountView ? outSideCountView : 10);

    const [list, setList] = React.useState<IUserProject[]>([{
        project: new Object as IProject,
        user: new Object as IUser,
        weeks: [{
            numberWeek: 32
        }] as IWeek[]
    }]);

      // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - list.length) : 0;


    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        setRowsPerPage(parseInt(event.target.value, 3));
        setPage(0);
    };
    
    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const [count, setCount] = React.useState(0);

    const handleAddRowInList = (e: any) =>{
        setList(list => [...list, {
            project: new Object as IProject,
            user: new Object as IUser,
            weeks: [{
                numberWeek: 32+count
            }] as IWeek[]
        }]);

        setCount(count+1);

    }

    const handleRemove = async (index: number) =>
    {    
        list.splice(index,1);
        setList(list => [...list]);
    }

    const handleAddHours = (e:any) =>
    {    
        console.log("newWeek list = ",list)
    }

    return(
        <div style={{
          position: 'relative',
          height: '100%',
        }}>
                  <TableContainer  style={{overflowX: 'inherit'}}>
                    <Table
                      aria-labelledby="tableTitle"
                      size="small"
                    >
                    <TableHead>

                    <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
                              <TableCell colSpan={12} sx={{textAlign:'center'}}>
                                  <Button onClick={handleAddHours}>
                                      Загрузить почасовку
                                  </Button>
                              </TableCell>
                      </TableRow>
                      <TableRow>
                          <TableCell align="center" style={{color: color}}>№</TableCell>
                          <TableCell align="center" style={{color: color}}>Номер недели</TableCell>
                          <TableCell align="center" style={{color: color}}>День недели</TableCell>
                          <TableCell align="center" style={{color: color}}>Проект</TableCell>
                          <TableCell align="center" style={{color: color}}>Инженер</TableCell>
                          <TableCell align="center" style={{color: color}}>Код</TableCell>
                          <TableCell align="center" style={{color: color}}>Начало работы</TableCell>
                          <TableCell align="center" style={{color: color}}>Окончание работы</TableCell>
                          <TableCell align="center" style={{color: color}}>Количество часов</TableCell>
                          <TableCell align="center" style={{color: color}}></TableCell>
                      </TableRow>
                      </TableHead>
                      <TableBody>


                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                        rows.slice().sort(getComparator(order, orderBy)) */}
                        { stableSort(list as any, getComparator(order, orderBy))
                          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                          .map((row, index) => {
                            const labelId = `enhanced-table-checkbox-${index}`;

                            return (
                                <RowMultiplayHours 
                                  key={index} 
                                  page={page}
                                  rowsPerPage={rowsPerPage}
                                  index={index}
                                  row={row as any}
                                  labelId={labelId}
                                  rowsCount={list.length}
                                  order={order} 
                                  handleRemove={handleRemove}
                                  setRowsPerPage={setRowsPerPage}
                                  color={color}
                                  />
                              
                            );
                          })}

                      <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
                              <TableCell colSpan={12} sx={{textAlign:'center'}}>
                                  <Button onClick={handleAddRowInList}>
                                      Добавить строчку
                                  </Button>
                              </TableCell>
                      </TableRow>
                        {emptyRows > 0 && (
                          <TableRow
                            style={{
                              height: (dense ? 43 : 63) * emptyRows
                            }}
                          >
                            <TableCell colSpan={12} />
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <TablePagination
                    rowsPerPageOptions={[outSideCountView ? outSideCountView : 14]}
                    component="div"
                    count={list.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    style={{
                      bottom: '0',
                      position: 'absolute',
                      width: '100%'
                    }}
                  />
      </div>
    )
}

export default MultiplayHours;

//12
//14