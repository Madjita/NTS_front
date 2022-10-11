import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  IBusinessTrip,
  IProject,
  IReportCheck,
  IUser,
  IUserProject,
  IWeek,
} from "../../../IDataInterface/IDataInterface";
import {
  getComparator,
  Order,
  stableSort,
} from "../../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_AllProject";
import RowChecksPage from "./RowChecksPage";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import DialogForAddBuisnessTrip_Check from "./DialogForAddBuisnessTrip_Check/DialogForAddBuisnessTrip_Check";
import { useActions } from "../../../../redux/hooks/userActions";
import { GetSesstionToken } from "../../../../settings/settings";

export interface IShowDialog_ReportCheck{
  typeEdit: boolean,
  selectItem?: IReportCheck,
  flag: boolean,
  setFlag: React.Dispatch<React.SetStateAction<IShowDialog_ReportCheck>>
}


type Props = {
  className?: string;
  color?: string;
  outSideCountView?: number;
  project?: IBusinessTrip;
  handleSelectReturn?: ()=>void;
};

const ChecksPage: React.FC<Props> = (props: Props) => {
  const { 
    color,
    outSideCountView,
    project,
    handleSelectReturn
 } = props;

  //Dialog BuisnessTrip_check
  const [showDialog_BuisnessTripCheck,setShowDialog_BuisnessTripCheck] = React.useState<IShowDialog_ReportCheck>();

  useEffect(()=>{
    setShowDialog_BuisnessTripCheck( () =>{
      let obj =  {
        typeEdit: false,
        selectItem: undefined,
        flag: false,
        setFlag: setShowDialog_BuisnessTripCheck
      } as IShowDialog_ReportCheck
  
      return obj;
    })
  },[setShowDialog_BuisnessTripCheck])
  //

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    outSideCountView ? outSideCountView : 14
  );

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const { fetchBusinessTripsChecks_selected_all, fetchBusinessTripCheck_delete } = useActions();

  const handleRemove = async (index: number) => {

    console.log("fetchBusinessTripCheck_delete index = ",index,project?.reportChecks[index])
    if(project)
    {
      fetchBusinessTripCheck_delete(GetSesstionToken(),project?.reportChecks[index]);
    }
   
  };

  const handleAddHours = (e: any) => {
    console.log("newWeek list = ", project?.reportChecks);
  };

  const handleAddRowInList = (e: any) => {
    if(showDialog_BuisnessTripCheck)
    {
      setShowDialog_BuisnessTripCheck({...showDialog_BuisnessTripCheck, flag: true})
    }

  };


  React.useEffect(()=>{
    let sessionToken = GetSesstionToken()
    if(sessionToken && project != undefined)
    {
     
      fetchBusinessTripsChecks_selected_all(sessionToken,project);
    }
  },[]);
  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      <TableContainer style={{ overflowX: "inherit" }}>
        <Table aria-labelledby="tableTitle" size="small">
          <TableHead>
            <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell colSpan={1}  onClick={handleSelectReturn}> 
                <KeyboardReturnIcon sx={{padding:'0',margin:'0'}}/>
              </TableCell>
              <TableCell colSpan={11} sx={{ textAlign: "center" }}>
                <Typography>{project?.userProject.project.title}</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" style={{ color: color }}>
                №
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Название чека
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Тип чека 
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Дата оплаты
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Описание
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Стоимость
              </TableCell>
              <TableCell align="center" style={{ color: color }}>
                Скачать архив
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(project?.reportChecks as any, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <RowChecksPage
                    key={index}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    index={index}
                    row={row as any}
                    labelId={labelId}
                    rowsCount={project?.reportChecks.length}
                    order={order}
                    handleRemove={handleRemove}
                    setRowsPerPage={setRowsPerPage}
                    color={color}
                    dialogEdit={showDialog_BuisnessTripCheck}
                  />
                );
              })}
            <TableRow hover sx={{ "& > *": { borderBottom: "unset" } }}>
              <TableCell colSpan={13} sx={{ textAlign: "center" }}>
                <Button onClick={handleAddRowInList}>
                  Добавить чек
                </Button>
                <DialogForAddBuisnessTrip_Check 
                 selectBuisnesTrip={project}
                 dialog={showDialog_BuisnessTripCheck}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[outSideCountView ? outSideCountView : 14]}
        component="div"
        count={project?.reportChecks.length as number}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{
          bottom: "0",
          position: "absolute",
          width: "100%",
        }}
      />
    </div>
  );
};

export default ChecksPage;
