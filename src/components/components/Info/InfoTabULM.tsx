import React, { useState } from 'react';
import './Info.css'

import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Tab, Tabs } from '@mui/material';

import {IUser} from '../../IDataInterface/IDataInterface'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { GetSesstionToken } from '../../../settings/settings';
import { useActions } from '../../../redux/hooks/userActions';
import TMPCardUser_tabs_v3 from '../../Pages/TMP/TMPBody/TMPCardUser_v2/TMPCardUser_tabs_v3';
import { TabPanel } from '../../Pages/Enginer/Enginer';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';

type Props = {
    className?: string,
    value?: any,
    change?: boolean,
    handleClickChange:  () => void,
    handleClickSave:  () => void,
    handleClickCancel:  () => void
    handlerEdit: any
    userLogin?: IOldNewUser
}

const InfoTabULM:  React.FC<Props> = ({value, change, handleClickChange, handleClickSave, handleClickCancel, handlerEdit, userLogin}) => {

    const [edit, setEdit] = React.useState<string>()

    return(
        <React.Fragment>
            <div style={{padding: '13px'}}>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>УЛМ</p>
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
                                        label="Номер"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmNumber : "Номер"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmNumber = parseInt(e.target.value);
                                            handlerEdit({...userLogin})                  
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
                                        value={ userLogin!.newUser ? new Date(userLogin!.newUser.profile.ulmDateTaked).toLocaleDateString(): "Дата выдачи"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmDateTaked = e.target.value;
                                            handlerEdit({...userLogin})                    
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
                                        value={ userLogin!.newUser ? new Date(userLogin!.newUser.profile.ulmDateBack).toLocaleTimeString() : "Дата окончания"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmDateBack = e.target.value;
                                            handlerEdit({...userLogin})                 
                                    }}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Код подразделения"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmCode : "Код подразделения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmCode = parseInt(e.target.value);
                                            handlerEdit({...userLogin})                   
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmTaked : "Кем выдан"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmTaked = e.target.value;
                                            handlerEdit({...userLogin})                      
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmPlaceBorned : "Место рождения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmPlaceBorned = e.target.value;
                                            handlerEdit({...userLogin})                    
                                    }}/>
                        </div>
                    </div>
                </div>                
        </div>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
        </React.Fragment>
    )
}
export default InfoTabULM;