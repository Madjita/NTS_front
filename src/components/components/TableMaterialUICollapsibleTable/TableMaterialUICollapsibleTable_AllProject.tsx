import * as React from 'react';
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
import HoursAddDialog from '../HoursComponents/HoursAddDialog';
import { IDownloadProjectUserWeekExel, IProject, IUser, IUserProject, IWeek } from '../../IDataInterface/IDataInterface';
import { GetSessionEmail, GetSesstionToken } from '../../../settings/settings';
import { Collapse } from '@mui/material';
import ProjectAddDialog, { IProjectSendApi } from '../ProjectComponents/ProjectAddDialog';
import { useActions } from '../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import SettingsIcon from '@mui/icons-material/Settings';
import IconDelete from '@mui/icons-material/Delete'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import ProjectUserDialog from '../Widget/ProjectUserComponents/ProjectUserDialog';
import TableMenu_AllProject from '../TableMenu/TableMenu_AllProject';
import { useNavigate } from 'react-router-dom';


import { useElementSize } from 'usehooks-ts'

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




/*
for (let i = 0; i < 1000; i++) { // выведет 0, затем 1, затем 2
    rows.push(createData(String(i), 305, 3.7, 67, 4.3))
  }*/

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

interface HeadCell {
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

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof IProject) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  TableEventually: any;
  color?: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { 
    onSelectAllClick, 
    order, 
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    TableEventually,
    color
  } = props;

  const createSortHandler =
    (property: keyof IProject) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow style={{ height: '35px'}}>
        <TableCell>
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'center'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{color:color}}
          >
            <TableSortLabel
              style={{color:color}}
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell align="center" style={{color:color}}>Добавить часы</TableCell>
        {/*{TableEventually ? <TableCell align="center">Добавить инженера</TableCell>:null}*/}
        {TableEventually ? <TableCell align="center" style={{color:color}}>Редактировать</TableCell>:null}
        {TableEventually ? <TableCell align="center" style={{color:color}}>Удалить</TableCell>:null}
      </TableRow>
    </TableHead>
  );
}

interface EnhancedTableToolbarProps {
  numSelected: number;
  handleAddProject: any;

  TableEventually: any;
  setTableEventually: any;
  accumCollapseUser: any;
  color?: string
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
  const { numSelected,handleAddProject,TableEventually, setTableEventually,accumCollapseUser,color} = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
       // width: '100%',
        display: 'block',
      }}
    >
    <div style={{float: 'left'}}>
      <Tooltip title="Закрыть все открытые таблицы пользователей">
        <IconButton style={{color: TableEventually? 'green': ''}}  onClick={() => {
          accumCollapseUser.funcitonClose()
        }} >
            <ExpandCircleDownIcon color="inherit" sx={{ display: 'block' }} />
        </IconButton>
      </Tooltip>
    </div>
  
    <div style={{float: 'right'}}>
      <ProjectAddDialog title='Добавить проект' handleAdd={handleAddProject} color={color}/>
      <Tooltip title="Settings">
        <IconButton style={{color: TableEventually? 'green': ''}}  onClick={() => setTableEventually(!TableEventually)} >
            <SettingsIcon color="inherit" sx={{ display: 'block' }} />
        </IconButton>
      </Tooltip>
    </div>
   
    </Toolbar>
  );
};


type PropsRowUsersWeekCollapseCollapse = {
  className?: string,
  child?: any

  user?: IUser,
  rowUserWeekCollapse?: IWeek
  indexUserWeek?: number
  donwloadProjectUserWeekExel?: any;
  color?: string
}



//для вложенной таблицы строки
const RowUsersWeekCollapse: React.FC<PropsRowUsersWeekCollapseCollapse> =({user,rowUserWeekCollapse,indexUserWeek,donwloadProjectUserWeekExel,color})=>{
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.numberWeek || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.moHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.tuHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.weHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.thHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.frHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.saHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.suHour?.wtHour || "-"}
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserWeekCollapse?.sumHour || "-"}
        </TableCell>
        <TableCell align='center'>
          <Button size="small" variant="text"  style={{color: color}}
          onClick={()=>{
            donwloadProjectUserWeekExel(user?.email,rowUserWeekCollapse)
          }}>
            Скачать Exel
          </Button>
        </TableCell>
      </TableRow>
    </React.Fragment>
  )
}


