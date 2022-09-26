import * as React from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IProject, IUserProject, IWeek } from '../../IDataInterface/IDataInterface';
import { GetSessionEmail, GetSesstionToken } from '../../../settings/settings';
import ProjectAddDialog from '../ProjectComponents/ProjectAddDialog';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import EnhancedTableToolbar from './TableMaterialUiCollapsibleTable_AllProject/EnhancedTableToolbar';
import EnhancedTableHead from './TableMaterialUiCollapsibleTable_AllProject/EnhancedTableHead';
import Row from './TableMaterialUiCollapsibleTable_AllProject/Row';
import { IProjectSendApi } from '../../IDataInterface/IDataInsideInterface';


interface Data {
  id: number,
  codeProject: string;
  nameProject: string;
  descriptions: string;
}

function createData(
  id: number,
  codeProject: string,
  nameProject: string,
  descriptions: string,
): Data {
  return {
    id,
    codeProject,
    nameProject,
    descriptions,
  };
}





function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

export function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
export function stableSort<T>(array:  T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export interface HeadCell {
  disablePadding: boolean;
  id: keyof IProject;
  label: string;
  numeric: boolean;
}


const headCells:  HeadCell[] = [
  {
    id: 'indexAdd',
    numeric: false,
    disablePadding: true,
    label: '№',
  },
  {
    id: 'code',
    numeric: false,
    disablePadding: true,
    label: 'Код проекта',
  },
  {
    id: 'title',
    numeric: true,
    disablePadding: false,
    label: 'Название проекта',
  },
  {
    id: 'description',
    numeric: true,
    disablePadding: false,
    label: 'Описание',
  },
  {
    id: 'dateStart',
    numeric: true,
    disablePadding: false,
    label: 'Дата начала',
  },
  {
    id: 'dateStop',
    numeric: true,
    disablePadding: false,
    label: 'Дата завершения',
  },
  {
    id: 'actualHour',
    numeric: true,
    disablePadding: false,
    label: 'Затрачено',
  },
  
];



type Props = {
  className?: string,
  child?: any
  addProject?: (sessionToken: any,project: IProject) => {}
  removeProject?: (sessionToken: any,name: string) => {}
  editProject?:  (sessionToken: any,oldProjectInfromation: any,newProjectInfromation: any) => {}
  addUserHoursProject?: (sessionToken: any,userProject: IUserProject) => {}
  fetchProject?: any
}


const TableMaterialUICollapsibleTable_AllProject:  React.FC<Props> = ({addProject,removeProject,fetchProject,editProject,addUserHoursProject}) => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(14);


  type stateAccumCollapseUser = {
    value: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>
  }
  //переменная для аккомуляции и сокрытия всех открытых вкладок
  const [accumCollapseUser, setAccumCollapseUser] = React.useState({
    functionAdd: (itemValue: any,itemState:any) => {
      accumCollapseUser.accum.push({
        value: itemValue,
        setState: itemState
      } as stateAccumCollapseUser);
      setAccumCollapseUser({...accumCollapseUser,accum:accumCollapseUser.accum})
    },
    funcitonClose: () => {
      accumCollapseUser.accum.map(itemAccum => {
        itemAccum.setState(false);
      })

      accumCollapseUser.accum.length = 0; // обнуления массива без создания нового
    },
    accum: new Array<stateAccumCollapseUser>
  })



const [TableEventually, setTableEventually] = React.useState<boolean>(false);

const {userLogin} = useTypedSelector(state => state.userLogin)
const {projects} = useTypedSelector(state => state.project)

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IProject
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = projects.map((n) => n.code);
      //setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDense(event.target.checked);
  };

  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - projects.length) : 0;




  const handleAddHours = async (newObject: IWeek) => {
      let sessionToken =  GetSesstionToken()
      if(newObject != null)
      {
      

        let object = new Object() as IUserProject
        object.weeks = new Array() as IWeek[]

        if(newObject.userProject != undefined)
        {
          object.project = newObject.userProject
        }

        if(newObject.userSetWeek != undefined)
        {
          object.user = newObject.userSetWeek
        }
    
        object.weeks.push(newObject)


        if(addUserHoursProject != undefined)
        {
          addUserHoursProject(sessionToken,object)
        }
      }   
    }


  

  const handleAddProject = async (newObject: IProjectSendApi) => {
      let sessionEmail =  GetSessionEmail()
      let sessionToken =  GetSesstionToken()
      if(newObject != null)
      {
        newObject.enginerCreater = sessionEmail;


        let newProject = new Object as IProject

        newProject.dateStart = newObject.dateStart
        newProject.dateStop = newObject.dateStop
        newProject.maxHour = newObject.maxHours
        newProject.status = newObject.status
        newProject.code = newObject.code
        newProject.title = newObject.nameProject
        newProject.description = newObject.description

        if(userLogin!= undefined)
          newProject.enginerCreater = userLogin


        if( newProject != undefined && sessionToken != undefined && addProject != undefined)
          addProject(sessionToken,newProject)
        
      }   
  }


  const handleRemove = async (index: number) =>
  {    
      if(removeProject != undefined)
      {
        removeProject(GetSesstionToken(),projects[index].code)
      }
  }

  const handleEdit = async (oldProjectInformation: any,newProjectInformation: any) =>
  {
    if(editProject != undefined)
    {
      editProject(GetSesstionToken(),oldProjectInformation,newProjectInformation)
    }
  }
    

  return (
    <Box sx={{ width: "100%",maxHeight: '780px',overflow: 'auto' }}>
      <Paper sx={{ width: "100%", mb: 2}}>

        <EnhancedTableToolbar 
        numSelected={selected.length}  
        handleAddProject={handleAddProject} 
        TableEventually={TableEventually} 
        setTableEventually={setTableEventually}
        accumCollapseUser={accumCollapseUser}/>


        <TableContainer>
          <Table
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={projects.length}
              TableEventually={TableEventually}
              headCells={headCells}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */}
              { stableSort(projects as any, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                      <Row 
                        key={index} 
                        page={page}
                        rowsPerPage={rowsPerPage}
                        index={index}
                        row={row as any}
                        labelId={labelId}
                        handleAddHours={handleAddHours} 
                        handleRemove={handleRemove}
                        handleEdit={handleEdit}
                        TableEventually={TableEventually}
                        rowsCount={projects.length}
                        order={order} 
                        accumCollapseUser={accumCollapseUser}/>
                    
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 43 : 63) * emptyRows
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[14]}
          component="div"
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}



export default TableMaterialUICollapsibleTable_AllProject;