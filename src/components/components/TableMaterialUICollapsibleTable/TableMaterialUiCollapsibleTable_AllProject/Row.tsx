import { Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../../../redux/hooks/userActions";
import { GetSesstionToken } from "../../../../settings/settings";
import { IDownloadProjectUserWeekExel, IProject, IWeek } from "../../../IDataInterface/IDataInterface";
import HoursAddDialog from "../../HoursComponents/HoursAddDialog";
import ProjectAddDialog from "../../ProjectComponents/ProjectAddDialog";
import TableMenu_AllProject from "../../TableMenu/TableMenu_AllProject";
import ProjectUserDialog from "../../Widget/ProjectUserComponents/ProjectUserDialog";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconDelete from '@mui/icons-material/Delete'
import RowUsersCollapse from "./RowUsersCollapse";


type Props = {
    row: IProject, 
    labelId: any,
    handleAddHours: any,
    handleRemove: any,
    handleEdit: any,
    TableEventually: any,
    rowsPerPage: any,
    page: any,
    index: any,
    rowsCount: any,
    order: any,
    accumCollapseUser: any
  }

  const Row:  React.FC<Props> = (props) => {
    
    const {row,labelId,handleAddHours,handleRemove,handleEdit,TableEventually,rowsPerPage,page,index,rowsCount,order,accumCollapseUser} = props;
    const [opened, setOpened] = React.useState(false);
  
    const dataString = (dataIoString:string) => {
  
      let data = new Date(dataIoString)
      return data.toLocaleDateString('en-GB');
    }
  
    const getActualHours = () =>{
  
      let actual = row.actualHour ? row.actualHour: 0;
      return actual + " / "+ row.maxHour;
    }
  
    const {donwloadProjectUserWeekExel_fetch,donwloadProjectUserAllWeekExel_fetch} = useActions()
  
    const donwloadProjectUserWeekExel = (userEmail: string,week: IWeek) =>{
      
      let sessionToken = GetSesstionToken();
  
      let downloadExel = new Object as IDownloadProjectUserWeekExel;
      downloadExel.projectCode = row.code;
      downloadExel.userEmail = userEmail;
      downloadExel.numberWeek = week.numberWeek;
      downloadExel.yearWeek = week.year;
  
      donwloadProjectUserWeekExel_fetch(sessionToken,downloadExel);
  
    }
  
    const donwloadProjectUserAllWeekExel =(userEmail: string) => {
  
      let sessionToken = GetSesstionToken();
  
      let downloadExel = new Object as IDownloadProjectUserWeekExel;
      downloadExel.projectCode = row.code;
      downloadExel.userEmail = userEmail;
  
      donwloadProjectUserAllWeekExel_fetch(sessionToken,downloadExel);
    }
  
  
    //For dialog menu
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mouseEvent, setMouseEvent] = React.useState<React.MouseEvent<HTMLElement> | null >(null);
    const handleClick = (event: React.MouseEvent<HTMLElement>,row: any) => {
      event.preventDefault();
      setMouseEvent(event)
      setAnchorEl(event.currentTarget);
    };
    const navigate = useNavigate();
  
    const[flagProjectUserDialog, setFlagProjectUserDialog] = React.useState(false)
    const[flagChangeUserDialog, setChangeDialog] = React.useState(false)

   

    const handleClickItem = (e: any) =>{
      let { myValue } = e.currentTarget.dataset;
      

      switch(Number(myValue))
      {
        case 0:
        {
          window.open('/SelectProject?Code='+row.code,'_blank')?.focus()
          break;
        }
        case 1:
        {
          setFlagProjectUserDialog(true);
          break;
        }
        case 2:
        {
          setChangeDialog(true);
          console.log(flagChangeUserDialog);
          break;
        }
        case 3:
        {
          let indexNormal = index+(page * rowsPerPage)
          let index_with_order = order === 'asc' ? indexNormal : rowsCount-indexNormal-1
          handleRemove(index_with_order)
          break;
        }
        default:
          break;
      }
  
      setAnchorEl(null);
    }
    const handleClose = () => {
        setAnchorEl(null);
    };
  
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}
        hover
        onContextMenu={(event) => handleClick(event, row)}
        >
        <TableCell padding="checkbox">
          <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => {
                  setOpened(!opened)
                  accumCollapseUser.functionAdd(opened,setOpened)
                }}
              >
                {opened ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          component="th"
          id={labelId}
          scope="row"
          padding="none"
          align="center"
        >
          {row.indexAdd}
        </TableCell>
        <TableCell align="center">
          {row.code}
        </TableCell>
        <TableCell align="center">{row.title}</TableCell>
        <TableCell align="center">{row.description}</TableCell>
        <TableCell align="center">{dataString(row.dateStart)}</TableCell>
        <TableCell align="center">{dataString(row.dateStop)}</TableCell>
        <TableCell align="center">{getActualHours()}</TableCell>
        <TableCell align="center">
          <HoursAddDialog title='Добавить почасовку' handleAdd={handleAddHours} selectProject={row}/>
        </TableCell>
        </TableRow>
  
        <ProjectAddDialog indexEdit={()=>{
                  let indexNormal = index+(page * rowsPerPage)
                  let index_with_order = order === 'asc' ? indexNormal : rowsCount-indexNormal-1
                  return index_with_order;
              }}
              handleEdit={handleEdit}
              selectProject={row ? row : undefined}
              flagChangeUserDialog = {flagChangeUserDialog}
              setChangeDialog = {setChangeDialog}/>

              
        <ProjectUserDialog 
        project={row} 
        flagProjectUserDialog={flagProjectUserDialog} 
        setFlagProjectUserDialog={setFlagProjectUserDialog}
        />
  
        <TableMenu_AllProject 
        handleClick={handleClickItem} 
        handleClose={handleClose} 
        anchorEl={anchorEl} 
        mouseEvent={mouseEvent} 
        row={row}
        />
  
  
  
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={15}>
            <Collapse in={opened} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Инженеры участвующие в проекте
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell align="center">Фамилия</TableCell>
                      <TableCell align="center">Имя</TableCell>
                      <TableCell align="center">Почта</TableCell>
                      <TableCell align="center">Общее количество часов по проекту</TableCell>
                      <TableCell align='center'>Скачать архив почасовок</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {
                    row.users.map((itemUser,index)=>{
                      return (
  
                        <RowUsersCollapse
                        key={index}
                        rowUserCollapse={itemUser}
                        indexUser={index}
                        donwloadProjectUserWeekExel={donwloadProjectUserWeekExel}
                        donwloadProjectUserAllWeekExel={donwloadProjectUserAllWeekExel}
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
    );
  } 
  export default Row;