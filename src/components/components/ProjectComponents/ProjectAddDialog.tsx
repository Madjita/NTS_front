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
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { IProjectSendApi } from '../../IDataInterface/IDataInsideInterface';

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
    handleEdit?: any;
    indexEdit?: any;

    user?: IUser
    selectProject?: IProject

    flagChangeUserDialog: boolean,
    setChangeDialog : React.Dispatch<React.SetStateAction<boolean>>,
}



const ProjectAddDialog:  React.FC<Props> = ({title,handleAdd,handleEdit,selectProject,projectName,user, flagChangeUserDialog , setChangeDialog}) =>
{
  const [locale, setLocale] = React.useState<keyof typeof localeMap>('ru');

  const [dataStart, setDataStart] = React.useState<Date | null>(new Date());
  const [dataStop,  setDataStop]  = React.useState<Date | null>(new Date());
  const [newProject, setNewProject] = React.useState<IProjectSendApi>({
    code : selectProject ? selectProject.code : '',
    nameProject: selectProject ? selectProject.title : '',
    maxHours: selectProject ?  selectProject.maxHour : 0,
    dateStart: selectProject ? selectProject.dateStart :  dataStart!.toISOString(),
    dateStop: selectProject ? selectProject.dateStop : dataStop!.toISOString(),
    status: selectProject ? selectProject.status : 'plan',
    enginerCreater: '',
    description: selectProject ? selectProject.description : ''
   });

   
  const handleClickOpen = () => {
    setChangeDialog(true);
  };

  const handleClose = () => {
    setChangeDialog(false);
    setNewProject({
      code : selectProject ? selectProject.code : '',
      nameProject: selectProject ? selectProject.title : '',
      maxHours: selectProject ?  selectProject.maxHour : 0,
      dateStart: selectProject ? selectProject.dateStart :  dataStart!.toISOString(),
      dateStop: selectProject ? selectProject.dateStop : dataStop!.toISOString(),
      status: selectProject ? selectProject.status : 'plan',
      enginerCreater: '',
      description: selectProject ? selectProject.description : ''
     });
  };


  const handleAddClose = () => {
    
    if(newProject != null)
    {
      setChangeDialog(false);
      handleAdd(newProject);     
    }
    else
    {
      alert("Вы ни чего не ввели")
    }
    
  };

  const handleEditClose = () => {
    
    if(newProject != null)
    {
      setChangeDialog(false);

      let oldObject = new Object() as IProjectSendApi;
      oldObject.code = selectProject!.code;
      oldObject.nameProject = selectProject!.title
      oldObject.dateStart =selectProject!.dateStart
      oldObject.dateStop = selectProject!.dateStop
      oldObject.description =selectProject!.description
      oldObject.maxHours = selectProject!.maxHour
      oldObject.status = selectProject!.status
      oldObject.enginerCreater = selectProject!.enginerCreater.email

      handleEdit(oldObject,newProject);
    }
    else
    {
      alert("Вы ни чего не ввели")
    }
    
  };

  return (
    <React.Fragment>

      

      <Dialog open={flagChangeUserDialog} onClose={handleClose}>

      {handleEdit ? 
          <DialogTitle>Редактировать проект</DialogTitle>:
          <DialogTitle>Добавить проект</DialogTitle>
      }
        
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
            <MenuItem value={'none'}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'plan'}>plan</MenuItem>
            <MenuItem value={'work'}>work</MenuItem>
            <MenuItem value={'archive'}>archive</MenuItem>
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
            value={newProject.description}
            onChange={e =>{
              setNewProject({...newProject,description: e.target.value})
          }}
          />



        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отменить</Button>
          {
            handleEdit ? 
            <Button onClick={handleEditClose}>Изменить</Button>
            :
            <Button onClick={handleAddClose}>Добавить</Button>
          }
          
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}


export default ProjectAddDialog;