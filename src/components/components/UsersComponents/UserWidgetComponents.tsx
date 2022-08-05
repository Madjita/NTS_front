import React, { useEffect, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';


import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import {useActions} from '../../../redux/hooks/userActions';
import { GetSesstionToken } from '../../../settings/settings';
import PacmanLoader from "react-spinners/PacmanLoader";
import {override,colorWidget} from '../../Pages/Loading/loadingData'

import Widget from '../Widget/Widget';
import UsersComponents from './UsersComponents';
import UsersComponentsTable from './UsersComponentsTable';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonMy from '../ToggleButton/ToggleButtonMy';




import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import TableMaterialUICollapsibleTable_User from '../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_User';



type Props = {
    className?: string,
    child?: any
}
  

 
const UserWidgetComponents:  React.FC<Props> = (props) => {

    const [userTableEventually, setUsersTableEventually] = useState<boolean>(false);
  
    const [reload,setReload] = useState(false);

    const [alignment, setAlignment] = React.useState('right');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };


    const {users, error, loading} = useTypedSelector(state => state.users)
    const {fetchUsers,removeUser} = useActions()


    const handleRemoveUser = async (index: number) =>
    {    
        let sessionToken =  GetSesstionToken()
         let user = users.find((company,userIndex) => userIndex === index)
         if(user!= null)
         {
            removeUser(sessionToken,user?.email)
         }
    }


    useEffect(() => {
       
        let sessionToken =  GetSesstionToken()
        if(sessionToken != null)
        {
            fetchUsers(sessionToken)
        }

    }, [reload])


    let componentLoading = null;

    if (loading) {
        componentLoading = (
            <div>
            <div style={{marginLeft: ''}}>
                <PacmanLoader color={colorWidget} loading={loading}  cssOverride={override as React.CSSProperties} size={20} />
            </div>
        </div>
        )
    }
    if (error) {
        componentLoading =  <h1>{error}</h1> 
    }
   




    return(
       
        <React.Fragment>

<AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)',justifyContent: 'center' }}
            >
            <Toolbar>
            <Grid container spacing={2} alignItems="center">
                <Grid item>
                <SearchIcon color="inherit" sx={{ display: 'block' }} />
                </Grid>
                <Grid item xs>
                <TextField
                    fullWidth
                    placeholder="Search by email address, phone number, or user UID"
                    InputProps={{
                    disableUnderline: true,
                    sx: { fontSize: 'default' },
                    }}
                    variant="standard"
                />
                </Grid>
                <Grid item>
                <Button variant="contained" size="small">
                    Add user
                </Button>
                <Tooltip title="Reload">
                    <IconButton onClick={() => setReload(!reload)}>
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Settings">
                    <IconButton>
                    <SettingsIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                </Tooltip>
                </Grid>
            </Grid>
            </Toolbar>
            </AppBar>

        {loading || error ? 
            <Box sx={{height:'50px'}}>
                {componentLoading}
            </Box>
            
        :
            <React.Fragment>
                <TableMaterialUICollapsibleTable_User data={users}/>
            </React.Fragment>
       
        }

    </React.Fragment>
       
    )
}

export default UserWidgetComponents;


/*
 <Widget
        className='users'
        header={
            <div className='toolbar'>
            <h3>Список пользователей</h3>
            <div className='settings'>
                    <ToggleButtonMy alignment= {alignment} handleChange={handleChange}/>
                    <SettingsIcon style={{color: userTableEventually ? 'green': ''}}  onClick={() => setUsersTableEventually(!userTableEventually)} />
            </div>
        </div>
        }

        children={
            <React.Fragment>


                    {loading || error ? 
                        componentLoading
                    :

                    alignment === 'left' ? 
                        <UsersComponents
                        
                            users = {users}
                            handleRemoveUser={handleRemoveUser}
                            userTableEventually={userTableEventually}
                        />
                        :
                        <UsersComponentsTable
                        
                            users = {users}
                            handleRemoveUser={handleRemoveUser}
                            userTableEventually={userTableEventually}
                            setUsersTableEventually={setUsersTableEventually}
                        />
                }
                   
            </React.Fragment>
        }
        />


*/