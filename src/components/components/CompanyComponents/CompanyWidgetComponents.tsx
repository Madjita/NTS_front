import React, { useEffect, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';


import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import {useActions} from '../../../redux/hooks/userActions';
import { GetSesstionToken } from '../../../settings/settings';
import PacmanLoader from "react-spinners/PacmanLoader";
import {override,colorWidget} from '../../Pages/Loading/loadingData'

import Widget from '../Widget/Widget';
import CompanyComponentsTable from './CompanyComponentsTable';
import Dialog from '../../components/Dialog/Dialog';
import HeaderForCompany from '../Widget/DifferentHeaders/HeaderForComany';




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
import CompanyAddDialog from './CompanyAddDialog';



type Props = {
    className?: string,
    child?: any
}
  

 
const CompanyWidgetComponents:  React.FC<Props> = (props) => {

    const [TableEventually, setTableEventually] = useState<boolean>(false);

    const [dialogAddCompanyIsOpen, setDialogAddCompanyIsOpen] = useState<boolean>();
   


    const [reload,setReload] = useState(false);
   
  
    const [alignment, setAlignment] = React.useState('left');
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };


    const {companies, error, loading} = useTypedSelector(state => state.company)
    const {fetchCompanies,removeCompany, addCompany  } = useActions()


    const handleAddCompany = async (newCompany: string) => {
        setDialogAddCompanyIsOpen(false)
        let sessionToken =  GetSesstionToken()
        if(newCompany != "")
        {
            let responce =   addCompany(sessionToken,newCompany);
        }   
      }


    const handleRemove = async (index: number) =>
    {    
         let sessionToken =  GetSesstionToken()
         let company = companies.find((company,userIndex) => userIndex === index)
         if(company!= null)
         {
            removeCompany(sessionToken,company?.name)
         }
    }


    useEffect(() => {
       
        let sessionToken =  GetSesstionToken()
        if(sessionToken != null)
        {
            fetchCompanies(sessionToken)
        }

    }, [reload])


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
                <CompanyAddDialog title='Добавить компанию' handleAddCompany={handleAddCompany}/>
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
           
            <TableMaterialUICollapsibleTable_Company data={companies} TableEventually={TableEventually} handleRemove={handleRemove}/>
       
        }
         </React.Fragment>

    </React.Fragment>
        
    )
}

export default CompanyWidgetComponents;


/*


 <Widget
        className='users'
        header={
            <HeaderForCompany 
                    title={"Список компаний"}
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
                          <CompanyComponentsTable
                        
                        companies = {companies}
                        handleRemoveCompany={handleRemoveCompany}
                        TableEventually={TableEventually}
                        setTableEventually={setTableEventually}
                        />
                        <Dialog isOpen={dialogAddCompanyIsOpen} onClose={() => { setNewCompany(""); setDialogAddCompanyIsOpen(false) } }>
                            <div>
                                <p>Добавить компанию</p>
                                <input type='text' onChange={(e) => setNewCompany(e.target.value as string)}></input>
                                <button onClick={handleAddCompany}>Добавить</button>
                            </div>
                        </Dialog>
                    </React.Fragment>
                    }
                   
                   
            </React.Fragment>
        }
        />
*/