import React, { useEffect, useState } from 'react';
import './Info.css'

import TextField from '@mui/material/TextField';
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, Tab, Tabs } from '@mui/material';

import {IUser} from '../../IDataInterface/IDataInterface'
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { GetSesstionToken } from '../../../settings/settings';
import { useActions } from '../../../redux/hooks/userActions';
import TMPCardUser_tabs_v3, { OldNewUser } from '../../Pages/TMP/TMPBody/TMPCardUser_v2/TMPCardUser_tabs_v3';
import { TabPanel } from '../../Pages/Enginer/Enginer';
import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import DownloadPhoto from '../../Pages/TMP/TMPBody/TMPCardUser_v2/DownloudPhoto';
import InfoTabUser from './InfoTabUser';
import InfoTabPassport from './InfoTabPassport';
import InfoTabInternation from './InfoTabInternational';
import InfoTabULM from './InfoTabULM';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';

type Props = {
    className?: string,
    value?: any
}
 

const tabStyle = {
    default_tab:{
        color: '#FFFFFF',
    },
    active_tab:{
        color: 'black',
        backgroundColor: '#B8A590',
    }
};

const Info:  React.FC<Props> = ({value}) => {

    const [valueex, setValue] = React.useState(0);

    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    const init = () => {
        let newUser = new Object as IOldNewUser;
            if(userLogin != undefined)
            {
                if(userLogin.profile != undefined)
                {
                    newUser.oldUser = userLogin as IUser;
                    newUser.newUser = JSON.parse(JSON.stringify(userLogin)) as IUser;
                    
                }
            }
        return newUser;
    }
    const [newUser, ChangeInfo] = React.useState<IOldNewUser>({
        newUser: userLogin as IUser,
        oldUser: userLogin as IUser
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

   
    let [change, changeButton] = React.useState<boolean>(false);    
    
    const handleClickChange = () => {
        changeButton(!change)
    }
   
    const handlerEdit = (e: any) =>{
        ChangeInfo({...e})
    }

    useEffect(()=>{
        let obj = init();
        ChangeInfo({...obj});
    },[userLogin])


    const {changeUser} = useActions()

    const handleClickSave = () => {     
        let sessionToken = GetSesstionToken();

        if(newUser != undefined && sessionToken != undefined)
        {
            changeUser(sessionToken, newUser)
        } 
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
            <TabPanel index={0} value={valueex}>
                <InfoTabUser  change = {change} handleClickChange = {handleClickChange} 
                handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel} handlerEdit={handlerEdit} userLogin={newUser}/>
            </TabPanel>
            <TabPanel index={1} value={valueex}>
                <InfoTabPassport  change = {change} handleClickChange = {handleClickChange} 
                handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel} handlerEdit={handlerEdit} userLogin={newUser}/>
            </TabPanel>
            <TabPanel index={2} value={valueex}>
                <InfoTabInternation  change = {change} handleClickChange = {handleClickChange} 
                handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel} handlerEdit={handlerEdit} userLogin={newUser}/>
            </TabPanel>
            <TabPanel index={3} value={valueex}>
                <InfoTabULM  change = {change} handleClickChange = {handleClickChange} 
                handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel} handlerEdit={handlerEdit} userLogin={newUser}/>
            </TabPanel>                       
            </div>
        )
}


export default Info;
