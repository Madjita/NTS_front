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

type Props = {
    className?: string,
    value?: any
}
 
export interface OldNewUser{
    oldUser: IUser,
    newUser: IUser 
}

const tabStyle = {
    default_tab:{
        color: '#FFFFFF',
        //width: '33.3%',
        //backgroundColor: '#FFFFFF',
        //fontSize: 15
    },
    active_tab:{
        color: 'black',
        //width: '33.3%',
        backgroundColor: '#B8A590',
        //borderRadius: '10px',
        //fontSize: 15
    }
};

const Info:  React.FC<Props> = ({value}) => {

    const [valueex, setValue] = React.useState(0);
    const [edit, setEdit] = React.useState<string>()
    const {userLogin} = useTypedSelector(state => state.userLogin)
    const [newwUser, ChangeInfo] = useState<OldNewUser>({      
        oldUser: userLogin as IUser,
        newUser: new Object as IUser
    })


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

   
    const [change, changeButton] = React.useState<boolean>(false);    
    
    const handleClickChange = () => {
        changeButton(!change)
    }

    const handleClickSave = () => {       
        changeButton(!change)
        
    }

    const handleClickCancel = () => {
        changeButton(!change)
    }


    function getStyle (isActive : any) {
        return isActive ? tabStyle.active_tab : tabStyle.default_tab
    }
    
        return(
            <div className='test'>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                value={valueex} onChange={handleChange} 
                aria-label="basic tabs example" 
                textColor="inherit"
                TabIndicatorProps={{
                    style: {
                      backgroundColor: "#B8A590"
                     }
                    }}
                >
                    <Tab label="Информация" {...a11yProps(0)} />
                    <Tab label="Паспорт РФ" {...a11yProps(1)} />
                    <Tab label="Заграничный паспорт" {...a11yProps(2)} />
                    <Tab label="УЛМ" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={valueex} index={0}>
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
                                label="Имя"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value ={userLogin?.firstName || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
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
                                label="Отчество"
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
                                        label="Снилс"
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
                                        label="ИНН"
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
                                label="Телефон"
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
                <div style={{
                    width:'203px',
                    height:'272px',
                    background: 'white',
                    margin:'13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                    <img  
                    src={"https://s3-alpha-sig.figma.com/img/96bb/4f15/1760424f6bb319f08d77ff589f892d8c?Expires=1661731200&Signature=RRB6H5qJBy3WET2pry74WLyaYiGJqwaNKFnZPpLtiJpASQnv9cx7UWUXkdOgFFhnSxmxiRxWD4~xusDrniFvonV9~2lzmdVHvyHKcpPS9Wo5Zk2oe9VQFzdX669uFMxPHGjFxdauiTSQQJy3h-MkdnOu-pX~5JKGhJqktgxlooCG~syrZrJew6sspwAqEQdtZ33W0ivDcaTiN~HkEGi-iRYd74dD0TiH-M73jwPyUEMQ5LX4Oltg~6now0UkXkZmKJKFxyHGL1CmWQD-SQvjdgUV6W9vOV3rByaFfJGs~Ab0wtA3h6Zz13oTHhC1yxxYu3gIZBbCDsKYrpSlm~P9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
                    srcSet={"https://s3-alpha-sig.figma.com/img/96bb/4f15/1760424f6bb319f08d77ff589f892d8c?Expires=1661731200&Signature=RRB6H5qJBy3WET2pry74WLyaYiGJqwaNKFnZPpLtiJpASQnv9cx7UWUXkdOgFFhnSxmxiRxWD4~xusDrniFvonV9~2lzmdVHvyHKcpPS9Wo5Zk2oe9VQFzdX669uFMxPHGjFxdauiTSQQJy3h-MkdnOu-pX~5JKGhJqktgxlooCG~syrZrJew6sspwAqEQdtZ33W0ivDcaTiN~HkEGi-iRYd74dD0TiH-M73jwPyUEMQ5LX4Oltg~6now0UkXkZmKJKFxyHGL1CmWQD-SQvjdgUV6W9vOV3rByaFfJGs~Ab0wtA3h6Zz13oTHhC1yxxYu3gIZBbCDsKYrpSlm~P9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
                    alt='NTS'
                    loading="lazy"/>
                </div>
        </div>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                              
                </div>
            </TabPanel>
            <TabPanel value={valueex} index={1}>
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
                            <p>Паспорт РФ</p>
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
                                        label="Код подразделения"
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
                                        label="Место прописки"
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
                                        label="Место проживания"
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
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
            </TabPanel>
            <TabPanel value={valueex} index={2}>
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
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
            </TabPanel>
            <TabPanel value={valueex} index={3}>
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
                                        label="Код подразделения"
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
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
            </TabPanel>               
            </div>
        )
}


export default Info;