type PropsRowUsersCollapse = {
  className?: string,
  child?: any

  addProject?: (sessionToken: any,project: IProject) => {}
  removeProject?: (sessionToken: any,name: string) => {}
  editProject?:  (sessionToken: any,oldProjectInfromation: any,newProjectInfromation: any) => {}
  addUserHoursProject?: (sessionToken: any,userProject: IUserProject) => {}
  rowUserCollapse?: IUser
  indexUser?: number
  donwloadProjectUserWeekExel?: any
  donwloadProjectUserAllWeekExel?: any;
  color?: string
}

//для вложенной таблицы строки
const RowUsersCollapse:   React.FC<PropsRowUsersCollapse> = ({rowUserCollapse,indexUser,donwloadProjectUserWeekExel,donwloadProjectUserAllWeekExel,color}) => {
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
                style={{color: color}}
              >
                {open ? <KeyboardArrowUpIcon  style={{color: color}}/> : <KeyboardArrowDownIcon style={{color: color}}/>}
          </IconButton>
        </TableCell>
        <TableCell align="center" style={{color: color}}>
          {rowUserCollapse?.firstName}
        </TableCell>
        <TableCell align="center" style={{color: color}}>{rowUserCollapse?.secondName}</TableCell>
        <TableCell align="center" style={{color: color}}>{rowUserCollapse?.email}</TableCell>
        <TableCell align="center" style={{color: color}}>{getAllHours()}</TableCell>
        <TableCell align='center' style={{color: color}}>
          <Button size="small" variant="text"  style={{color: color}} 
          onClick={()=>{
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
              <Typography variant="h6" gutterBottom component="div" style={{color: color}}>
                Почасовки инженера
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" style={{color: color}}>№ недели</TableCell>
                    <TableCell align="center" style={{color: color}}>Понедельник</TableCell>
                    <TableCell align="center" style={{color: color}}>Вторник</TableCell>
                    <TableCell align="center" style={{color: color}}>Среда</TableCell>
                    <TableCell align="center" style={{color: color}}>Четверг</TableCell>
                    <TableCell align="center" style={{color: color}}>Пятница</TableCell>
                    <TableCell align="center" style={{color: color}}>Суббота</TableCell>
                    <TableCell align="center" style={{color: color}}>Воскрессенье</TableCell>
                    <TableCell align="center" style={{color: color}}>Сумма часов за неделю</TableCell>
                    <TableCell align='center' style={{color: color}}>Скачать Exel</TableCell>
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
                      color={color}
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


function Row(props: { 
    row: IProject, 
    labelId: any,
    handleAddHours: any,
    handleRemove:any ,
    handleEdit:any,
    TableEventually:any,
    rowsPerPage:any,
    page:any,
    index:any,
    rowsCount:any,
    order:any,
    accumCollapseUser:any,
    color?: string,
  }) 
  {
  const { 
    row,
    labelId,
    handleAddHours,
    handleRemove,
    handleEdit,
    TableEventually,
    rowsPerPage,
    page,
    index,
    rowsCount,
    order,
    accumCollapseUser,
    color
  } = props;
  const [open, setOpen] = React.useState(false);


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
  const handleClickItem = (e: any) =>{
    let { myValue } = e.currentTarget.dataset;

    switch(Number(myValue))
    {
      case 0:
      {
        //navigate('/admin')
        window.open('/SelectProject?Code='+row.code,'_blank')?.focus()
        break;
      }
      case 1:
      {
        setFlagProjectUserDialog(true);
        break;
      }
      case 2:
        break;
      case 3:
        break
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
      <TableCell padding="checkbox" style={{color: color}}>
        <IconButton
              aria-label="expand row"
              size="small"
              style={{color: color}}
              onClick={() => {
                setOpen(!open)
                accumCollapseUser.functionAdd(open,setOpen)
              }}
            >
              {open ? <KeyboardArrowUpIcon  style={{color: color}} /> : <KeyboardArrowDownIcon style={{color: color}}/>}
        </IconButton>
      </TableCell>
      <TableCell
        id={labelId}
        scope="row"
        padding="none"
        align="center"
        style={{color: color}}
      >
        {row.indexAdd}
      </TableCell>
      <TableCell align="center" style={{color: color}}>
        {row.code}
      </TableCell>
      <TableCell align="center" style={{color: color}}>{row.title}</TableCell>
      <TableCell align="center" style={{color: color}}>{row.description}</TableCell>
      <TableCell align="center" style={{color: color}}>{dataString(row.dateStart)}</TableCell>
      <TableCell align="center" style={{color: color}}>{dataString(row.dateStop)}</TableCell>
      <TableCell align="center" style={{color: color}}>{getActualHours()}</TableCell>
      <TableCell align="center" style={{color: color}}>
        <HoursAddDialog title='Добавить почасовку' handleAdd={handleAddHours} selectProject={row} color={color}/>
      </TableCell>
      {
        TableEventually ? 
        <React.Fragment>
          { /*<TableCell align="center">
            <ProjectUserDialog project={row}/>
          </TableCell>*/}
          <TableCell align="center">
            <ProjectAddDialog
            indexEdit={()=>{
                let indexNormal = index+(page * rowsPerPage)
                let index_with_order = order === 'asc' ? indexNormal : rowsCount-indexNormal-1
                return index_with_order;
            }}
            handleEdit={handleEdit}
            selectProject={row ? row : undefined}
            color={color}
            />
          </TableCell>
          <TableCell align="center">
            <IconDelete 
            style={{color: color}}
            onClick={()=>{
            let indexNormal = index+(page * rowsPerPage)
            let index_with_order = order === 'asc' ? indexNormal : rowsCount-indexNormal-1
            handleRemove(index_with_order)
            }}/>
          </TableCell>
        </React.Fragment>
        :null
      }
      </TableRow>

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
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div" style={{color: color}}>
                Инженеры участвующие в проекте
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="center" style={{color: color}}>Фамилия</TableCell>
                    <TableCell align="center" style={{color: color}}>Имя</TableCell>
                    <TableCell align="center" style={{color: color}}>Почта</TableCell>
                    <TableCell align="center" style={{color: color}}>Общее количество часов по проекту</TableCell>
                    <TableCell align='center' style={{color: color}}>Скачать архив почасовок</TableCell>
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
                      color={color}
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

type Props = {
  className?: string,
  child?: any
  addProject?: (sessionToken: any,project: IProject) => {}
  removeProject?: (sessionToken: any,name: string) => {}
  editProject?:  (sessionToken: any,oldProjectInfromation: any,newProjectInfromation: any) => {}
  addUserHoursProject?: (sessionToken: any,userProject: IUserProject) => {}
  fetchProject?: any,
  outSideCountView?: number,
  color?: string,
}


const TableMaterialUICollapsibleTable_AllProject:  React.FC<Props> = ({
  addProject,
  removeProject,
  fetchProject,
  editProject,
  addUserHoursProject,
  outSideCountView,
  color
}) => {
 
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof IProject>("indexAdd");
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(outSideCountView ? outSideCountView: 14);


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

 /* const [rows, setRows] = React.useState([
  createData(1,'204366', 'KYVO3', ''),
  createData(2,'206232', 'Crane', 'Folignio'),
  createData(3,'260287', 'KPP', 'Porvoo'),
  createData(4,'260400', 'Boilers', 'Kipas'),
  createData(5,'260407', 'HSPM2', 'Spremberg'),
  createData(6,'260416', 'Rosenberg', '-'),
  createData(7,'260418', 'Burgo', ''),
  createData(8,'TI625151.10', 'PM9', 'Segezha'),
  createData(9,'110381', 'Lava-EURE', '-'),
  createData(10,'DSME', '1 Scrubber', 'Korea'),
  createData(11,'DSME', '2 Scrubber', 'Korea'),
  createData(12,'260423', 'Lava EURE Esmeraldas', 'Singapore'),
  createData(13,'260420', 'Lava-E Marstal', '-'),
  createData(14,'260422', 'Lava EDI Essen', 'Singapore'),
  createData(15,'260435', 'Lava 19K Madrid', '-'),
  createData(16,'260446', 'Lava 19K Maastricht', 'Taiwan'),
  createData(17,'260422', 'Lava EDI Elba', 'Taiwan'),
  createData(18,'260422.07', 'Lava EDI Essex', 'Taiwan'),
  createData(19,'260435', 'Lava-19K Manchester', 'Taiwan'),
  createData(20,'260422.08', 'Lava EDI Evora', 'Taiwan'),
  createData(21,'260422', 'Lava EDI Eindhoven', 'Taiwan'),
  createData(22,'260449', 'Klabin', 'Brasil'),
  createData(23,'206254', 'LTH Baas WDR', '-'),
  createData(24,'260462', 'OCO', 'Finland'),
  createData(25,'260405', 'PM National Security Ventures', 'Egypt'),
  createData(26,'206254', 'LTH Baas WDR', 'Singapore'),
  createData(27,'260453', 'CMA CGM APL DANUBE', '-'),
  createData(28,'260500', 'Lila TM4', 'Turkey'),
  createData(29,'260491', 'Hayat TM9', 'Russia'),
  createData(30,'260424', 'CMA A.LINKOLN', 'Spain'),
  createData(31,'260453_030', 'CMA COLUMBIA', 'COLUMBIA'),
  createData(32,'260453_021', 'CMA RHONE', 'RHONE'),
  createData(33,'U1065AAA1', 'NSL3', 'Tampere'),
  createData(34,'210217', 'SWE VANQUISH TM5', '-'),
  createData(35,'TX025AAH1', 'LSZZ PM3', '-'),
  createData(36,'260489', 'Beta Centauri TM8', 'Poland'),
  createData(37,'K61156', 'K61156', 'Brasil'),
  createData(38,'260513', 'ND Jingzhou China', 'New RB'),
  createData(39,'318009', 'Kruger Brompton', 'QC via Valmet THU - Blue Jay Project'),
  createData(40,'S2021-RFQ493 ', 'Netherlands Scrubber service work', '-'),
  createData(41,'110443 ', 'SojitsMS N1220 MSB commissioning ship 1&2', '-'),
  createData(42,'110419 ', 'APL DANUBE', '-'),
  createData(43,'200665 ', 'Turkey Paper Machine IO test', 'Turkey'),
  createData(44,'110386 ', 'GDR', 'Hong Kong'),
  createData(45,'STX L34 ', 'STX L34', 'France'),
  createData(46,'206288 ', 'NB516', '-'),
  createData(47,'268047 ', 'ND DG', 'China'),
  createData(48,'268046 ', 'ND CQ', 'China'),
  createData(49,'-', 'CMA CGM Jules Verne', 'Malaysia'),
  createData(50,'U2003A', 'Portugal Hydro powerplant', ''),
  createData(51,'W1002A', 'PUMA - MP28', 'Brazil'),
  createData(52,'-', 'Slovakia', 'Slovakia'),
  createData(53,'T1011A', 'ND Beihai CP10RB SRS', 'China'),
  createData(54,'260453', 'CMA CGM APL DANUBE', '-'),
]);
*/

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

  const [squareRef, { width, height }] = useElementSize()
    

  return (
    <div
    style={{
      position: 'relative',
      height: '100%',
    }}
    ref={squareRef}
    >
        <EnhancedTableToolbar 
        numSelected={selected.length}  
        handleAddProject={handleAddProject} 
        TableEventually={TableEventually} 
        setTableEventually={setTableEventually}
        accumCollapseUser={accumCollapseUser}
        color={color}
        />


        <TableContainer style={{maxHeight: height-100}}>
          <div style={{ overflow: "auto" }} >
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
              color={color}
            />
           </Table>
           </div>
           <div
            
            style={{ overflow: 'auto', maxHeight: height-100}}>
           <Table
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <TableBody>
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
                        accumCollapseUser={accumCollapseUser}
                        color={color}
                        />
                    
                  );
                })}
            </TableBody>
          </Table>
          </div>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[outSideCountView ? outSideCountView : 14]}
          component="div"
          count={projects.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{
            bottom: '0',
            position: 'absolute',
            width: '100%',
            color: color
          }}
        />
    </div>
  );
}



export default TableMaterialUICollapsibleTable_AllProject;