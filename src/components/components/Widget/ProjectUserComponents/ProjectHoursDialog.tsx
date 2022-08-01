import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IProject } from '../../../IDataInterface/IDataInterface';


type Props = {
    className?: string,
    child?: any
    title?: string,
    handleAddCompany?: any;
}

const ProjectHoursDialog:  React.FC<Props> = ({title,handleAddCompany}) =>
{
  const [open, setOpen] = React.useState(false);

  const [NewCompany, setNewCompany] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewCompany('')
  };


  const handleAddClose = () => {
    
    if(NewCompany != '')
    {
      setOpen(false);
      handleAddCompany(NewCompany);
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
        <DialogTitle>Добавить компанию</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Напишите название компании, которую хотите добавить
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Название компании"
            type="name"
            fullWidth
            variant="standard"
            onChange={e => setNewCompany(e.target.value as string)}
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


export default ProjectHoursDialog;