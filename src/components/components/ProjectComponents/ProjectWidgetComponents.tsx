import React, { useEffect, useState } from 'react';
import { PacmanLoader } from 'react-spinners';
import { useActions } from '../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { GetSesstionToken } from '../../../settings/settings';
import HeaderForCompany from '../Widget/DifferentHeaders/HeaderForComany';
import Widget from '../Widget/Widget';
import {override,colorWidget} from '../../Pages/Loading/loadingData'
import Dialog from '../Dialog/Dialog';
import ProjectComponentsTable from './ProjectComponentsTable';
import { IProject, IUser } from '../../IDataInterface/IDataInterface';


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
import TableMaterialUICollapsibleTable_Company from '../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_Company';
import SettingsIcon from '@mui/icons-material/Settings';
import TableMaterialUICollapsibleTable_Project from '../TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_Project';



type Props = {
    className?: string,
    child?: any
}
  

 
const ProjectWidgetComponents:  React.FC<Props> = (props) => {

    const {projects, error, loading} = useTypedSelector(state => state.project)
    const {fetchProject,removeProject, addProject  } = useActions()

    const [reload,setReload] = useState(false);

    useEffect(() => {
       
        let sessionToken =  GetSesstionToken()
        if(sessionToken != null)
        {
            fetchProject(sessionToken)
        }

    }, [reload])

    const [TableEventually, setTableEventually] = useState<boolean>(false);

    const [dialogAddCompanyIsOpen, setDialogAddCompanyIsOpen] = useState<boolean>();
    const [newProject,setNewProject] = useState<IProject>({enginerCreater: new Object as IUser,code:'',title: '',indexAdd: '',actualHour: '',maxHour: 0,dateStart:'',dateStop:'' ,status:'',description: '',users: []});
   
  
    const [alignment, setAlignment] = React.useState('left');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };



    const handleAdd = async () => {
        setDialogAddCompanyIsOpen(false)
        let sessionToken =  GetSesstionToken()


        if(newProject.title != "")
        {
            addProject(sessionToken,newProject);
        }   
      }


    const handleRemove = async (index: number) =>
    {    
         let sessionToken =  GetSesstionToken()
         let project = projects.find((project,userIndex) => userIndex === index)
         if(project != null)
         {
            removeProject(sessionToken,project?.title)
         }
    }


    useEffect(() => {
       
        let sessionToken =  GetSesstionToken()
        if(sessionToken != null)
        {
            fetchProject(sessionToken)
        }

    }, [])


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
               
                <Tooltip title="Reload">
                    <IconButton onClick={() => setReload(!reload)} >
                        <RefreshIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Settings">
                    <IconButton style={{color: TableEventually? 'green': ''}}  onClick={() => setTableEventually(!TableEventually)} >
                        <SettingsIcon color="inherit" sx={{ display: 'block' }} />
                    </IconButton>
                </Tooltip>
                </Grid>
            </Grid>
            </Toolbar>
            </AppBar>

            <React.Fragment>
        {loading || error ? 
            <Box sx={{height:'50px'}}>
                {componentLoading}
            </Box>
            
        :
           
            <TableMaterialUICollapsibleTable_Project data={projects} TableEventually={TableEventually} handleRemove={handleRemove} reload={reload} setReload={setReload}/>
       
        }
         </React.Fragment>

    </React.Fragment>
    )
}

export default ProjectWidgetComponents;




/*



        <Widget
        className='users'
        header={
            <HeaderForCompany 
                    title={"Список проектов"}
                    dialogAddCompanyIsOpen={dialogAddCompanyIsOpen} 
                    TableEventually={TableEventually}
                    setDialogAddCompanyIsOpen={setDialogAddCompanyIsOpen}
                    setCompanyTableEventually={setTableEventually}/>
        }

        children={
            <React.Fragment>


                    {loading || error ? 
                        componentLoading
                    :

                     <React.Fragment>
                          <ProjectComponentsTable
                        
                        projects = {projects}
                        handleRemove={handleRemoveCompany}
                        TableEventually={TableEventually}
                        setTableEventually={setTableEventually}
                        />
                        <Dialog isOpen={dialogAddCompanyIsOpen} onClose={() => { setNewProject({title: '',actualHours: '',maxHour: 0,dateStart:'',dateStop:'',status:'' }); setDialogAddCompanyIsOpen(false) } }>
                            <div>
                                
                                <div>
                                    <p>Имя проекта</p>
                                    <input type='text' onChange={e => setNewProject((prevState) => ({
                                                ...prevState,
                                                title: e.target.value as any
                                                } as IProject))}>
                                    </input>
                                </div>

                                <div>
                                    <p>Время начала</p>
                                    <input type='text' onChange={e => setNewProject((prevState) => ({
                                                ...prevState,
                                                dateStart: e.target.value as any
                                                } as IProject))}>
                                    </input>
                                </div>

                                <div>
                                    <p>Время завершения</p>
                                    <input type='text' onChange={e => setNewProject((prevState) => ({
                                                ...prevState,
                                                dataStop: e.target.value as any
                                                } as IProject))}>
                                    </input>
                                </div>

                                <div>
                                    <p>Количество часов</p>
                                    <input type='text' onChange={e => setNewProject((prevState) => ({
                                                ...prevState,
                                                maxHours: e.target.value as any
                                                } as IProject))}>
                                    </input>
                                </div>
                            </div>
                            <button onClick={handleAddCompany}>Добавить</button>
                        </Dialog>
                    </React.Fragment>
                    }
                   
                   
            </React.Fragment>
        }
        />

*/