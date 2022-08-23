import { Box, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../../../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../../../redux/hooks/useTypedSelector';
import { findUser } from '../../../../../redux/store/action-creators/userLoginAction';
import { GetSessionEmail, GetSesstionToken } from '../../../../../settings/settings';
import { OldNewUser } from '../../../../components/Info/Info';
import { IUser } from '../../../../IDataInterface/IDataInterface';
import { TabPanel } from '../../../Enginer/Enginer';
import UserInfo from '../TMPCardUser/TMPDataUser/MainInfo/UserInfo';
import UserPasport from '../TMPCardUser/TMPDataUser/MainInfo/UserPasport';
import UserPasportInternational from '../TMPCardUser/TMPDataUser/MainInfo/UserPasportInternational';
import UserYLM from '../TMPCardUser/TMPDataUser/MainInfo/UserYLM';
import EditIcon from '@mui/icons-material/Edit'; 

type Props = {
    className?: string,
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





const TMPCardUser_tabs_v3:  React.FC<Props> = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      
function getStyle (isActive : any) {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab
}



    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    
    const init = () => {
        console.log("LOL")
        let newUser = new Object as OldNewUser;
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
    
    const [newUser, ChangeInfo] = React.useState<OldNewUser>({
        newUser: userLogin as IUser,
        oldUser: userLogin as IUser
    })

    const [edit,setEdit] = React.useState<boolean>(false)
   
    const handlerEditFlag = (e: any) =>{
        setEdit(!edit)
    }
    const handlerEdit = (e: any) =>{
        ChangeInfo({...e})
    }

    useEffect(()=>{
        let obj = init();
        ChangeInfo({...obj});
    },[userLogin])



    return(
        <div className='test'>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between' }}>
                <Tabs 
                value={value} onChange={handleChange} 
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
                <div className='center'>
                    <a onClick={handlerEditFlag} style={{paddingRight: '10px'}}>
                        <EditIcon style={{color: edit ? '#B8A590': ''}}/>
                    </a>
                </div>
            </Box>
            <TabPanel value={value} index={0}>
               <UserInfo userLogin={newUser} handlerEdit={handlerEdit} edit={edit}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <UserPasport userLogin={newUser} handlerEdit={handlerEdit} edit={edit}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                 <UserPasportInternational userLogin={newUser} handlerEdit={handlerEdit} edit={edit}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <UserYLM userLogin={newUser} handlerEdit={handlerEdit} edit={edit}/>
            </TabPanel>
        </div>
    )
}

export default TMPCardUser_tabs_v3;