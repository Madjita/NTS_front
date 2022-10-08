import React, { useEffect, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import InfoTabULMDialog from './InfoTabULMDialog';
import InfoTabUserDialog from './InfoTabUserDialog';
import InfoTabInternationalDialog from './InfoTabInternationalDialog';
import InfoTabPassportDialog from './InfoTabPassportDialog';
import { TabPanel } from '../../../Pages/Enginer/Enginer';
import { IOldNewUser } from '../../../IDataInterface/IDataInsideInterface';
import { Tab, Tabs } from '@mui/material';


type Props = {
    userLogin?: IOldNewUser,
    open?: boolean,
    onClose?: React.Dispatch<React.SetStateAction<boolean>>,
    handleClickSave:  () => void,
    handleClickCancel:  () => void
    ChangeInfo: React.Dispatch<React.SetStateAction<IOldNewUser>>
}

const InfoDialog:  React.FC<Props> = ({open, onClose, userLogin, handleClickSave, handleClickCancel, ChangeInfo}) => {

    
    function a11yProps(index: number) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [valueex, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    
    return (
    <React.Fragment>
    <Dialog open={open!} onClose={onClose!}>
        <DialogTitle>Редактировать профиль</DialogTitle>
        <Tabs 
                value={valueex} onChange={handleChange} 
                aria-label="basic tabs example" 
                textColor="inherit"
                TabIndicatorProps={{
                    style: {
                      backgroundColor: "#B8A590"
                     }
                    }}>
                    <Tab label="Информация" {...a11yProps(0)}/>
                    <Tab label="Паспорт РФ" {...a11yProps(1)}/>
                    <Tab label="Заграничный паспорт" {...a11yProps(2)}/>
                    <Tab label="УЛМ" {...a11yProps(3)}/>
                </Tabs>
        <TabPanel index={0} value={valueex}>
            <InfoTabUserDialog userLogin={userLogin}  handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel}
            ChangeInfo = {ChangeInfo}/>
        </TabPanel>
        <TabPanel index={1} value={valueex}>
            <InfoTabPassportDialog userLogin={userLogin}  handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel}
            ChangeInfo = {ChangeInfo}/>     
        </TabPanel>
        <TabPanel index={2} value={valueex}>
            <InfoTabInternationalDialog userLogin={userLogin}  handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel}
            ChangeInfo = {ChangeInfo}/>   
        </TabPanel>
        <TabPanel index={3} value={valueex}>
            <InfoTabULMDialog userLogin={userLogin}  handleClickSave = {handleClickSave} handleClickCancel = {handleClickCancel}
            ChangeInfo = {ChangeInfo}/>
        </TabPanel>
    </Dialog>
    </React.Fragment>
  );
} 

export default InfoDialog;


