import React, { useEffect } from 'react';
import { useActions } from '../../../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../../../redux/hooks/useTypedSelector';
import { findUser } from '../../../../../redux/store/action-creators/userLoginAction';
import { GetSessionEmail, GetSesstionToken } from '../../../../../settings/settings';
import { IUser } from '../../../../IDataInterface/IDataInterface';
import UserInfo from '../TMPCardUser/TMPDataUser/MainInfo/UserInfo';
import UserPasport from '../TMPCardUser/TMPDataUser/MainInfo/UserPasport';
import UserPasportInternational from '../TMPCardUser/TMPDataUser/MainInfo/UserPasportInternational';
import UserYLM from '../TMPCardUser/TMPDataUser/MainInfo/UserYLM';
import TMPCardUser_tabs_v3 from './TMPCardUser_tabs_v3';
import './TMPCardUser_v2.css'
type Props = {
    className?: string,
}
 
const TMPCardUser_v2:  React.FC<Props> = () => {

    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    const {findUser,fetchUsers,fetchProject,addProject,removeProject,editProject,addUserHoursProject} = useActions()
    
    useEffect(()=>{

        let sessionToken = GetSesstionToken()
        let sessionEmail = GetSessionEmail()
        if(sessionToken != null)
        {
            findUser(sessionToken,sessionEmail);
        }

    },[loadingLogin])

    console.log("userLogin = ", userLogin)
    return(
        <div style={{}}>
            <div style={{fontSize:'28px',textAlign: 'center',paddingTop:'10px'}}>
                <p style={{margin: 0}}>КАРТОЧКА СОТРУДНИКА</p>
            </div>
            <div className='grid'>
               <div style={{padding:'10px 10px'}}>
                   <TMPCardUser_tabs_v3/>
               </div>
               <div style={{padding:'10px 10px',display: 'grid',gap:'10px'}}>
                    <div className='test'>
                        <UserInfo userLogin={userLogin}/>
                    </div>
                    <div className='test'>
                        <UserPasport />
                    </div>
                    <div className='test'>
                        <UserPasportInternational/>
                    </div>
                    <div className='test'>
                        <UserYLM/>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default TMPCardUser_v2;