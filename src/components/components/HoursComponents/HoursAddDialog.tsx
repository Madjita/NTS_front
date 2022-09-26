import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ICompany, IWeek,IDocHour, IUser, IProject } from '../../IDataInterface/IDataInterface';
import {WeekInit} from './currentWeek'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import arSaLocale from 'date-fns/locale/ar-SA';
import { MenuItem, Tab, Tabs } from '@mui/material';
import { TabPanel } from '../../Pages/Enginer/Enginer';
import HoursCode from './HoursCode';
import { useActions } from '../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { GetSesstionToken } from '../../../settings/settings';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



export const localeMap = {
  en: enLocale,
  fr: frLocale,
  de: deLocale,
  ru: ruLocale,
  ar: arSaLocale,
};



type Props = {
    className?: string,
    child?: any
    title?: string,
    selectProject?:IProject,
    handleAdd?: any;
}

const HoursAddDialog:  React.FC<Props> = ({title,handleAdd,selectProject}) =>
{

  const {users} = useTypedSelector(state => state.users)
  const {userLogin,} = useTypedSelector(state => state.userLogin)

  
  const [locale, setLocale] = React.useState<keyof typeof localeMap>('ru');

  const [open, setOpen] = React.useState(false);

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
      userProject: selectProject ? selectProject : undefined,
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

    if(users != undefined)
     {
      if(users.length > 0 )
        init.userSetWeek = users.filter(x=> x.email === userLogin?.email)[0]
     }
      
  
     return init;

  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //setNewWeek('')
  };


  const handleAddClose = () => {
    
    if(newWeek != null)
    {

     /* newWeek.sumHour = Number(newWeek.moHour!.wTHour) + 
                        Number(newWeek.tuHour!.wTHour) +
                        Number(newWeek.weHour!.wTHour) + 
                        Number(newWeek.thHour!.wTHour) + 
                        Number(newWeek.frHour!.wTHour) + 
                        Number(newWeek.saHour!.wTHour) + 
                        Number(newWeek.suHour!.wTHour);*/

      setOpen(false);
      handleAdd(newWeek);
     
    }
    else
    {
      alert("Вы ни чего не ввели")
    }
    
  };

  const sumHours = (item: IWeek,e:any,weekNumber: number) =>{

    if(item.sumHour != undefined)
    {
      
      if( Number(item.sumHour) > 0)
      {
        let weekHours = 0
        switch(weekNumber)
        {
          case 1:
            weekHours = Number(item.moHour?.wtHour);
            break;
          case 2:
            weekHours = Number(item.tuHour?.wtHour);
            break;
          case 3:
            weekHours = Number(item.weHour?.wtHour);
            break;
          case 4:
            weekHours = Number(item.thHour?.wtHour);
              break;
          case 5:
            weekHours = Number(item.frHour?.wtHour);
              break;
          case 6:
            weekHours = Number(item.saHour?.wtHour);
              break;
          case 7:
            weekHours = Number(item.suHour?.wtHour);
              break;
            
        }
        if(weekHours > 0)
        {
          item.sumHour = item.sumHour - weekHours;
        }
       
        item.sumHour += Number(e.target.value);
      }
      else
      {
        item.sumHour += Number(e.target.value);
      }
    }


  }


  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);

      if(newValue === 0 )
      {
        newWeek.tuHour!.activityCode! = newWeek.moHour!.activityCode!;
        newWeek.weHour!.activityCode! = newWeek.moHour!.activityCode!;
        newWeek.thHour!.activityCode! = newWeek.moHour!.activityCode!;
        newWeek.frHour!.activityCode! = newWeek.moHour!.activityCode!;
        newWeek.saHour!.activityCode! = newWeek.moHour!.activityCode!;
        newWeek.suHour!.activityCode! = newWeek.moHour!.activityCode!;
        setNewWeek({...newWeek})
      }
    };

  let timeFormat = {hour: '2-digit', minute:'2-digit'} as any;

  return (
    <React.Fragment>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {
          selectProject ? 
          <DialogTitle>Добавить почасовку к проекту : {selectProject!.code +" - "+ selectProject!.title}</DialogTitle>
          :
          <DialogTitle>Не нашли проект</DialogTitle>
        }
       
        <DialogContent>
          <DialogContentText>
           Выбирите неделю на которой хотите добавить часы
          </DialogContentText>
         {
          /*

           <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[locale]}>
              <DesktopDatePicker
              label="Текущая дата"
              value={dataValue}
              minDate={new Date()}
              onChange={(newValue) => {
                setDataValue(newValue);
              }}
              renderInput={(params) =>  {
                return <TextField {...params}     variant="standard"  sx={{marginTop: '10px',width:'100%', textAlign:'center'}}/>
              }}
            />
          </LocalizationProvider>

          */
         }


          <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Инженер кто добавлет"
              type="select"
              variant="standard"
              value={newWeek!.userSetWeek?.email}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                if(e.target.value === '-1')
                {
                  newWeek.userSetWeek = undefined;
                  setNewWeek({...newWeek,userSetWeek:undefined})
                }
                else
                {
                  newWeek.userSetWeek = users.filter(x=>x.email === e.target.value)[0]
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
                        <span style={{flex: '1 1 auto'}}>{item.firstName + " "+item.secondName}</span>
                        <span style={{flex: '1 1 auto'}}>{item.email}</span>
                      </div>
                    </MenuItem>
                    )
                })}
          </TextField>

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Номер недели"
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


        <Tabs value={value} onChange={handleChange} textColor="inherit">
          <Tab style={{flex: '1'}}  label={"Общий код"} />
          <Tab style={{flex: '1'}}  label={"Код по каждому"} />
        </Tabs>

        <TabPanel value={value} index={0}>

        <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
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

          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap["ru"]}>
          <div style={{display:'flex'}}>
              <div style={{flex: '1'}}>
                <TimePicker
                label="Time"
                ampm={false}
                value={dataValueMonStart}
                onChange={(e,text) => {

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
                  setDataValueMonStart(e);

                  console.log(dataValueMonStart?.toLocaleTimeString([],timeFormat))
                }

                }}
                renderInput={(params) => <TextField fullWidth {...params} variant="standard"/>}
                />
              </div>
              <div style={{flex: '1',marginLeft:'20px'}}>
                <TimePicker
                  label="Time"
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
              </div>
          </div>
          </LocalizationProvider>

          <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Понедельник"
              type="name"
              fullWidth
              variant="standard"
              value={newWeek.moHour!.wtHour!  || ""}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{

                sumHours(newWeek,e,1);
                newWeek.moHour!.wtHour! = Number(e.target.value);
                setNewWeek({...newWeek})
              }}
          />

           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Вторник"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.tuHour!.wtHour! || ""}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,2);
              newWeek.tuHour!.wtHour! = Number(e.target.value);
              setNewWeek({...newWeek})
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Среда"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.weHour!.wtHour! || ""}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,3);

              newWeek.weHour!.wtHour! = Number(e.target.value);
              setNewWeek({...newWeek})
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Четверг"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.thHour!.wtHour! || ""}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,4);

                newWeek.thHour!.wtHour! = Number(e.target.value);
                setNewWeek({...newWeek})
            }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Пятница"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.frHour!.wtHour! || ""}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,5);
              newWeek.frHour!.wtHour! = Number(e.target.value);
              setNewWeek({...newWeek})
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Суббота"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.saHour!.wtHour! || ""}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,6);
              newWeek.saHour!.wtHour! = Number(e.target.value);
              setNewWeek({...newWeek})
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Воскресенье"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.suHour!.wtHour! || ""}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,7);
              newWeek.suHour!.wtHour! = Number(e.target.value);
              setNewWeek({...newWeek})
          }}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
                    <HoursCode setNewWeek={setNewWeek} newWeek={newWeek} sumHours={sumHours} />
        </TabPanel>
                  

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          <Button onClick={handleAddClose}>Добавить</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


export default HoursAddDialog;