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
    className?: string,
}

/*interface IMultiplayWeek{
    userProject: IUserProject,
    dayOfWeek: number,
    user: IUser,
   
}
interface IMultiplayHours{
    list: IMultiplayWeek[];
}*/
 
type Order = 'asc' | 'desc';

const MultiplayHours:  React.FC<Props> = ({}) => {

    const [order, setOrder] = React.useState<Order>("asc");
    const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
    const [selected, setSelected] = React.useState<readonly string[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(true);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
        setRowsPerPage(parseInt(event.target.value, 10));
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
        <React.Fragment>
            <Box sx={{ width: "100%",maxHeight: '780px',overflow: 'auto' }}>
                <Paper sx={{ width: "100%", mb: 2}}>

        <TableContainer>
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
                <TableCell align="center">№</TableCell>
                <TableCell align="center">Номер недели</TableCell>
                <TableCell align="center">День недели</TableCell>
                <TableCell align="center">Проект</TableCell>
                <TableCell align="center">Инженер</TableCell>
                <TableCell align="center">Код</TableCell>
                <TableCell align="center">Начало работы</TableCell>
                <TableCell align="center">Окончание работы</TableCell>
                <TableCell align="center">Количество часов</TableCell>
                <TableCell align="center"></TableCell>
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
                        setRowsPerPage={setRowsPerPage}/>
                    
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
          rowsPerPageOptions={[14]}
          component="div"
          count={list.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
        </React.Fragment>
    )
}

export default MultiplayHours;
