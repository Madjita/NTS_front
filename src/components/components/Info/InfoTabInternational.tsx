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

 
const InfoTabInternation:  React.FC<Props> = ({ handleClickChange, userLogin}) => {

    return(
        <React.Fragment>
            <div style={{padding: '13px'}}>                
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Номер загранпаспорта</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex', width: '694px'}}>
                                    <p>{userLogin!.newUser.profile.ipNumber}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Дата выдачи-Дата окончания</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex', width: '694px'}}>
                                <p>{userLogin!.newUser.profile.ipDateTaked.substring(0, 4) + "." + userLogin!.newUser.profile.ipDateTaked.substring(5, 7) + "." + userLogin!.newUser.profile.ipDateTaked.substring(8, 10)}</p>            
                                    <p>{"-" + userLogin!.newUser.profile.ipDateBack.substring(0, 4) + "." + userLogin!.newUser.profile.ipDateBack.substring(5, 7) + "." + userLogin!.newUser.profile.ipDateBack.substring(8, 10)}</p> 
                                
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Код подразделения</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex', width: '694px'}}>
                                    <p>{userLogin!.newUser.profile.ipCode}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Кем выдан</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex', width: '694px'}}>
                                    <p>{userLogin!.newUser.profile.ipTaked}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Место рождения</p>
                        </div>
                        <div style={{width: '694px'}} className='center'>
                            <p>{userLogin!.newUser.profile.ipPlaceBorned}</p>
                        </div>
                    </div>
                </div>
                
                
        </div>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange}> {"Редактировать"}</Button></div>
                </div>
                </React.Fragment>
    )
} 

export default InfoTabInternation;