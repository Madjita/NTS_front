import React, { useState } from 'react';
import './Info.css'

import TextField from '@mui/material/TextField';
<<<<<<< HEAD
import { Button, FormControl, FormControlLabel, Radio, RadioGroup} from '@mui/material';

import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';
import label from "../../../img/sSDlvDEX5z8.jpg";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { localeMap } from '../HoursComponents/HoursAddDialog';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
=======
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
>>>>>>> main


type Props = {
    className?: string,
    value?: any,
    change?: boolean,
    handleClickChange:  () => void,
    handleClickSave:  () => void,
    handleClickCancel:  () => void
<<<<<<< HEAD
    handlerEdit: any
    userLogin?: IOldNewUser
}

const InfoTabUser:  React.FC<Props> = ({value, change, handleClickChange, handleClickSave, handleClickCancel, handlerEdit, userLogin}) => {

    const [locale, setLocale] = React.useState<keyof typeof localeMap>('ru');
    const [date, setDate] = React.useState<Date | null>(new Date(userLogin!.newUser.profile.date));
=======
}

const InfoTabUser:  React.FC<Props> = ({value, change, handleClickChange, handleClickSave, handleClickCancel}) => {

    const {userLogin} = useTypedSelector(state => state.userLogin)
    const [edit, setEdit] = React.useState<string>()
>>>>>>> main

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
<<<<<<< HEAD
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
=======
                                label= {change ? userLogin?.secondName : "Фамилия"}
                                type="name"
                                fullWidth
                                size='small'
                                variant="standard"
                                color="primary" focused 
                                value ={userLogin?.secondName}
                                inputProps={{ style: { textAlign: 'center',color:'black' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
>>>>>>> main
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
<<<<<<< HEAD
                                label= "Имя"
=======
                                label="Имя"
>>>>>>> main
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
<<<<<<< HEAD
                                value={ userLogin!.newUser ? userLogin!.newUser.firstName : "Имя"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.firstName = e.target.value;
                                    handlerEdit({...userLogin})                 
=======
                                value ={userLogin?.firstName || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
>>>>>>> main
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
<<<<<<< HEAD
                                label= "Отчество"
=======
                                label="Отчество"
>>>>>>> main
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
<<<<<<< HEAD
                                value={ userLogin!.newUser ? userLogin!.newUser.middleName : "Отчество"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.middleName = e.target.value;
                                    handlerEdit({...userLogin})                  
=======
                                value ={edit || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
>>>>>>> main
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
<<<<<<< HEAD
                            <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeMap[locale]}>
                                <DesktopDatePicker            
                                    disabled={!change}
                                    label= "Дата"
                                    value={date} 
                                    renderInput={(params) =>  {
                                        return <TextField {...params} 
                                         autoFocus 
                                         fullWidth
                                         margin="dense"
                                         variant="outlined" 
                                         size='small'
                                         color="primary" focused 
                                         sx={{marginTop: '10px',width:'100%', textAlign:'center'}}/>
                                    }}
                                    onChange={e=>{
                                        if(e != undefined)
                                        { 
                                            setDate(e);
                                            console.log(userLogin!.newUser.profile.date ,e?.toISOString())
                                            userLogin!.newUser.profile.date = e?.toISOString();
                                            handlerEdit({...userLogin})         
                                        }     
                                    }}
                                />
                            </LocalizationProvider>
=======
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Дата рождения"
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
>>>>>>> main
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
<<<<<<< HEAD
                                        label= "Снилс"
=======
                                        label="Снилс"
>>>>>>> main
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
<<<<<<< HEAD
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.snils : "Снилс"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.snils = e.target.value;
                                            handlerEdit({...userLogin})                   
=======
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
>>>>>>> main
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
<<<<<<< HEAD
                                        label= "ИНН"
=======
                                        label="ИНН"
>>>>>>> main
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
<<<<<<< HEAD
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.inn : "ИНН"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.inn = parseInt(e.target.value);
                                            handlerEdit({...userLogin})                 
=======
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
>>>>>>> main
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
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
<<<<<<< HEAD
                                label= "Телефон"
=======
                                label="Телефон"
>>>>>>> main
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
<<<<<<< HEAD
                                value={ userLogin!.newUser ? userLogin!.newUser.profile.phone : "Телефон"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.profile.phone = e.target.value;
                                    handlerEdit({...userLogin})                    
=======
                                value ={edit || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
>>>>>>> main
                                }}/>
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
<<<<<<< HEAD
                        style={{
=======
                     style={{
>>>>>>> main
                        width:'203px',
                        height:'400px',
                        background: 'white',
                        margin:'13px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }} 
<<<<<<< HEAD
                    src={userLogin!= null && userLogin.newUser != null && userLogin.newUser.profile != null && userLogin.newUser.profile.photoByte != null  ? `data:image/png;base64,${userLogin!.newUser.profile.photoByte}` : label}
=======
                    src={`data:image/png;base64,${userLogin!.profile.photoByte}`}
>>>>>>> main
                    alt='NTS'
                    loading="lazy"/>
                </div>
        </div>
                <div className='Buttons'>
<<<<<<< HEAD
                <div className='handleClickChange'>
                    <Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button>
                </div>
                <div className='handleClickSave'>
                    <Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button>
                    </div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>          
=======
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
               {/*<DownloadPhoto/>   */}            
>>>>>>> main
                </div>
        </React.Fragment>

    )
} 

export default InfoTabUser;