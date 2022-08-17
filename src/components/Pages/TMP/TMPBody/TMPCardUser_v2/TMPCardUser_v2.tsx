import React from 'react';
import UserInfo from '../TMPCardUser/TMPDataUser/MainInfo/UserInfo';
import UserPasport from '../TMPCardUser/TMPDataUser/MainInfo/UserPasport';
import UserPasportInternational from '../TMPCardUser/TMPDataUser/MainInfo/UserPasportInternational';
import UserYLM from '../TMPCardUser/TMPDataUser/MainInfo/UserYLM';
import './TMPCardUser_v2.css'
type Props = {
    className?: string,
}



 
const TMPCardUser_v2:  React.FC<Props> = () => {



    return(
        <div style={{}}>
            <div style={{fontSize:'28px',textAlign: 'center',paddingTop:'10px'}}>
                <p style={{margin: 0}}>КАРТОЧКА СОТРУДНИКА</p>
            </div>
            <div className='grid'>
               <div>
                   
               </div>
               <div style={{padding:'10px 10px',display: 'grid',gap:'10px'}}>
                    <div className='test'>
                        <UserInfo/>
                    </div>
                    <div className='test'>
                        <UserPasport/>
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