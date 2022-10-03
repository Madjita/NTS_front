import React from 'react';
import TMPBody from './TMPBody/TMPBody';
import TMPHeader from './TMPHeader/TMPHeader';

import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../redux/hooks/userActions';
import { GetSessionEmail, GetSesstionToken } from '../../../settings/settings';


type Props = {
    className?: string,
}



 
const TMPHome:  React.FC<Props> = () => {


    const[select,setSelect] = React.useState(0);

    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    const {findUser,fetchUsers,fetchProject,addProject,removeProject,editProject,addUserHoursProject} = useActions()

    React.useEffect(()=>{

        let sessionToken = GetSesstionToken()
        let sessionEmail = GetSessionEmail()
        if(sessionToken != null)
        {
            findUser(sessionToken,sessionEmail);
            fetchUsers(sessionToken)
            fetchProject(sessionToken)
        }

    },[loadingLogin])

    console.log("TMPBody  = ", userLogin)

    return(
        <div>
            <TMPHeader/>
            <TMPBody/>
        </div>
    )
}

export default TMPHome;