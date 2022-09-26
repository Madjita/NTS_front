import React,{useEffect} from 'react';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';

import Icon from '@mui/material/Icon';
import { IProject, IUser, IUserProject } from '../../../IDataInterface/IDataInterface';
import {useActions} from '../../../../redux/hooks/userActions';
import { GetSesstionToken } from '../../../../settings/settings';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { Checkbox, DialogActions } from '@mui/material';

const emails = ['username@gmail.com', 'user02@gmail.com'];


export interface SimpleDialogProps {
  open: boolean;
  selectedValue: Array<IUserProject> | undefined;
  onSaveClose: (value: Array<IUserProject>) => void;
  onClose: () => void;
  project: IProject;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose,onSaveClose, selectedValue, open } = props;

  const [checked, setChecked] = React.useState<Array<IUserProject>>([]);

  const handleSaveClose = () => {

    onSaveClose(checked);
  };

  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (e:React.ChangeEvent<HTMLInputElement> ,value: IUserProject) => {


   //let list = checked?.filter((item)=>  (item.project.title !== value.project.title) && (item.user.email !== value.user.email))

   const currentIndex = checked.indexOf(value);
   let newChecked = [...checked];

   if(e.target.checked)
   {
        

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

     
    }
    else
    {
        let list = newChecked?.findIndex((item)=> (item.project.title === value.project.title) && (item.user.email === value.user.email))

        newChecked.splice(currentIndex, 1);

    }

    setChecked(newChecked);
   
  };


  const {users, error, loading} = useTypedSelector(state => state.users)
  const {fetchUsers} = useActions()

  useEffect(() => {
       
    let sessionToken =  GetSesstionToken()
    if(sessionToken != null)
    {
        fetchUsers(sessionToken)
    }

  }, [])

  let filterUser = users?.filter((item)=>  props.project.users?.filter((userProject)=> userProject.email === item.email).length === 0);
  let list = filterUser.map((user,i)=>{
        return (
            <ListItem button key={i}>
                <Checkbox onChange={(e) => handleListItemClick(e,{user: user, project: props.project} as IUserProject)}  />
                <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={user.firstName} secondary={user.role.title} />
            </ListItem>
        )
  })

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Добавить пользователя в : {props.project.title}</DialogTitle>
      <List sx={{ pt: 0 }}>
       {

            list.length < 1 ?

                    <ListItem autoFocus button>
                        <ListItemAvatar>
                            <Avatar>
                            <AddIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Все пользователи задействованны" />
                        </ListItem>
            :
            list

       }
       </List>
       <DialogActions>
          <Button autoFocus onClick={handleSaveClose}>
            Save changes
          </Button>
        </DialogActions>
    </Dialog>
  );
}


type Props = {
    className?: string,
    child?: any,
    project: IProject,

    reload?: any
    setReload?: any


    flagProjectUserDialog?: boolean,
    setFlagProjectUserDialog? : React.Dispatch<React.SetStateAction<boolean>>,

}


const  ProjectUserDialog: React.FC<Props> = ({project,reload,setReload,flagProjectUserDialog,setFlagProjectUserDialog}) => {
  
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState<Array<IUserProject>>();

  const handleClickOpen = () => {
    setOpen(true);
  }; 
  

  const {userProjects, error, loading} = useTypedSelector(state => state.userProject)
  const {addUserProject} = useActions()

  const handleSaveClose = (value: IUserProject[]) => {
    setOpen(false);

    setSelectedValue([]);

    let sessionToken =  GetSesstionToken()
    addUserProject(sessionToken,value);
   
    if(setFlagProjectUserDialog != undefined)
      setFlagProjectUserDialog(false);

    if(setReload != undefined)
      setReload(!reload);
  };

  const handleClose = () => {
    if(setFlagProjectUserDialog != undefined)
    {
      setFlagProjectUserDialog(false);
    }
     
    setOpen(false);
  };


  useEffect(()=>{

    if(flagProjectUserDialog != null || flagProjectUserDialog!= undefined)
    {
      if(flagProjectUserDialog)
      {
        handleClickOpen()
      }
    }
  },[flagProjectUserDialog])
  

  if(flagProjectUserDialog != null || flagProjectUserDialog!= undefined)
  {
    return (
      <SimpleDialog
      selectedValue={selectedValue}
      open={open}
      onClose={handleClose}
      onSaveClose={handleSaveClose}
      project={project}
      />
      )
  }

  return (
    <div>
      <Icon style={{color: open? 'green': '', zIndex: '1'}} 
        baseClassName="fas" 
        className="fa-plus-circle" 
        onClick={handleClickOpen}
        fontSize="small"
      />
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        onSaveClose={handleSaveClose}
        project={project}
      />
    </div>
  );
}

export default ProjectUserDialog;
