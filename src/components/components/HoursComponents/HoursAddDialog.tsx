import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ICompany, IWeek,IDocHour } from '../../IDataInterface/IDataInterface';
import {WeekInit} from './currentWeek'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import arSaLocale from 'date-fns/locale/ar-SA';

const localeMap = {
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
    projectName?:string,
    handleAdd?: any;
}

const HoursAddDialog:  React.FC<Props> = ({title,handleAdd,projectName}) =>
{
  const [locale, setLocale] = React.useState<keyof typeof localeMap>('ru');

  const [open, setOpen] = React.useState(false);

  const [dataValue, setDataValue] = React.useState<Date | null>(new Date());
  const [newWeek, setNewWeek] = React.useState<IWeek>({
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

     /* newWeek.sumHour = Number(newWeek.moHour!.workingTime) + 
                        Number(newWeek.tuHour!.workingTime) +
                        Number(newWeek.weHour!.workingTime) + 
                        Number(newWeek.thHour!.workingTime) + 
                        Number(newWeek.frHour!.workingTime) + 
                        Number(newWeek.saHour!.workingTime) + 
                        Number(newWeek.suHour!.workingTime);*/

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
            weekHours = Number(item.moHour?.workingTime);
            break;
          case 2:
            weekHours = Number(item.tuHour?.workingTime);
            break;
          case 3:
            weekHours = Number(item.weHour?.workingTime);
            break;
          case 4:
            weekHours = Number(item.thHour?.workingTime);
              break;
          case 5:
            weekHours = Number(item.frHour?.workingTime);
              break;
          case 6:
            weekHours = Number(item.saHour?.workingTime);
              break;
          case 7:
            weekHours = Number(item.suHour?.workingTime);
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


  return (
    <React.Fragment>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить почасовку к проекту : {projectName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Выбирите неделю на которой хотите добавить часы
          </DialogContentText>
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Понедельник"
            type="name"
            fullWidth
            variant="standard"
            value={newWeek.moHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,1);
              newWeek.moHour!.workingTime! = e.target.value;
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
            value={newWeek.tuHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,2);
              newWeek.tuHour!.workingTime! = e.target.value;
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
            value={newWeek.weHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,3);

              newWeek.weHour!.workingTime! = e.target.value;
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
            value={newWeek.thHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,4);

                newWeek.thHour!.workingTime! = e.target.value;
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
            value={newWeek.frHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,5);
              newWeek.frHour!.workingTime! = e.target.value;
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
            value={newWeek.saHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,6);
              newWeek.saHour!.workingTime! = e.target.value;
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
            value={newWeek.suHour!.workingTime!}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{

              sumHours(newWeek,e,7);
              newWeek.suHour!.workingTime! = e.target.value;
              setNewWeek({...newWeek})
          }}
          />
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