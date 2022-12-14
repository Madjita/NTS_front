import React, { useEffect } from 'react';
import { useActions } from '../../../../../redux/hooks/userActions';
import { useTypedSelector } from '../../../../../redux/hooks/useTypedSelector';
import { findUser } from '../../../../../redux/store/action-creators/userLoginAction';
import { GetSessionEmail, GetSesstionToken } from '../../../../../settings/settings';
import MultiplayHours from '../../../../components/HoursComponents/MultiplayHours/MultiplayHours';
import TableMaterialUICollapsibleTable_AllProject from '../../../../components/TableMaterialUICollapsibleTable/TableMaterialUICollapsibleTable_AllProject';
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
    const {fetchProject,addProject,removeProject,editProject,addUserHoursProject} = useActions()

    return(
        <div style={{}}>
            <div style={{fontSize:'28px',textAlign: 'center',paddingTop:'10px'}}>
                <p style={{margin: 0}}>КАРТОЧКА СОТРУДНИКА</p>
            </div>
            <div className='grid'>
                <div style={{padding:'10px 10px',display: 'grid',gap:'10px',}}>
                    {/*
                    <div className='test'>
                       
                    </div>
                    <div className='test'>
                       
                    </div>
                    <div className='test'>
                  
                    </div>
                    <div className='test'>
                        
                    </div>
                     */}
                    <div className='test' style={{overflow: 'auto', maxWidth:'100%'}}>
                        <MultiplayHours outSideCountView={3} color={'white'}/>    
                    </div>
                     
               </div>
               <div style={{padding:'10px 10px'}}>
                   <TMPCardUser_tabs_v3/>
               </div>
            </div>

            <div className='test' style={{height: 'calc(100vh - 490px)',
                                            margin: '0px 10px',overflow: 'auto'}}>
                <TableMaterialUICollapsibleTable_AllProject 
                            addProject={addProject} 
                            removeProject={removeProject} 
                            fetchProject={fetchProject} 
                            editProject={editProject}
                            addUserHoursProject={addUserHoursProject} 
                            /*outSideCountView={7}
                            color={'white'}*/
                />
            </div>
         
        </div>
    )
}

export default TMPCardUser_v2;

/*

 <div style={{padding:'10px 10px',display: 'grid',gap:'10px'}}>
                    <div className='test'>
                        <UserInfo/>
                    </div>
                    <div className='test'>
                        <UserPasport  userLogin={userLogin}/>
                    </div>
                    <div className='test'>
                        <UserPasportInternational/>
                    </div>
                    <div className='test'>
                        <UserYLM/>
                    </div>
               </div>

*/