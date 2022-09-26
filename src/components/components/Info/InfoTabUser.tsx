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
import DownloadPhoto from '../../Pages/TMP/TMPBody/TMPCardUser_v2/DownloudPhoto';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';
import label from "../../../img/sSDlvDEX5z8.jpg";
import { PatternFormat } from 'react-number-format';




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

const InfoTabUser:  React.FC<Props> = ({value, change, handleClickChange, handleClickSave, handleClickCancel, handlerEdit, userLogin}) => {

    const [edit, setEdit] = React.useState<string>()



    return(
        <React.Fragment>
            <div style={{width:'100%',height:'50%',display:'flex'}}>
                <div style={{width:'70%',height:'100%',margin: '13px',marginRight: '0px'}}>
                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Фамилия</p>
                            </div>
                            <div className='center'>
                            <TextField
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Фамилия"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.secondName : "Фамилия"} 
                                inputProps={{ style: { textAlign: 'center',color:'black' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.secondName = e.target.value;
                                    handlerEdit({...userLogin})
                                }}/>
                            </div>
                        </div>
                    </div>
                       

                    <div style={{width:'100%', height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Имя</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Имя"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.firstName : "Имя"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.firstName = e.target.value;
                                    handlerEdit({...userLogin})                 
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Отчество</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Отчество"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.middleName : "Отчество"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.middleName = e.target.value;
                                    handlerEdit({...userLogin})                  
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Дата рождения</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Дата"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.profile.date : "Дата"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.profile.date = e.target.value;
                                    handlerEdit({...userLogin})                   
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Пол</p>
                            </div>
                            <div className='center'>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue="male">
                                    <FormControlLabel value="female" disabled={!change} control={<Radio />} label="Женщина" />
                                    <FormControlLabel value="male" disabled={!change} control={<Radio />} label="Мужчина" />                                   
                                </RadioGroup>
                            </FormControl>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>СНИЛС</p>
                            </div>
                            <div>
                                <div className='center'>
                                    <div style={{paddingRight: '20px'}}>
                                        <FileUploadIcon/>
                                        <DownloadIcon/>
                                        <PreviewIcon/>
                                    </div>
                                    <div>
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label= "Снилс"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.snils : "Снилс"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.snils = e.target.value;
                                            handlerEdit({...userLogin})                   
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>ИНН</p>
                            </div>
                            <div>
                                <div className='center'>
                                    <div style={{paddingRight: '20px'}}>
                                        <FileUploadIcon/>
                                        <DownloadIcon/>
                                        <PreviewIcon/>
                                    </div>
                                    <div>
                                        <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label= "ИНН"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.inn : "ИНН"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.inn = parseInt(e.target.value);
                                            handlerEdit({...userLogin})                 
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Телефон</p>
                            </div>
                            <div className='center'>
                            <PatternFormat 
                                format={'+# (###) ### ## ##'}
                                customInput={TextField}
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Телефон"
                                type="text"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.profile.phone : "Телефон"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.profile.phone = e.target.value;
                                    handlerEdit({...userLogin})                    
                                }}
                            />
                            </div>
                        </div>
                    </div>

                    
                </div>
                <div style={{
                    width:'203px',
                    height:'400px',
                    background: 'white',
                    margin:'13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    }}>
                    <img 
                        style={{
                        width:'203px',
                        height:'400px',
                        background: 'white',
                        margin:'13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} 
                    src={userLogin!.newUser.profile.photoByte != null || undefined ? `data:image/png;base64,${userLogin!.newUser.profile.photoByte}` : label}
                    alt='NTS'
                    loading="lazy"/>
                </div>
        </div>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
               {/*<DownloadPhoto/>   */}            
                </div>
        </React.Fragment>

    )
} 

export default InfoTabUser;