import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import SettingsIcon from '@mui/icons-material/Settings';

type Props = {
    className?: string,
    child?: any
    data?: any
}


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
const Content:  React.FC<Props> = ({child,data}) =>  {
 

  return (
    <Paper sx={{ maxWidth: 'auto', margin: 'auto', overflow: 'hidden' }}>
      {child}
    </Paper>
  );
}

export default Content;