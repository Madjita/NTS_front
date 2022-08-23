import { height } from '@mui/system';
import React from 'react';
import TMPCardUser from './TMPCardUser/TMPCardUser';
import TMPCardUser_v2 from './TMPCardUser_v2/TMPCardUser_v2';
import './TMPBody.css'

import { GetSessionEmail, GetSesstionToken } from '../../../../settings/settings';
import TMPLeftPanel from './TMPLeftPanel/TMPLeftPanel';
import { useTypedSelector } from '../../../../redux/hooks/useTypedSelector';
import { useActions } from '../../../../redux/hooks/userActions';

type Props = {
    className?: string,
}



 
const TMPBody:  React.FC<Props> = () => {

    const[select,setSelect] = React.useState(0);

    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    const {findUser,fetchUsers,fetchProject,addProject,removeProject,editProject,addUserHoursProject} = useActions()

    React.useEffect(()=>{

        let sessionToken = GetSesstionToken()
        let sessionEmail = GetSessionEmail()
        if(sessionToken != null)
        {
            findUser(sessionToken,sessionEmail);
        }

    },[loadingLogin])

    console.log("TMPBody  = ", userLogin)

    return(
        <div style={{background: '#d0d1d4', height:'calc(100vh - 60px)',display: 'grid',gridTemplateColumns: '60px 1fr'}}>
            <TMPLeftPanel/>
            <TMPCardUser_v2/>
        </div>
    )
}

export default TMPBody;