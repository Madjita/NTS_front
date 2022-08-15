import React, { useEffect, useState } from 'react';
import { IProject } from '../../../IDataInterface/IDataInterface';
import { UserDataPrepare } from '../../../Pages/Admin/dataTable';
import Icon from '@mui/material/Icon';

//
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

//


//
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import { AccordionActions, Button, Checkbox, FormControlLabel } from '@mui/material';
import ProjectUserDialog from './ProjectUserDialog';
//


type Props = {
    className?: string,
    child?: any,
    projects: IProject[],
    handleRemoveUser: any,
    userTableEventually: any,
    setUsersTableEventually: any
}
  

 
const ProjectUserBodyComponents:  React.FC<Props> = ({projects,handleRemoveUser,userTableEventually,setUsersTableEventually}) => {

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
      (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
      };



    const list_Projects = projects.map((item,index)=>{
        return (

            <Accordion  TransitionProps={{ unmountOnExit: true }} expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    >
                        <FormControlLabel
                            aria-label="Acknowledge"
                            labelPlacement="start"
                            onClick={(event) => event.stopPropagation()}
                            onFocus={(event) => event.stopPropagation()}
         
                            label={
                                item.title
                            }
                            control={
                                <React.Fragment>
                                    <ProjectUserDialog project={item}/>
                                    <Typography sx={{ color: 'text.secondary' }}>{"("+item.users?.length+")"}</Typography>
                                </React.Fragment>
                            }
                        />
                           
                    </AccordionSummary>
                    <AccordionDetails>
                    
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {item.users?.map((user,j)=>{
                        return (
                            <ListItem key={j}>
                                <ListItemAvatar>
                                <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                    <PersonIcon />
                                </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={user.firstName} secondary={user.role.title} />
                            </ListItem>
                        )
                    })}
                    </List>

                    </AccordionDetails>
       
            </Accordion>
        )
    })


    return(
        <React.Fragment>
           <div>
            {list_Projects}
            </div>
        </React.Fragment>
    )
}

export default ProjectUserBodyComponents;


