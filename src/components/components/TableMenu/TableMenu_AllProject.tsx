import React from 'react';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import KeyboardTabIcon from '@mui/icons-material/KeyboardTab';

import { useNavigate } from 'react-router-dom';
import { IProject } from '../../IDataInterface/IDataInterface';
import ProjectUserDialog from '../Widget/ProjectUserComponents/ProjectUserDialog';
import AddIcon from '@mui/icons-material/Add';
import { Delete } from '@mui/icons-material';

type Props = {
    className?: string,
    handleClick?: any,
    handleClose?: any,
    anchorEl: any,
    mouseEvent: React.MouseEvent<HTMLElement> | null,

    row: IProject
}



 
const TableMenu_AllProject:  React.FC<Props> = ({handleClick,handleClose,anchorEl,mouseEvent,row}) => {

    const open = Boolean(anchorEl);
    
    return(
        <React.Fragment>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          //onClick={handleClose}
          PaperProps={{
            elevation: 0,
            style:{
              transform: 'translateX('+ (mouseEvent ? mouseEvent!.clientX-25 : 0)+'px)',
            },
            sx: {
              
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'left', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
        >
          <MenuItem onClick={handleClick} data-my-value={0}>
            <ListItemIcon>
              <KeyboardTabIcon fontSize="small" />
            </ListItemIcon>
            Открыть в новой вкладке
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClick} data-my-value={1}>
            <ListItemIcon>
              <AddIcon fontSize="small"/>
            </ListItemIcon>
            Добавить инженера
          </MenuItem>
          <MenuItem onClick={handleClick} data-my-value={2}>
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Редактировать
          </MenuItem>
          <MenuItem onClick={handleClick} data-my-value={3}>
            <ListItemIcon>
              <Delete fontSize="small" />
            </ListItemIcon>
            Удалить
          </MenuItem>
        </Menu>
      </React.Fragment>
    )
}

export default TableMenu_AllProject;