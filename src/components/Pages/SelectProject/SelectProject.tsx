import React, { useEffect } from 'react';
import { useActions } from '../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { GetSessionEmail, GetSesstionToken } from '../../../settings/settings';
import { IProject } from '../../IDataInterface/IDataInterface';

type Props = {
    className?: string,
}



 
const SelectProject:  React.FC<Props> = ({}) => {

    const [project, setProject] = React.useState<IProject>()

    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    const {projects,loading} = useTypedSelector(state => state.project)
    const {findUser,fetchUsers,fetchProject,findProject} = useActions()

    var getCode = window.location.search.split('Code=')[1]

    let sessionToken =  GetSesstionToken()
    let sessionEmail =  GetSessionEmail()

    useEffect(()=>{
        findUser(sessionToken,sessionEmail)
    },[])
    useEffect(()=>{
        if(sessionToken != null && sessionEmail != null && userLogin === null && getCode != null)
        {
            findProject(sessionToken,getCode)
        }
    },[userLogin])

    useEffect(()=>{

        if(projects.length > 0)
        {
            let pr = projects[0];
            setProject(pr);
        }
      
    },[projects,loading])

    return(
       <div>
            <p>{userLogin?.email}</p>
            <p>{getCode}</p>
            <p>{project?.code}</p>
            <p>{project?.title}</p>
       </div>
    )
}

export default SelectProject;