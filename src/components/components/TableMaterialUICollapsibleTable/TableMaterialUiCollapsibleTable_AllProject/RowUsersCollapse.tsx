import { Box, Button, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import React from "react"
import { IProject, IUser, IUserProject } from "../../../IDataInterface/IDataInterface"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import RowUsersWeekCollapse from "./RowUsersWeekCollapse";


type Props = {
    className?: string,
    child?: any
  
    addProject?: (sessionToken: any,project: IProject) => {}
    removeProject?: (sessionToken: any,name: string) => {}
    editProject?:  (sessionToken: any,oldProjectInfromation: any,newProjectInfromation: any) => {}
    addUserHoursProject?: (sessionToken: any,userProject: IUserProject) => {}
    rowUserCollapse?: IUser
    indexUser?: number
    donwloadProjectUserWeekExel?: any
    donwloadProjectUserAllWeekExel?: any
  }
  
  //для вложенной таблицы строки
  const RowUsersCollapse: React.FC<Props> = ({rowUserCollapse,indexUser,donwloadProjectUserWeekExel,donwloadProjectUserAllWeekExel}) => {
    const [open, setOpen] = React.useState(false);
  
    const getAllHours = () => {
      let sumHour = 0;
      if(rowUserCollapse?.weeks != undefined)
      {
        sumHour = rowUserCollapse?.weeks.reduce((accum,item) => accum + item.sumHour, 0)
      }
      return sumHour
    }
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell padding="checkbox">
            <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
                >
                  {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell align="center">
            {rowUserCollapse?.firstName}
          </TableCell>
          <TableCell align="center">{rowUserCollapse?.secondName}</TableCell>
          <TableCell align="center">{rowUserCollapse?.email}</TableCell>
          <TableCell align="center">{getAllHours()}</TableCell>
          <TableCell align='center'>
            <Button size="small" variant="outlined" onClick={()=>{
              donwloadProjectUserAllWeekExel(rowUserCollapse?.email)
            }}>
              Скачать архив
            </Button>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={15}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Почасовки инженера
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">№ недели</TableCell>
                      <TableCell align="center">Понедельник</TableCell>
                      <TableCell align="center">Вторник</TableCell>
                      <TableCell align="center">Среда</TableCell>
                      <TableCell align="center">Четверг</TableCell>
                      <TableCell align="center">Пятница</TableCell>
                      <TableCell align="center">Суббота</TableCell>
                      <TableCell align="center">Воскрессенье</TableCell>
                      <TableCell align="center">Сумма часов за неделю</TableCell>
                      <TableCell align='center'>Скачать Exel</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    rowUserCollapse?.weeks.map((itemUserWeek,index)=>{
                      return (
  
                        <RowUsersWeekCollapse
                        key={index}
                        rowUserWeekCollapse={itemUserWeek}
                        indexUserWeek={index}
                        donwloadProjectUserWeekExel={donwloadProjectUserWeekExel}
                        user={rowUserCollapse}
                        />
  
                      )
                    })
                  }
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    )
  }
  export default RowUsersCollapse;