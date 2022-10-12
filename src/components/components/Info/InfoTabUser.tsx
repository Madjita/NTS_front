import React, { useState } from 'react';
import './Info.css'
import {Button} from '@mui/material';
import { IOldNewUser } from '../../IDataInterface/IDataInsideInterface';
import label from "../../../img/sSDlvDEX5z8.jpg";
import { format } from 'date-fns'




type Props = {
    handleClickChange:  () => void,
    userLogin?: IOldNewUser
}

const InfoTabUser:  React.FC<Props> = ({ handleClickChange, userLogin}) => {

    

    return(
        <React.Fragment>
            <div className='Mainpart'>
                <div className='MainpartWithoutPhoto'>
                    <div className='Columns'>
                        <div className='Lines'>
                            <div className='center'>
                                <p>Фамилия</p>
                            </div>
                            <div className='center'>
                                <p>{userLogin!.oldUser.secondName}</p>
                            </div>
                        </div>
                    </div>
                       

                    <div className='Columns'>
                        <div className='Lines' >
                            <div className='center'>
                                <p>Имя</p>
                            </div>
                            <div className='center'>
                                <p>{userLogin!.oldUser.firstName}</p>
                            </div>
                        </div>
                    </div>

                    <div className='Columns'>
                        <div className='Lines' >
                            <div className='center'>
                                <p>Отчество</p>
                            </div>
                            <div className='center'>
                                <p>{userLogin!.oldUser.middleName}</p>
                            </div>
                        </div>
                    </div>

                    <div className='Columns'>
                        <div className='Lines' >
                            <div className='center'>
                                <p>Дата рождения</p>
                            </div>
                            <div className='center'>
                                <p>{userLogin!.oldUser.profile.date.substring(0, 4) + "." + userLogin!.oldUser.profile.date.substring(5, 7) + "." + userLogin!.oldUser.profile.date.substring(8, 10)}</p>
                            </div>
                        </div>
                    </div>

                    <div className='Columns'>
                        <div className='Lines'>
                            <div className='center'>
                                <p>Пол</p>
                            </div>
                            <div className='center'>
                                <p>{ userLogin!.oldUser.profile.sex  ? "Мужской" : "Женский"} </p>
                            </div>
                        </div>
                    </div>

                    <div className='Columns'>
                        <div className='Lines'>
                            <div className='center'>
                                <p>СНИЛС</p>
                            </div>                           
                                <div className='center'>
                                    <div>
                                        <p>{userLogin!.oldUser.profile.snils}</p>
                                    </div>
                                </div>                           
                        </div>
                    </div>

                    <div className='Columns'>
                        <div className='Lines' >
                            <div className='center'>
                                <p>ИНН</p>
                            </div>
                            <div>
                                <div className='center'>
                                    <div>
                                        <p>{userLogin!.oldUser.profile.inn}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='Columns'>
                        <div className='Lines'>
                            <div className='center'>
                                <p>Телефон</p>
                            </div>
                            <div className='center'>
                                <p>{userLogin!.oldUser.profile.phone}</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='Photo'>
                    <img className='Photo'
                    src={userLogin!.oldUser.profile.photoByte != null || undefined ? `data:image/png;base64,${userLogin!.oldUser.profile.photoByte}` : label}
                    alt='NTS'
                    loading="lazy"/>
                </div>
        </div>
                <div className='Buttons'>
                <div className='handleClickChange'><Button size="small" variant="outlined"  onClick = {handleClickChange}> {"Редактировать"}</Button></div>      
                </div>
        </React.Fragment>

    )
} 

export default InfoTabUser;