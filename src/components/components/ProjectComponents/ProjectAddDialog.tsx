import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ICompany, IWeek,IDocHour, IProject, IUser } from '../../IDataInterface/IDataInterface';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import arSaLocale from 'date-fns/locale/ar-SA';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

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

    user?: IUser
}


export interface IProjectSendApi {
  code: string, //Код проекта может быть с символами
  nameProject: string,
  maxHours: number,     // Количество часов выделенное на проект
  dateStart: string, // Дата старта
  dateStop: string,  // Дата завершения
  status: string,    // Статус проекта ( план, в работе, в архиве)
  enginerCreater?: string // Тот кто создал проект
  descriptirons: string,
}

const ProjectAddDialog:  React.FC<Props> = ({title,handleAdd,projectName,user}) =>
{
  const [locale, setLocale] = React.useState<keyof typeof localeMap>('ru');

  const [open, setOpen] = React.useState(false);

  const [dataStart, setDataStart] = React.useState<Date | null>(new Date());
  const [dataStop,  setDataStop]  = React.useState<Date | null>(new Date());
  const [newProject, setNewProject] = React.useState<IProjectSendApi>({
    code : '',
    nameProject: '',
    maxHours: 0,
    dateStart: '',
    dateStop: '',
    status: 'plan',
    enginerCreater: '',
    descriptirons: ''
   });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    //setNewWeek('')
  };


  const handleAddClose = () => {
    
    if(newProject != null)
    {

      setOpen(false);
      handleAdd(newProject);
     
    }
    else
    {
      alert("Вы ни чего не ввели")
    }
    
  };

  return (
    <React.Fragment>
      <Button size="small" variant="outlined" onClick={handleClickOpen}>
        {title}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Добавить проект</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Введите информацию о проекте
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Код проекта"
            type="name"
            fullWidth
            variant="standard"
            value={newProject.code}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{
              setNewProject({...newProject,code: e.target.value})
          }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название проекта"
            type="name"
            fullWidth
            variant="standard"
            value={newProject.nameProject}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{
              setNewProject({...newProject,nameProject: e.target.value})
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Максимальное количество часов"
            type="name"
            fullWidth
            variant="standard"
            value={newProject.maxHours}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{
              setNewProject({...newProject,maxHours: Number(e.target.value)})
          }}
          />
           <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[locale]}>
             <div style={{display:'flex'}}>
              <div style={{flex: '1'}}>
                <DesktopDatePicker
                label="Дата начала"
                value={dataStart}
                onChange={(newValue) => {
                  setDataStart(newValue);
                  if(newValue != undefined)
                    setNewProject({...newProject,dateStart: newValue?.toISOString()})
                }}
                renderInput={(params) =>  {
                  return <TextField {...params}   variant="standard"  sx={{marginTop: '10px',width:'100%', textAlign:'center'}}/>
                }}
                />
              </div>
              <div style={{flex: '1',marginLeft:'20px'}}>
                <DesktopDatePicker
                label="Дата окончания"
                value={dataStop}
                onChange={(newValue) => {
                  setDataStop(newValue);
                  if(newValue != undefined)
                    setNewProject({...newProject,dateStop: newValue?.toISOString()})
                }}
                renderInput={(params) =>  {
                  return <TextField {...params}   variant="standard"  sx={{marginTop: '10px',width:'100%', textAlign:'center'}}/>
                }}
                />
              </div>
             </div>
          </LocalizationProvider>
          <TextField
            autoFocus
            select
            fullWidth
            margin="dense"
            id="select"
            label="Статус"
            type="select"
            variant="standard"
            value={newProject.status}
            inputProps={{ style: { textAlign: 'center' }}} 
            onChange={e =>{
              setNewProject({...newProject,status: e.target.value})
          }}
          >
            <MenuItem value={1}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={2}>plan</MenuItem>
            <MenuItem value={3}>work</MenuItem>
            <MenuItem value={4}>archive</MenuItem>
          </TextField>

          <TextField
            autoFocus
            multiline
            fullWidth
            margin="dense"
            id="name"
            label="Описание"
            type="name"
            
            rows={4}
            value={newProject.descriptirons}
            onChange={e =>{
              setNewProject({...newProject,descriptirons: e.target.value})
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


export default ProjectAddDialog;