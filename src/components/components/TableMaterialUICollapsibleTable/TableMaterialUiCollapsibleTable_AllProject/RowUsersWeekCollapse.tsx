import { Button, TableCell, TableRow } from "@mui/material"
import React from "react"
import { IUser, IWeek } from "../../../IDataInterface/IDataInterface"


type Props = {
    className?: string,
    child?: any
    user?: IUser,
    rowUserWeekCollapse?: IWeek
    indexUserWeek?: number
    donwloadProjectUserWeekExel?: any
  }
  
  
  
  //для вложенной таблицы строки
  const RowUsersWeekCollapse: React.FC<Props> =({user,rowUserWeekCollapse,indexUserWeek,donwloadProjectUserWeekExel})=>{
    const [open, setOpen] = React.useState(false);
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell align="center">
            {rowUserWeekCollapse?.numberWeek || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.moHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.tuHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.weHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.thHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.frHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.saHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.suHour?.wtHour || "-"}
          </TableCell>
          <TableCell align="center">
            {rowUserWeekCollapse?.sumHour || "-"}
          </TableCell>
          <TableCell align='center'>
            <Button size="small" variant="outlined" onClick={()=>{
              donwloadProjectUserWeekExel(user?.email,rowUserWeekCollapse)
            }}>
              Скачать Exel
            </Button>
          </TableCell>
        </TableRow>
      </React.Fragment>
    )
  }  
  export default RowUsersWeekCollapse;
  
  
  