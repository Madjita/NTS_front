import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { IProject, IUser,IUserProject } from '../../IDataInterface/IDataInterface';
import { TablePagination } from '@mui/material';


type PropsRow = {
    className?: string,
    child?: any
}

function Row(props: { row: IUser }) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{}}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell align='center' component="th" scope="row">
          {row.email}
        </TableCell>
        <TableCell align="center">{row.firstName}</TableCell>
        <TableCell align="center">{row.secondName}</TableCell>
        <TableCell align="center">{row.middleName}</TableCell>
        <TableCell align="center">{row.company}</TableCell>
        <TableCell align="center">{row.role.title}</TableCell>
        <TableCell align="center">{row.userProjects.length}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Актуальные проекты
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Название проекта</TableCell>
                    <TableCell>Количество часов на проект</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>


                  {row.userProjects ? row.userProjects.map((projectRow,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {projectRow.project.title}
                      </TableCell>
                      <TableCell>{projectRow.project.maxHour}</TableCell>
                      <TableCell align="center">{projectRow.project.actualHour}</TableCell>
                      <TableCell align="center">
                        {projectRow.project.status}
                      </TableCell>
                    </TableRow>
                  ))
                  :
                  null}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}


type PropsCollaps = {
    className?: string,
    child?: any,
    data: IUser[]
}


const TableMaterialUICollapsibleTable_User:  React.FC<PropsCollaps> = ({data}) => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(3);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <React.Fragment>
    <TableContainer  sx={{ maxHeight: 440 }}>
      <Table 
        aria-label="collapsible table"
        size='small'
        stickyHeader
      >
        <TableHead >
          <TableRow sx={{backgroundColor: '#f5f5f5'}}>
            <TableCell />
            <TableCell align='center'>Фамилия</TableCell>
            <TableCell align="center">Имя</TableCell>
            <TableCell align="center">Отчество</TableCell>
            <TableCell align="center">Почта</TableCell>
            <TableCell align="center">Компания</TableCell>
            <TableCell align="center">Роль</TableCell>
            <TableCell align="center">Участвует в проектах</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row,index) => (
            <Row key={index} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
     rowsPerPageOptions={[3, 6,10,100]}
     component="div"
     count={data.length}
     rowsPerPage={rowsPerPage}
     page={page}
     onPageChange={handleChangePage}
     onRowsPerPageChange={handleChangeRowsPerPage}
   />
   </React.Fragment>
  );
}


export default TableMaterialUICollapsibleTable_User;