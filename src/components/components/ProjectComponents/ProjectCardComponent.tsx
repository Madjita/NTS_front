import React, { useEffect,useRef } from 'react';
import { IUserProject, IWeek } from '../../IDataInterface/IDataInterface';



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


import Chart from 'react-apexcharts'
import UsersListComponent from '../UsersComponents/UsersListComponent';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../redux/hooks/userActions';
import HoursAddDialog from '../HoursComponents/HoursAddDialog';
import { GetSesstionToken } from '../../../settings/settings';

type Props = {
    className?: string,
    child?: any
    projectProps?: IUserProject
    title?: string
}
  

 
const ProjectCardComponent:  React.FC<Props> = ({projectProps}) => {


  //const {projects, error, loading} = useTypedSelector(state => state.project)
  const {} = useActions()


  const handleAddHours = async (newObject: IWeek) => {
    let sessionToken =  GetSesstionToken()
    if(newObject != null)
    {
       // let responce =   addCompany(sessionToken,newCompany);
    }   
  }


    useEffect(() => {
        
    }, []);

    let data1  = {
        options: {
          chart: {
            id: 'apexchart-example',
            stacked: true,
          },
          xaxis: {
            categories: ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье']
          },
          yaxis:[
            {
              //max: 24
            }
          ]
          
        },
        series: [{
          name: 'series-1',
          data: [8, 16, 8, 8, 8, 0, 0],
        }]
      }

      let data2  = {
        options: {
          chart: {
            id: 'apexchart-example',
            stacked: true,
          },
          xaxis: {
            categories: [1,2,3,4,5]
          },
          yaxis:[
            {
              //max: 168
            }
          ]
          
          
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50,60]
        }]
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
                <p>{projectProps?.project.title}</p>
            </Grid>
            <Grid item xs>
            </Grid>
            <Grid item>
              <HoursAddDialog title='Добавить почасовку' handleAdd={handleAddHours} selectProject={projectProps?.project}/>
            </Grid>
        </Grid>
        </Toolbar>
        </AppBar>

        <Grid container spacing={2} alignItems="stretch">
            <Grid xs={4} item>
                <UsersListComponent title='Список юзеров' projectProps={projectProps}/>
            </Grid>
            <Grid xs={4} item>
                <Chart options={data1.options} series={data1.series} type="bar"  height={320} />
            </Grid>
            <Grid item xs={4}>
                <Chart options={data2.options} series={data2.series} type="bar"    height={320} />
            </Grid> 
        </Grid>
        
        
       
       
    </React.Fragment>
    )
}

export default ProjectCardComponent;


