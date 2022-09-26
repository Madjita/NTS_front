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

 
const InfoTabInternation:  React.FC<Props> = ({value, change, handleClickChange, handleClickSave, handleClickCancel, handlerEdit, userLogin}) => {

    const [edit, setEdit] = React.useState<string>()

    return(
        <React.Fragment>
            <div style={{padding: '13px'}}>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <img  data-original="https://s3-alpha-sig.figma.com/img/08d0/9129/cea61567d098dc076916dee29da3e9a5?Expires=1661731200&Signature=ZWIaoL0CspsBvKTKzcgMJDt9m~PlmNDG90l7y2lssv7ik~zp0CMfiRTKP4kUA4jdcxXAdRSbPEorMDXn3RuaGDc03d-thID3s3HCVmo7qIcLTLHnQMH2cLGgn4TdJdJhj700yw1sS2XWhWUdPHwIPbS-chGh0E7pOE0Zamp~FMKJpjN5AHq7dGQ3a3krKD85-NAHV8wVcCASHcQLFNAGnBUF8aaexqkIVnWhD~06egp661Se9zRBi-F7unBmzqyhFl3CkRFUrfz9hcg3MTKoz~WJf84u9-hPyggI4DB0d7z8M0ZbDm2N8CIu6V~ynwRJQ91rzAsQLZjewBPW2zx8ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            src="https://s3-alpha-sig.figma.com/img/08d0/9129/cea61567d098dc076916dee29da3e9a5?Expires=1661731200&Signature=ZWIaoL0CspsBvKTKzcgMJDt9m~PlmNDG90l7y2lssv7ik~zp0CMfiRTKP4kUA4jdcxXAdRSbPEorMDXn3RuaGDc03d-thID3s3HCVmo7qIcLTLHnQMH2cLGgn4TdJdJhj700yw1sS2XWhWUdPHwIPbS-chGh0E7pOE0Zamp~FMKJpjN5AHq7dGQ3a3krKD85-NAHV8wVcCASHcQLFNAGnBUF8aaexqkIVnWhD~06egp661Se9zRBi-F7unBmzqyhFl3CkRFUrfz9hcg3MTKoz~WJf84u9-hPyggI4DB0d7z8M0ZbDm2N8CIu6V~ynwRJQ91rzAsQLZjewBPW2zx8ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            style={{
                                width: '24px',
                                height: '35px'
                            }}
                            >
                            
                            </img>
                        </div>
                        <div className='center'>
                            <p>Паспорт загран</p>
                        </div>
                        <div className='center'>
                            <div style={{display: 'flex',height: '50px'}}>
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipNumber : "Номер"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipNumber = parseInt(e.target.value);
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipDateTaked : "Дата выдачи"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipDateTaked = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipDateBack : "Дата окончания"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipDateBack = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipCode : "Код подразделения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipCode = parseInt(e.target.value);
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
                                <div style={{display: 'flex', width: '694px'}}>
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipTaked : "Кем выдан"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipTaked = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipPlaceBorned : "Место рождения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipPlaceBorned = e.target.value;
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

export default InfoTabInternation;