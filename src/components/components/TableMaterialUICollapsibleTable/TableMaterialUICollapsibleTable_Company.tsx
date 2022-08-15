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

import { ICompany, IProject, IUser,IUserProject } from '../../IDataInterface/IDataInterface';
import { TablePagination } from '@mui/material';

import IconDelete from '@mui/icons-material/Delete'


function Row(props: { index: number, row: ICompany ,TableEventually : boolean,handleRemove: any}) {
  const { index, row,TableEventually,handleRemove } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell sx={{}}>
          
          {

            row.users.length > 0 ?


            <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
            :

            null
         

          }
         
          
        </TableCell>
        <TableCell align='center' component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="center">{row.personalCount}</TableCell>
        {
        TableEventually ? 
        <TableCell align="center">
          <IconDelete onClick={()=>handleRemove(index)}/>
        </TableCell>
        :null
        }
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
                    <TableCell align='center'>Фамилия</TableCell>
                    <TableCell align="center">Имя</TableCell>
                    <TableCell align="center">Отчество</TableCell>
                    <TableCell align="center">Почта</TableCell>
                    <TableCell align="center">Роль</TableCell>
                    <TableCell align="center">Актуальные проекты</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.users ? row.users.map((row,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {row.secondName}
                      </TableCell>
                      <TableCell>{row.firstName}</TableCell>
                      <TableCell align="center">{row.middleName}</TableCell>
                      <TableCell align="center">
                        {row.email}
                      </TableCell>
                      <TableCell align="center">
                        {row.role.title}
                      </TableCell>
                      <TableCell align="center">
                        {row.userProjects.length}
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
    data: ICompany[],
    
    TableEventually: boolean,
    handleRemove: any;
}


const TableMaterialUICollapsibleTable_Company:  React.FC<PropsCollaps> = ({data,TableEventually,handleRemove}) => {

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
            <TableCell align='center'>Компания</TableCell>
            <TableCell align="center">Количество работников</TableCell>
            {TableEventually ? <TableCell/>:null}
          </TableRow>
        </TableHead>
        <TableBody>
          {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((row,index) => (
            <Row key={index} index={index} row={row} TableEventually={TableEventually} handleRemove={handleRemove} />
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


export default TableMaterialUICollapsibleTable_Company;