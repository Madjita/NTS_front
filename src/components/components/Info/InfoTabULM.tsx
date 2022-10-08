import React, { useState } from 'react';
import './Info.css'
import { Button } from '@mui/material';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';

type Props = {
    handleClickChange:  () => void,
    userLogin?: IOldNewUser
}

const InfoTabULM:  React.FC<Props> = ({ handleClickChange, userLogin}) => {

    return(
        <React.Fragment>
            <div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>ULM номер</p>
                        </div>
                        <div className='center'>
                                <div style={{display: 'flex',width: '694px'}}>
                                    <p>{userLogin!.newUser.profile.ulmNumber}</p>
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
                                    <p>{userLogin!.newUser.profile.ulmDateTaked.substring(0, 4) + "." + userLogin!.newUser.profile.ulmDateTaked.substring(5, 7) + "." + userLogin!.newUser.profile.ulmDateTaked.substring(8, 10)}</p>            
                                    <p>{"-" + userLogin!.newUser.profile.ulmDateBack.substring(0, 4) + "." + userLogin!.newUser.profile.ulmDateBack.substring(5, 7) + "." + userLogin!.newUser.profile.ulmDateBack.substring(8, 10)}</p> 
                                </div>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Кем выдан</p>
                        </div>
                            <div style={{width: '694px'}}>
                                <p>{userLogin!.newUser.profile.ulmTaked}</p>
                            </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Место рождения</p>
                        </div>
                        <div style={{width: '694px'}} >
                            <p>{userLogin!.newUser.profile.ulmPlaceBorned}</p>
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
export default InfoTabULM;