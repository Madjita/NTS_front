import { IconButton, Toolbar, Tooltip } from "@mui/material";
import ProjectAddDialog from "../../ProjectComponents/ProjectAddDialog";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import SettingsIcon from '@mui/icons-material/Settings';
import React from "react";


type Props = {
    numSelected: number;
    handleAddProject: any;
  
    TableEventually: any;
    setTableEventually: any;
    accumCollapseUser: any;
}

  
  const EnhancedTableToolbar:  React.FC<Props> = (props) => {

    const {numSelected,handleAddProject,TableEventually, setTableEventually,accumCollapseUser} = props;
    const [flagChangeUserDialog, setChangeDialog] = React.useState(false);

    return (
      <Toolbar
        sx={{
          pl: { sm: 2 },
         // width: '100%',
          display: 'block',
        }}
      >
      <div style={{float: 'left'}}>
        <Tooltip title="Закрыть все открытые таблицы пользователей">
          <IconButton style={{color: TableEventually? 'green': ''}}  onClick={() => {
            accumCollapseUser.funcitonClose()
          }} >
              <ExpandCircleDownIcon color="inherit" sx={{ display: 'block' }} />
          </IconButton>
        </Tooltip>
      </div>
    
      <div style={{float: 'right'}}>
        <ProjectAddDialog title='Добавить проект' handleAdd={handleAddProject} flagChangeUserDialog = {flagChangeUserDialog} setChangeDialog = {setChangeDialog}/>
        <Tooltip title="Settings">
          <IconButton style={{color: TableEventually? 'green': ''}}  onClick={() => setTableEventually(!TableEventually)} >
              <SettingsIcon color="inherit" sx={{ display: 'block' }} />
          </IconButton>
        </Tooltip>
      </div>
     
      </Toolbar>
    );
  };

export default EnhancedTableToolbar;