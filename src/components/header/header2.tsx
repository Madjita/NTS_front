import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import AccountMenu from './headerAccountMenu/headerAccountMenu';

import label from "../../img/____1_1.webp"

const lightColor = 'rgba(255, 255, 255, 0.7)';

interface HeaderProps {
  onDrawerToggle: () => void;
  title?: string;
  value?: number;
  handleChange?: (event: React.SyntheticEvent, newValue: number) => void
}

export default function Header2(props: HeaderProps) {
  const { onDrawerToggle,title,value,handleChange } = props;


 //
 const createTabs = (title:string):string[]  => {
  let list = new Array<string>
  if(title === 'Панель инженера')
  {
    list.push('Актуальные проекты');
    list.push('Все проекты');
    list.push('Почасовки');
    list.push('Информация');
    
  }

  return list;
}
//

let tabs = createTabs(title ? title:'');

  return (
    <React.Fragment>
      <AppBar color="primary" position="sticky" elevation={0} sx={{justifyContent: 'center'}} >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid>
            <img
              style={{ width: '100px', display: 'block'}}
              src={label}
              srcSet={label}
              alt='NTS'
              loading="lazy"
            />
            </Grid>
            <Grid sx={{ display: { sm: 'sm', xs: 'block', marginLeft:'10px' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <AccountMenu/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        color="primary"
        position="static"
        elevation={0}
        sx={{ zIndex: 0 }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                {title}
              </Typography>
            </Grid>
            <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={value} onChange={handleChange} textColor="inherit">

          {
            tabs.map((item,index)=>{
              return <Tab key={index} label={item} />
            })
          }
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}