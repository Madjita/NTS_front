import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import '../../../TMPCardUser_v2/TMPCardUser_tabs_v3'
import './MainInfo.css'
import { IUser } from '../../../../../../IDataInterface/IDataInterface';
import { createTheme, TextField } from '@mui/material';

type Props = {
    className?: string,
    userLogin?: IUser | null
    change?: boolean
}



 
const UserPasportInternational:  React.FC<Props> = ({change, userLogin} : Props) => {

    const [edit, setEdit] = React.useState<string>()

    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#FFFFFF',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#009BE5',
          },
        },
      });
      
    return(
        <div style={{padding: '13px'}}>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Паспорт загран</p>
                        </div>
                        <div className='center'>
                            <div style={{display: 'flex'}}>
                                <div className='center'>
                                    <div>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Серия номер"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                        }}/>
                                    </div>         
                                    <div style={{paddingLeft: '10px'}}>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Дата выдачи"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                    }}/>
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                    <div>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Дата окончания"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                    }}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Дата окончания"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                    }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div className='center'>
                                <div style={{paddingRight: '15px'}}>
                                    <FileUploadIcon/>
                                    <DownloadIcon/>
                                    <PreviewIcon/>
                                </div>
                                <div style={{display: 'flex',width: '694px'}}>
                                <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Кем выдан"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                    }}/>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '694px'}} className='center'>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Место рождения"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                    }}/>
                        </div>
                    </div>
                </div>                
        </div>
    )
}

export default UserPasportInternational;

