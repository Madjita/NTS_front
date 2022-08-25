import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React from 'react';


type Props = {
    open?: any,
    setOpen?: any,
    textForCopy?: any,
    setTextForCopy?:any,
}



 
const Dialog_copy:  React.FC<Props> = ({open,setOpen,textForCopy,setTextForCopy}) => {


    const handleClickClose = () => {
        setOpen(false);
        navigator.clipboard.writeText(textForCopy)
      };
    
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <Dialog open={open} onClose={handleClose}
        PaperProps={{
            sx: {
              width: "50%",
              minHeight: "50%" 
            },
            style:{
                backgroundColor:'#333333',
                color: 'white',
            }
            
          }}>
            <DialogTitle>Скопировать информацию: </DialogTitle>
            <DialogContent dividers>
                <textarea className='origin' style={{width: '100%', height: '100%', resize: 'none'}} value={textForCopy} onChange={e=>{
                    setTextForCopy(e.target.value)
                }}/>
            </DialogContent>
            <DialogActions>
            <Button autoFocus onClick={handleClickClose} sx={{color: 'white'}}>
                Скопировать
            </Button>
            </DialogActions>
        </Dialog>

    )
}

export default Dialog_copy;