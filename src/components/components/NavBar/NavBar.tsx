import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';

import label from "../../../img/____1_1.webp"
import { GetSessionRole } from '../../../settings/settings';
import {useNavigate } from 'react-router-dom'
/*
const categories = [
  {
    id: 'Build',
    children: [
      {
        id: 'Authentication',
        icon: <PeopleIcon />,
        active: true,
      },
      { id: 'Database', icon: <DnsRoundedIcon /> },
      { id: 'Storage', icon: <PermMediaOutlinedIcon /> },
      { id: 'Hosting', icon: <PublicIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      {
        id: 'Machine learning',
        icon: <SettingsInputComponentIcon />,
      },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Analytics', icon: <SettingsIcon /> },
      { id: 'Performance', icon: <TimerIcon /> },
      { id: 'Test Lab', icon: <PhonelinkSetupIcon /> },
    ],
  },
];*/

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};


interface MenuItem{
  id: string
  icon: any,
  active?: boolean
  onClick: () => void
}


interface Menu{
  id: string
  children:MenuItem[]
}


interface DrawerPropsMy extends DrawerProps {
  title?: string; 
}

export default function NavBar(props: DrawerPropsMy) {
  const { ...other } = props;

  const navigate = useNavigate();

  //
 const createTabs = (title:string):any[]  => {
 
  let sessionRole =  GetSessionRole()

  const categories = [];
  let object = new Object as Menu;
  object.id = 'Панели'
  object.children = []


  const panelEnginer: MenuItem = {
    id: 'Панель инженера',
    icon: <PeopleIcon />,
    active: true,
    onClick: () => {
      navigate('/engineer')
    }
  };

  const panelAdmin: MenuItem = {
  id: 'Панель aдминистратора',
  icon: <SettingsInputComponentIcon />,
  active: false,
  onClick: () => {
    navigate('/admin')
  }
  };


  if(title === 'Панель инженера')
  {
    object.children.push(panelEnginer);

    panelEnginer.active = true;
    panelAdmin.active = false;
  }


  if(title === 'Панель администратора')
  {
    object.children.push(panelEnginer);
    panelEnginer.active = false;
    panelAdmin.active = true;
  }


  if(sessionRole === 'admin')
    object.children.push(panelAdmin);



    
  categories.push(object);
  return categories;
}
//



  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
            <img
              style={{ width: '100%', display: 'block'}}
              src={label}
              srcSet={label}
              alt='NTS'
              loading="lazy"
            />
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>{props.title}</ListItemText>
        </ListItem>
        {props.title ? createTabs(props.title).map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map((itemMenu: MenuItem,index: number) => (
              <ListItem disablePadding key={index}>
                <ListItemButton selected={itemMenu.active} sx={item} onClick={itemMenu.onClick}>
                  <ListItemIcon>{itemMenu.icon}</ListItemIcon>
                  <ListItemText>{itemMenu.id}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        )): null}
      </List>
    </Drawer>
  );
}