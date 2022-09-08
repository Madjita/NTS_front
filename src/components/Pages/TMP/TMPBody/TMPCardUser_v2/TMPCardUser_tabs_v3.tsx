import { Box, Button, Tab, Tabs } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useActions } from '../../../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../../../redux/hooks/useTypedSelector';
import { findUser } from '../../../../../redux/store/action-creators/userLoginAction';
import { GetSessionEmail, GetSesstionToken } from '../../../../../settings/settings';
import { IUser } from '../../../../IDataInterface/IDataInterface';
import { TabPanel } from '../../../Enginer/Enginer';
import UserInfo from '../TMPCardUser/TMPDataUser/MainInfo/UserInfo';
import UserPasport from '../TMPCardUser/TMPDataUser/MainInfo/UserPasport';
import UserPasportInternational from '../TMPCardUser/TMPDataUser/MainInfo/UserPasportInternational';
import UserYLM from '../TMPCardUser/TMPDataUser/MainInfo/UserYLM';
import './TMPCardUser_tabs_v3.css'
import TextField from '@mui/material/TextField';
import DownloadPhoto from './DownloudPhoto';



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

const TMPCardUser_tabs_v3:  React.FC<Props> = ({value}) => {

    const [valueex, setValue] = React.useState(0);

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
                <UserInfo change={change} t={{
                    value: valueex,
                    action: setValue
                }}/>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                <DownloadPhoto/>              
                </div>
            </TabPanel>
            <TabPanel value={valueex} index={1}>
                <UserPasport change={change}/>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
            </TabPanel>
            <TabPanel value={valueex} index={2}>
                <UserPasportInternational change={change}/>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
            </TabPanel>
            <TabPanel value={valueex} index={3}>
                <UserYLM change={change}/>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} disabled = {change}> {"Редактировать"}</Button></div>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} disabled = {!change}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} disabled = {!change}> {"Отмена"}</Button></div>
                </div>
            </TabPanel>
            
        </div>
    )
}

export default TMPCardUser_tabs_v3;