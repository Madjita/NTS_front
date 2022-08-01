import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import { IUser,IUserProject } from '../../IDataInterface/IDataInterface';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Grid } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { Box } from '@mui/system';
import Divider from '@mui/material/Divider';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../redux/hooks/userActions';
import { GetSesstionToken,GetSessionEmail } from '../../../settings/settings';

import axios from "axios";
import GetConnectionString from "../../../settings/settings";

type Props = {
    className?: string,
    child?: any,
    projectProps?: IUserProject,
    title?: string
}
  

 
const UsersListComponent:  React.FC<Props> = ({projectProps,title}) => {

    //const {companies,error,loading} = useTypedSelector(state => state.company)
    //const {fetchUsersInProject} = useActions()

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(()=>{

        
        const fetchData =   async () =>{
            let sessionToken =  GetSesstionToken()
            if(sessionToken != null && projectProps != null)
            {
                const formData  = new FormData();
                formData.append('Project', projectProps.project.title);
    
                axios.defaults.headers.common['Authorization'] = sessionToken;
                const response = await (await axios.post(GetConnectionString()+'/Project/projects/usersInProject',formData))
                setUsers(response.data);

            }
        }

        fetchData();

    },[])
    
    return(

        <div>
        <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)',justifyContent: 'center' }}
        >
        <Toolbar>
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <p>{title}</p>
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid item>
            </Grid>
        </Grid>
        </Toolbar>
        </AppBar>
            <List sx={{ width: '100%',  bgcolor: 'background.paper', padding:'10px' }}>
            {users ?  users.map((value,index) => (
                <div key={index}>
                    <ListItem
                    
                    disableGutters
                    sx={{height:'100%'}}
                    >
                    <ListItemText primary={value.secondName} />
                    <ListItemText primary={value.firstName} />
                    <ListItemText primary={value.middleName} />
                    <ListItemText primary={value.userProjects.length} />
                    </ListItem>
                    <Divider variant="inset" component="li"/>
                </div>
            )):
            null}
            </List>
    </div>
    )
}

export default UsersListComponent;


