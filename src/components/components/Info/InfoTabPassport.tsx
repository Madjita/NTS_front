import React from 'react';
import './Info.css'
import { Button } from '@mui/material';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';

type Props = {
    handleClickChange:  () => void, 
    userLogin?: IOldNewUser
}

const InfoTabPassport:  React.FC<Props> = ({ handleClickChange, userLogin}) => {

    return(
        <React.Fragment>
            <div style={{padding: '13px'}}>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Серия номер</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex',width: '694px'}}>
                                    <p>{userLogin!.oldUser.profile.prfSeries} {userLogin!.oldUser.profile.prfNumber}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Дата выдачи-Дата окончания</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex',width: '694px'}}>
                                    <p>{userLogin!.oldUser.profile.prfDateTaked.substring(0, 4) + "." + userLogin!.oldUser.profile.prfDateTaked.substring(5, 7) + "." + userLogin!.oldUser.profile.prfDateTaked.substring(8, 10)}</p>            
                                    <p>{"-" + userLogin!.oldUser.profile.prfDateBack.substring(0, 4) + "." + userLogin!.oldUser.profile.prfDateBack.substring(5, 7) + "." + userLogin!.oldUser.profile.prfDateBack.substring(8, 10)}</p> 
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Код подразделения</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex',width: '694px'}}>
                                    <p></p>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Кем выдан</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex',width: '694px'}}>
                                    <p>{userLogin!.oldUser.profile.prfTaked}</p>
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Место рождения</p>
                        </div>
                        <div style={{width: '694px'}}>
                            <p>{userLogin!.oldUser.profile.prfPlaceBorned}</p>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Место прописки</p>
                        </div>
                        <div style={{width: '694px'}} >
                            <p>{userLogin!.oldUser.profile.prfPlaceRegistration}</p>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Место проживания</p>
                        </div>
                        <div style={{width: '694px'}} >
                            <p>{userLogin!.oldUser.profile.prfPlaceLived}</p>
                        </div>
                    </div>
                </div>                
        </div>
        <div className='Buttons'>
            <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange} > {"Редактировать"}</Button></div>
        </div>
        </React.Fragment>
    )
} 

export default InfoTabPassport;