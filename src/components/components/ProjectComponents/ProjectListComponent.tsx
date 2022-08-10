import React, { useEffect, useState } from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import { IUserProject } from '../../IDataInterface/IDataInterface';

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


type Props = {
    className?: string,
    child?: any,
    projects?: IUserProject[]
    title: string
}
  

 
const ProjectListComponent:  React.FC<Props> = ({projects,title}) => {


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
            {projects ?  projects.map((value,index) => (
                <React.Fragment>
                <ListItem
                key={index}
                disableGutters
                secondaryAction={
                    <IconButton aria-label="comment">
                    <CommentIcon />
                    {value.project.actualHour}
                    </IconButton>
                }
                >
                <ListItemText primary={value.project.title} />
                </ListItem>
                <Divider variant="inset" component="li"/>
                </React.Fragment>
            )):
            null}
            </List>
    </React.Fragment>
    )
}

export default ProjectListComponent;


