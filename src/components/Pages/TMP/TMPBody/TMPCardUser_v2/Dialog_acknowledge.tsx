import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';
import { useActions } from '../../../../../redux/hooks/userActions';
import { GetSesstionToken } from '../../../../../settings/settings';
import { OldNewUser } from './TMPCardUser_tabs_v3';



type Props = {
    open?: any,
    setOpen?: any,
    newUser?: OldNewUser,
    setNewUser?:any,
}



 
const Dialog_acknowledge:  React.FC<Props> = ({open,setOpen,newUser,setNewUser}) => {


    const {changeUser} = useActions()
    
    const HandleChangeUser = ()=>{
        let sessionToken = GetSesstionToken();

        if(newUser != undefined && sessionToken != undefined)
        {
            changeUser(sessionToken, newUser)
        }
    }
    
    const handleClickClose = () => {
        setOpen(false);
        HandleChangeUser();
    };
    
    const handleClose = () => {
        setOpen(false);

        newUser!.newUser = structuredClone(newUser?.oldUser)
        setNewUser({...newUser})
    };

    return(
        <Dialog open={open} onClose={handleClose}
        PaperProps={{
            sx: {
             // width: "50%",
             // minHeight: "50%"
            }
          }}>
            <DialogTitle>Сохранить изменение информации? </DialogTitle>
            <DialogActions>
            <Button autoFocus onClick={handleClickClose}>
                Сохранить
            </Button>
            <Button onClick={handleClose}>Отменить</Button>
            </DialogActions>
        </Dialog>

    )
}

export default Dialog_acknowledge;