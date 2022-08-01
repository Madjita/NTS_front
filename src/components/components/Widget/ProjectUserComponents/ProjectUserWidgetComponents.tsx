import React, { useEffect, useState } from 'react';
import SettingsIcon from '@mui/icons-material/Settings';


import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import {useActions} from '../../../../redux/hooks/userActions';
import { GetSesstionToken } from '../../../../settings/settings';
import PacmanLoader from "react-spinners/PacmanLoader";
import {override,colorWidget} from '../../../Pages/Loading/loadingData'

import Widget from '../../Widget/Widget';
import ProjectUserComponents from './ProjectUserComponents';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonMy from '../../ToggleButton/ToggleButtonMy';
import ProjectUserBodyComponents from './ProjectUserBodyComponents';
import HeaderForCompany from '../DifferentHeaders/HeaderForComany';




type Props = {
    className?: string,
    child?: any
}
  

 
const ProjectUserWidgetComponents:  React.FC<Props> = (props) => {

    const [userTableEventually, setUsersTableEventually] = useState<boolean>(false);


    const {projects, error, loading} = useTypedSelector(state => state.project)
    const {fetchProject,removeUser} = useActions()


    const [TableEventually, setTableEventually] = useState<boolean>(false);
    const [dialogAddIsOpen, setDialogAddIsOpen] = useState<boolean>();


    const handleRemoveUser = async (index: number) =>
    {    
        let sessionToken =  GetSesstionToken()
         let project = projects.find((company,userIndex) => userIndex === index)
         if(project!= null)
         {
            //removeUser(sessionToken,project?.email)
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
       
        <Widget
        className='users'
        header={
            <HeaderForCompany 
            title={"Список проектов c юзерами"}
            dialogAddCompanyIsOpen={dialogAddIsOpen} 
            TableEventually={TableEventually}
            setDialogAddCompanyIsOpen={setDialogAddIsOpen}
            setCompanyTableEventually={setTableEventually}/>
        }

        children={
            <React.Fragment>


                    <ProjectUserBodyComponents
                        projects = {projects}
                        handleRemoveUser={handleRemoveUser}
                        userTableEventually={userTableEventually}
                        setUsersTableEventually={setUsersTableEventually}
                    />
                   
            </React.Fragment>
        }
        />
    )
}

export default ProjectUserWidgetComponents;


