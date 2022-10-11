import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useActions } from "../../../redux/hooks/userActions";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import { GetSesstionToken } from "../../../settings/settings";
import {
  IBusinessTrip,
  IProject,
  IUser,
  IUserProject,
  IWeek,
} from "../../IDataInterface/IDataInterface";
import {
  getComparator,
  Order,
  stableSort,
} from "../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_AllProject";
import ChecksPage from "./ChecksPage/ChecksPage";
import RowProjectForChecks from "./RowProjectForChecks";
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DialogForAddBuisnessTrip from "./DialogForAddBuisnessTrip/DialogForAddBuisnessTrip";


export interface IShowDialog_BuisnessTrip{
  typeEdit: boolean,
  selectItem?: IBusinessTrip,
  flag: boolean,
  setFlag: React.Dispatch<React.SetStateAction<IShowDialog_BuisnessTrip>>
}


type Props = {
  className?: string;
  color?: string;
  outSideCountView?: number;
};

const ChecksForProject: React.FC<Props> = (props: Props) => {
  const { color, outSideCountView } = props;


  //choose Project
  const [chooseProject, setChooseProject] = React.useState(false);
  const [selectChooseProject, setSelectChooseProject] = React.useState<IBusinessTrip | undefined>(undefined);
  //

 

  //Dialog BuisnessTrip
  const [showDialog_BuisnessTrip,setShowDialog_BuisnessTrip] = React.useState<IShowDialog_BuisnessTrip>();

  useEffect(()=>{
    setShowDialog_BuisnessTrip( () =>{
      let obj =  {
        typeEdit: false,
        selectItem: undefined,
        flag: false,
        setFlag: setShowDialog_BuisnessTrip
      } as IShowDialog_BuisnessTrip
  
      return obj;
    })
  },[setShowDialog_BuisnessTrip])

  /*const init_showDialog_BuisnessTrip = () =>{
    let obj =  {
      typeEdit: false,
      selectItem: undefined,
      flag: false,
      setFlag: setShowDialog_BuisnessTrip
    } as IShowDialog_BuisnessTrip

    return obj;
  }*/
  //

  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(
    outSideCountView ? outSideCountView : 14
  );

  const [list, setList] = React.useState<IUserProject[]>([
    {
      project: new Object() as IProject,
      user: new Object() as IUser,
      weeks: [
        {
          numberWeek: 32,
        },
      ] as IWeek[],
    },
  ]);

  const businessTripHook = useTypedSelector(state => state.businessTrip)
  const {fetchBusinessTrips, fetchBusinessTrip_delete} = useActions()

  useEffect(()=>{
    let sessionToken = GetSesstionToken()
    if(sessionToken)
    {
      fetchBusinessTrips(sessionToken);
    }
  },[])

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 3));
    setPage(0);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleRemove = async (index: number) => {

    fetchBusinessTrip_delete(GetSesstionToken(),businessTripHook.businessTrips[index])

  };

  const {fetchBusinessTrips_finish} = useActions()
  
  const handleCloseBuisnessTrip = (row: IBusinessTrip) => {
    row.dateEnd = new Date().toISOString();
    setSelectChooseProject(row);
    fetchBusinessTrips_finish(GetSesstionToken(),row);
  }

  const handleSelectProject = (row: IBusinessTrip) => {
    setChooseProject(true);
    setSelectChooseProject(row);
  };
  const handleSelectReturn = () => {
    setChooseProject(false);
  }


 

  return (
    <div
      style={{
        position: "relative",
        height: "100%",
      }}
    >
      {chooseProject ? (
        <ChecksPage 
        handleSelectReturn={handleSelectReturn}
        project={selectChooseProject}
        />
      ) : (
        <React.Fragment>
          <TableContainer style={{ overflowX: "inherit" }}>
            <Table aria-labelledby="tableTitle" size="small">
              <TableHead>
                <TableRow>
                 <TableCell colSpan={10} sx={{ textAlign: "center" }}>
                    <Typography></Typography>
                  </TableCell>
                  <TableCell colSpan={1} sx={{ textAlign: "center"}}>
                  <Tooltip title="Добавить">
                      <IconButton  onClick={()=>{
                        if(showDialog_BuisnessTrip)
                        {
                          setShowDialog_BuisnessTrip({...showDialog_BuisnessTrip, flag: true})
                        }
                      }}>
                            <AddCircleIcon color="inherit" sx={{ display: 'block' }}/>
                      </IconButton>
                  </Tooltip>
                  <DialogForAddBuisnessTrip
                        dialog={showDialog_BuisnessTrip}
                      />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align="center" style={{ color: color }}>
                    №
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Код проекта
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Название проекта
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Название командирвоки
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Описание
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Начало командировки
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Окончание командировки
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Количество отчетных документов
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Потраченно в рублях
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Скачать архив
                  </TableCell>
                  <TableCell align="center" style={{ color: color }}>
                    Чеки
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stableSort(businessTripHook.businessTrips as any, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <RowProjectForChecks
                        key={index}
                        row={row as any}
                        index={index + 1}
                        handleSelectProject={handleSelectProject}
                        handleRemove={handleRemove}
                        setRowsPerPage={setRowsPerPage}
                        handleCloseBuisnessTrip={handleCloseBuisnessTrip}
                        color={color}
                        order={order}
                        rowsCount={businessTripHook.businessTrips.length} 
                        rowsPerPage={rowsPerPage}
                        page={page}     
                        
                        dialogEdit={showDialog_BuisnessTrip}
                        />
                    );
                  })}
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
              bottom: "0",
              position: "absolute",
              width: "100%",
            }}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default ChecksForProject;
