
import React from 'react';
import { IDocHour, IProject, IUser, IUserProject, IWeek } from "../../../IDataInterface/IDataInterface";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconDelete from '@mui/icons-material/Delete'
import { Autocomplete, MenuItem, TextField } from '@mui/material';
import { WeekInit } from '../currentWeek';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { localeMap } from '../HoursAddDialog';
import { TimePicker } from '@mui/x-date-pickers';

function RowMultiplayHours(props: { row: IUserProject, labelId: any,handleAddHours?: any,handleRemove?:any ,handleEdit?:any,TableEventually?:any,rowsPerPage?:any,page?:any,index?:any,rowsCount?:any,order?:any,accumCollapseUser?:any,setRowsPerPage?:any}) {
    const { row,labelId,handleAddHours,handleRemove,handleEdit,TableEventually,rowsPerPage,page,index,rowsCount,order,accumCollapseUser,setRowsPerPage } = props;
    const [open, setOpen] = React.useState(false);
    let indexNormal = index+(page * rowsPerPage)
    let index_with_order = order === 'asc' ? indexNormal : rowsCount-indexNormal-1;


    const {users} = useTypedSelector(state => state.users)
    const {userLogin} = useTypedSelector(state => state.userLogin)
    const {projects} = useTypedSelector(state => state.project)

    const [filterProject, setFilterProject] = React.useState({
        filter: "",
        projectFiltering: projects
    });

    const [selectDayOfWeek, setSelectDayOfWeek] = React.useState({
        day: 0,
        hours: 0
    });
    const [dataValue, setDataValue] = React.useState<Date | null>(new Date());
    const [dataValueMonStart, setDataValueMonStart] = React.useState<Date | null>(new Date());
    const [dataValueMonStop, setDataValueMonStop] = React.useState<Date | null>(new Date());

    const [newWeek, setNewWeek] = React.useState<IWeek>(()=>{
        let init =  {
           year: dataValue?.getFullYear() as number,
           month: dataValue?.getMonth() as number,
           numberWeek: WeekInit(),
           moHour: new Object as IDocHour,
           tuHour: new Object as IDocHour,
           weHour: new Object as IDocHour,
           thHour: new Object as IDocHour,
           frHour: new Object as IDocHour,
           saHour: new Object as IDocHour,
           suHour: new Object as IDocHour,
           sumHour: 0 as number,
           userSetWeek: new Object as IUser,
           userProject:  undefined,
          }
     
          init.moHour.activityCode = 'AACD'
          init.tuHour.activityCode = 'AACD'
          init.weHour.activityCode = 'AACD'
          init.thHour.activityCode = 'AACD'
          init.frHour.activityCode = 'AACD'
          init.saHour.activityCode = 'AACD'
          init.suHour.activityCode = 'AACD'
     
     
          init.moHour.workingTime = '08:00:00-17:00:00'
          init.tuHour.workingTime = '08:00:00-17:00:00'
          init.weHour.workingTime = '08:00:00-17:00:00'
          init.thHour.workingTime = '08:00:00-17:00:00'
          init.frHour.workingTime = '08:00:00-17:00:00'
          init.saHour.workingTime = '08:00:00-17:00:00'
          init.suHour.workingTime = '08:00:00-17:00:00'
     
        /* if(users != undefined)
          {
           if(users.length > 0 )
             init.userSetWeek = users.filter(x=> x.email === userLogin?.email)[0]
          }*/
           
       
          return init;
     
       });

    let timeFormat = {hour: '2-digit', minute:'2-digit'} as any;


    return (
      <React.Fragment>
        <TableRow hover sx={{ '& > *': { borderBottom: 'unset' } }}>
            <TableCell align="center"> 
               {index_with_order+1}
            </TableCell>
            <TableCell align="center"> 
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    //label="Номер недели"
                    type="name"
                    fullWidth
                    variant="standard"
                    value={newWeek.numberWeek}
                    inputProps={{ style: { textAlign: 'center' }}} 
                    onChange={e =>{
                    newWeek.numberWeek = Number(e.target.value);
                    setNewWeek({...newWeek})
                }}
                />
            </TableCell>
            <TableCell align="center"> 
                <TextField
                    autoFocus
                    select
                    fullWidth
                    margin="dense"
                    id="select"
                    //label="Код"
                    type="select"
                    variant="standard"
                    value={selectDayOfWeek.day}
                    inputProps={{ style: { textAlign: 'center' }}} 
                    onChange={e =>{
                        let value = Number(e.target.value);
                        setSelectDayOfWeek({...selectDayOfWeek,day: value,hours: 0});
                        switch(value)
                        {
                            case 0:{
                                newWeek.moHour!.wtHour! = 0;
                                newWeek.tuHour!.wtHour! = 0;
                                newWeek.weHour!.wtHour! = 0;
                                newWeek.thHour!.wtHour! = 0;
                                newWeek.frHour!.wtHour! = 0;
                                newWeek.saHour!.wtHour! = 0;
                                newWeek.suHour!.wtHour! = 0;
                                break;
                            }
                            case 1:{
                                newWeek.moHour!.wtHour! = 0;
                                break;
                            }
                            case 2:{
                                newWeek.tuHour!.wtHour! = 0;
                                break;
                            }
                            case 3:{
                                newWeek.weHour!.wtHour! = 0;
                                break;
                            }
                            case 4:{
                                newWeek.thHour!.wtHour! = 0;
                                break;
                            }
                            case 5:{
                                newWeek.frHour!.wtHour! = 0;
                                break;
                            }
                            case 6:{
                                newWeek.saHour!.wtHour! = 0;
                                break;
                            }
                            case 7:{
                                newWeek.suHour!.wtHour! = 0;
                                break;
                            }
                            default:
                                break;
                        }
                        

                        setNewWeek({...newWeek})
                    }}
                    >
                    <MenuItem value={0}>
                        <em>Все</em>
                    </MenuItem>
                    <MenuItem value={1}>Понедельник</MenuItem>
                    <MenuItem value={2}>Вторник</MenuItem>
                    <MenuItem value={3}>Среда</MenuItem>
                    <MenuItem value={4}>Четверг</MenuItem>
                    <MenuItem value={5}>Пятница</MenuItem>
                    <MenuItem value={6}>Суббота</MenuItem>
                    <MenuItem value={7}>Воскрессенье</MenuItem>
                </TextField>
            </TableCell>
            <TableCell align="center">
               {/*
                <Autocomplete
                
                id="combo-box-demo"
                {
                    ...{
                        options: projects,
                        getOptionLabel: (option: IProject) => option.code + "_"+ option.title
                      }
                }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} variant="standard"/>}
                />
               
               */}

                <TextField
                    autoFocus
                    select
                    fullWidth
                    margin="dense"
                    id="select"
                    //label="Проект"
                    type="select"
                    variant="standard"
                    value={row.project.code}
                    inputProps={{ style: { textAlign: 'center' }}} 
                    onChange={e =>{
                        //e.preventDefault()
                        if(e.target.value === '-1')
                        {
                            //row.user = new ;
                            setNewWeek({...newWeek,userSetWeek:undefined})
                        }
                        else
                        {
                            let findUser = users.filter(x=>x.email === e.target.value)[0];

                            row.user = findUser
                            newWeek.userSetWeek = findUser
                            setNewWeek({...newWeek})
                        }
                    }}

                    >
                     <MenuItem onClickCapture={e =>{
                           e.stopPropagation();
                           e.preventDefault();
                     }}>
                        {/*<TextField
                            label="Filter"
                            fullWidth
                            variant="standard"
                            value={filterProject.filter}
                            onClick={e=>{
                                //e.preventDefault()
                                //e.stopPropagation()
                            }}
                           
                            onChange={e=>{
                                //e.preventDefault()
                                //e.stopPropagation()
                                let v = e.target.value;
                                console.log("v =",v)
                                if(v = "")
                                {
                                    setFilterProject({...filterProject,
                                        filter: v, 
                                        projectFiltering: projects
                                    });
                                }
                                else
                                {
                                    setFilterProject({...filterProject,
                                        filter: v, 
                                        projectFiltering: projects.filter(x=> x.code === v)
                                    });
                                }
                            
                            }}
                        />*/}
                    </MenuItem>
                    <MenuItem value={-1} id={'-1'}>
                        <em>None</em>
                    </MenuItem>
                    {filterProject.projectFiltering.map((item,index)=>{
                        return (
                        <MenuItem key={index} value={item.code}>
                            <div style={{display: 'flex',width:'100%'}}>
                                <span style={{flex: '1 1 0px'}}>{item.code}</span>
                                <span style={{flex: '1 1 0px',
                            borderLeft: '2px solid #ccc',
                            marginLeft: '20px',
                            paddingLeft: '10px', 
                            }}>{item.title}</span>
                            </div>
                        </MenuItem>
                        )
                    })}
                </TextField>
            </TableCell>
            <TableCell align="center"> 
                <TextField
                    autoFocus
                    select
                    fullWidth
                    margin="dense"
                    id="select"
                    //label="Инженер на которого делается почасовка"
                    type="select"
                    variant="standard"
                    value={newWeek!.userSetWeek?.email}
                    inputProps={{ style: { textAlign: 'center' }}} 
                    onChange={e =>{
                        if(e.target.value === '-1')
                        {
                            //row.user = new ;
                            setNewWeek({...newWeek,userSetWeek:undefined})
                        }
                        else
                        {
                            let findUser = users.filter(x=>x.email === e.target.value)[0];

                            row.user = findUser
                            newWeek.userSetWeek = findUser
                            setNewWeek({...newWeek})
                        }
                    }}
                    >
                    <MenuItem value={-1} id={'-1'}>
                        <em>None</em>
                    </MenuItem>
                    {users.map((item,index)=>{
                        return (
                        <MenuItem key={index} value={item.email}>
                        <div style={{display: 'flex',width:'100%'}}>
                            <span style={{flex: '1 1 0px'}}>{item.firstName + " "+item.secondName}</span>
                            <span style={{flex: '1 1 0px',
                            borderLeft: '2px solid #ccc', /* Параметры линии */ 
                            marginLeft: '20px', /* Отступ слева */
                            paddingLeft: '10px', /* Расстояние от линии до текста */ 
                            }}>{item.email}</span>
                        </div>
                        </MenuItem>
                        )
                    })}
                </TextField>
            </TableCell>
            <TableCell align="center"> 
                <TextField
                autoFocus
                select
                fullWidth
                margin="dense"
                id="select"
                //label="Код"
                type="select"
                variant="standard"
                value={newWeek.moHour?.activityCode || 'None'}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                    newWeek.moHour!.activityCode! = e.target.value;
                    newWeek.tuHour!.activityCode! = e.target.value;
                    newWeek.weHour!.activityCode! = e.target.value;
                    newWeek.thHour!.activityCode! = e.target.value;
                    newWeek.frHour!.activityCode! = e.target.value;
                    newWeek.saHour!.activityCode! = e.target.value;
                    newWeek.suHour!.activityCode! = e.target.value;

                    setNewWeek({...newWeek})
                }}
                >
                    <MenuItem value={'None'}>
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={'AACD'}>AACD</MenuItem>
                    <MenuItem value={'AACF'}>AACF</MenuItem>
                    <MenuItem value={'AACE'}>AACE</MenuItem>
                    <MenuItem value={'AADE'}>AADE</MenuItem>
                </TextField>
            </TableCell>
            <TableCell align="center"> 
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap["en"]}>
                    <TimePicker
                    ampm={false}
                    value={dataValueMonStart}
                    onChange={(e,text) => {

                    if(e != null)
                    {
                    let dataStart = dataValueMonStart?.toLocaleTimeString([], timeFormat) as string
                    let dataStop = dataValueMonStop?.toLocaleTimeString([], timeFormat) as string

                    console.log(dataStart+"-"+dataStop)
                    

                    newWeek.moHour!.workingTime! = dataStart+"-"+dataStop
                    newWeek.tuHour!.workingTime! = dataStart+"-"+dataStop
                    newWeek.weHour!.workingTime! = dataStart+"-"+dataStop
                    newWeek.thHour!.workingTime! = dataStart+"-"+dataStop
                    newWeek.frHour!.workingTime! = dataStart+"-"+dataStop
                    newWeek.saHour!.workingTime! = dataStart+"-"+dataStop
                    newWeek.suHour!.workingTime! = dataStart+"-"+dataStop
        
                    setNewWeek({...newWeek})
                    setDataValueMonStart(e);

                    console.log(dataValueMonStart?.toLocaleTimeString([], timeFormat))
                    }

                    }}
                    renderInput={(params) => <TextField fullWidth {...params} variant="standard"/>}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell align="center"> 
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap["en"]}>
                    <TimePicker
                        ampm={false}
                        value={dataValueMonStop}
                        onChange={(e) => {

                        if(e != null)
                        {
                            let dataStart = dataValueMonStart?.toLocaleTimeString([],timeFormat) as string
                            let dataStop = dataValueMonStop?.toLocaleTimeString([],timeFormat) as string
        
                            console.log(dataStart+"-"+dataStop)
                        
        
                            newWeek.moHour!.workingTime! = dataStart+"-"+dataStop
                            newWeek.tuHour!.workingTime! = dataStart+"-"+dataStop
                            newWeek.weHour!.workingTime! = dataStart+"-"+dataStop
                            newWeek.thHour!.workingTime! = dataStart+"-"+dataStop
                            newWeek.frHour!.workingTime! = dataStart+"-"+dataStop
                            newWeek.saHour!.workingTime! = dataStart+"-"+dataStop
                            newWeek.suHour!.workingTime! = dataStart+"-"+dataStop
                
                            setNewWeek({...newWeek})
                            setDataValueMonStop(e);

                            console.log(dataValueMonStop?.toLocaleTimeString([],timeFormat))
                        }

                        }}
                        renderInput={(params) => <TextField fullWidth {...params} variant="standard"/>}
                    />
                </LocalizationProvider>
            </TableCell>
            <TableCell align="center"> 
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    //label="Воскресенье"
                    type="name"
                    fullWidth
                    variant="standard"
                    value={selectDayOfWeek.hours || ""}
                    inputProps={{ style: { textAlign: 'center' }}} 
                    onChange={e =>{
                        //sumHours(newWeek,e,7);
                        selectDayOfWeek.hours  = Number(e.target.value);
                        switch(selectDayOfWeek.day)
                        {
                            case 0:{
                                newWeek.moHour!.wtHour! = Number(e.target.value);
                                newWeek.tuHour!.wtHour! = Number(e.target.value);
                                newWeek.weHour!.wtHour! = Number(e.target.value);
                                newWeek.thHour!.wtHour! = Number(e.target.value);
                                newWeek.frHour!.wtHour! = Number(e.target.value);
                                newWeek.saHour!.wtHour! = Number(e.target.value);
                                newWeek.suHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 1:{
                                newWeek.moHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 2:{
                                newWeek.tuHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 3:{
                                newWeek.weHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 4:{
                                newWeek.thHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 5:{
                                newWeek.frHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 6:{
                                newWeek.saHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            case 7:{
                                newWeek.suHour!.wtHour! = Number(e.target.value);
                                break;
                            }
                            default:
                                break;
                        }

                        setNewWeek({...newWeek})
                        setSelectDayOfWeek({...selectDayOfWeek})    
                    }}
                />
            </TableCell>
            <TableCell align="center">
                <IconDelete onClick={()=>{
               
                handleRemove(index_with_order)
                }}/>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  export default RowMultiplayHours;