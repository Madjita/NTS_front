import React, { useEffect } from 'react';
import './MainInfo.css'

import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { TextField } from '@mui/material';
import { IUser } from '../../../../../../IDataInterface/IDataInterface';
import { IOldNewUser } from '../../../../../../IDataInterface/IDataInsideInterface';

type Props = {
    className?: string,
    userLogin?: IOldNewUser
    handlerEdit? : any
    edit? : boolean
}

export const disabledStyle = {
    color: 'white',
    background: 'transparent',
    border: '0px'
};



const styleMenuItem = {
        padding: '5px 18px',
        cursor: 'pointer',
        fontSize: '12.5px',
        backgroundAttachment: 'scroll',
        backgroundClip: 'border-box',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backgroundImage: 'url("https://st4-15.vk.com/images/icons/edit_photo_icons_white_2x.png?2")',
        backgroundOrigin: 'padding-box',
        backgroundPositionX: '3%',
        backgroundPositionY: '4px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '20px 65px',
}

const styleMenuItem2 = {
    padding: '5px 20px',
    cursor: 'pointer',
    fontSize: '12.5px',
    backgroundAttachment: 'scroll',
    backgroundClip: 'border-box',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    backgroundImage: 'url("https://st4-15.vk.com/images/icons/edit_photo_icons_white_2x.png?2")',
    backgroundOrigin: 'padding-box',
    backgroundPositionX: '3%',
    backgroundPositionY: '-20px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 65px',
}

const UserInfo:  React.FC<Props> = ({userLogin,handlerEdit,edit}) => {


return(
        <div style={{width:'100%',height:'50%',display:'flex'}}>
                <div style={{width:'70%',height:'100%',margin: '13px',marginRight: '0px'}}>
                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Фамилия</p>
                            </div>
                            <div className='center'>
                                {/*
                                    edit ?
                                    <input className='origin' type="text" value={ userLogin!.newUser ? userLogin!.newUser.secondName : "Фамилия"} 
                                    onChange={e=>{
                                        userLogin!.newUser.secondName = e.target.value;
                                        handlerEdit({...userLogin})
                                    }}/>
                                    : 
                                    <p>{userLogin!.newUser ? userLogin!.newUser.secondName : "-"}</p>
                                    */
                                }

                                <input className='origin' type="text" value={ userLogin!.newUser ? userLogin!.newUser.secondName : "Фамилия"} 
                                    onChange={e=>{
                                        userLogin!.newUser.secondName = e.target.value;
                                        handlerEdit({...userLogin})
                                    }}
                                    
                                    disabled={!edit}
                                    style={edit ? {}:disabledStyle}
                                />
                            </div>
                        </div>
                    </div>
                       

                    <div style={{width:'100%', height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Имя</p>
                            </div>
                            <div className='center'>
                                {/*
                                     edit ?
                                     <input className='origin' type="text" value={ userLogin!.newUser ? userLogin!.newUser.firstName : "Имя"}
                                     onChange={e=>{
                                         userLogin!.newUser.firstName = e.target.value;
                                         handlerEdit({...userLogin})
                                     }}/>
                                     :
                                     <p>{userLogin!.newUser ? userLogin!.newUser.firstName : "-"}</p>
                                     */
                                }

                                <input className='origin' type="text" value={ userLogin!.newUser ? userLogin!.newUser.firstName : "Имя"}
                                     onChange={e=>{
                                         userLogin!.newUser.firstName = e.target.value;
                                         handlerEdit({...userLogin})
                                     }}
                                     disabled={!edit}
                                     style={edit ? {}:disabledStyle}
                                />
                               
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Отчество</p>
                            </div>
                            <div className='center'>
                                {/*
                                    edit ?
                                    <input className='origin' type="text" value={ userLogin!.newUser ? userLogin!.newUser.middleName : "Отчество"}
                                    onChange={e=>{
                                        userLogin!.newUser.middleName = e.target.value;
                                        handlerEdit({...userLogin})
                                    }}/>
                                    :
                                    <p>{userLogin!.newUser ? userLogin!.newUser.middleName : "-"}</p>
                                    */
                                }
                                <input className='origin' type="text" value={ userLogin!.newUser ? userLogin!.newUser.middleName : "Отчество"}
                                    onChange={e=>{
                                        userLogin!.newUser.middleName = e.target.value;
                                        handlerEdit({...userLogin})
                                     }}
                                     disabled={!edit}
                                     style={edit ? {}:disabledStyle}
                                />
                               
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Дата рождения</p>
                            </div>
                            <div className='center'>
                                {/*
                                    edit ?
                                    <input className='origin' type="text" value={ userLogin?.newUser?.profile?.date ? new Date(userLogin!.newUser.profile.date).toLocaleDateString("en-US") : "Дата рождения"}/>
                                    :
                                    <p>{userLogin!.newUser ? new Date(userLogin!.newUser.profile.date).toLocaleDateString("en-US") : "-"}</p>
                                */
                                }
                                 <input className='origin' type="text" 
                                 value={ userLogin?.newUser?.profile?.date ? new Date(userLogin!.newUser.profile.date).toLocaleDateString("en-US") : "Дата рождения"}
                                 disabled={!edit}
                                 style={edit ? {}:disabledStyle}
                                 />
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Пол</p>
                            </div>
                            <div className='center'>
                               <p> 
                                    <input name="pol" type="radio" checked={ userLogin ? !(userLogin.newUser?.profile.sex) : false}
                                     onChange={e=>{
                                        if(userLogin != undefined && edit === true)
                                        {
                                            if(userLogin.newUser != undefined)
                                            {
                                                if(userLogin.newUser.profile != undefined)
                                                {
                                                    userLogin.newUser.profile.sex = !userLogin.newUser.profile.sex;
                                                    handlerEdit({...userLogin})
                                                }
                                            }
                                        }
                                    }}
                                    disabled={!edit}
                                    />
                                    Мужчина
                                </p>
                               <p style={{  marginLeft: '16px'}}> 
                                    <input name="pol" type="radio" checked={userLogin ? (userLogin.newUser?.profile.sex) : false}
                                    onChange={e=>{
                                        if(userLogin != undefined && edit === true )
                                        {
                                            if(userLogin.newUser != undefined)
                                            {
                                                if(userLogin.newUser.profile != undefined)
                                                {
                                                    userLogin.newUser.profile.sex = !userLogin.newUser.profile.sex;
                                                    handlerEdit({...userLogin})
                                                }
                                            }
                                        }
                                    }}
                                    disabled={!edit}
                                    />
                                    Женщина
                               </p>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>СНИЛС</p>
                            </div>
                            <div>
                                <div className='center'>
                                    <div style={{paddingRight: '20px'}}>
                                        <FileUploadIcon/>
                                        <DownloadIcon/>
                                        <PreviewIcon/>
                                    </div>
                                    <div>
                                       {/*
                                        edit ? 
                                        <input className='origin' type="text" value={userLogin ? userLogin.newUser?.profile.snils : "XXX-XXX-XXX-XX"} 
                                        onChange={e=>{
                                        userLogin!.newUser!.profile!.snils = e.target.value;
                                        handlerEdit({...userLogin})
                                        }}/>
                                        :
                                        <p>{userLogin!.newUser ? userLogin!.newUser.profile.snils: "-"}</p>
                                        */
                                       }
                                        <input className='origin' type="text" value={userLogin ? userLogin.newUser?.profile.snils : "XXX-XXX-XXX-XX"} 
                                        onChange={e=>{
                                            userLogin!.newUser!.profile!.snils = e.target.value;
                                            handlerEdit({...userLogin})
                                            }}
                                        disabled={!edit}
                                        style={edit ? {}:disabledStyle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>ИНН</p>
                            </div>
                            <div>
                                <div className='center'>
                                    <div style={{paddingRight: '20px'}}>
                                        <FileUploadIcon/>
                                        <DownloadIcon/>
                                        <PreviewIcon/>
                                    </div>
                                    <div>
                                        {/*
                                            edit ? 
                                            <input className='origin' type="text" value={ userLogin ? userLogin.newUser?.profile.inn : "XXX-XXX-XXX-XX"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile!.inn = Number(e.target.value);
                                                handlerEdit({...userLogin})
                                            }}/>
                                            :
                                            <p>{userLogin!.newUser ? userLogin!.newUser.profile.inn: "-"}</p>
                                            */
                                        }
                                        <input className='origin' type="text" value={ userLogin ? userLogin.newUser?.profile.inn : "XXX-XXX-XXX-XX"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile!.inn = e.target.value;
                                                handlerEdit({...userLogin})
                                        }}
                                        disabled={!edit}
                                        style={edit ? {}:disabledStyle}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Телефон</p>
                            </div>
                            <div className='center'>
                                {/*
                                    edit ?
                                    <input className='origin' type="text" value={ userLogin ? userLogin.newUser?.profile.phone : "+7 912 34-22-44"}
                                    onChange={e=>{
                                    userLogin!.newUser!.profile!.phone = e.target.value;
                                    handlerEdit({...userLogin})
                                    }}/>
                                    :
                                    <p>{userLogin!.newUser ? userLogin!.newUser.profile.phone: "-"}</p>
                                    */
                                }
                                  <input className='origin' type="text" value={ userLogin ? userLogin.newUser?.profile.phone : "+7 912 34-22-44"}
                                    onChange={e=>{
                                    userLogin!.newUser!.profile!.phone = e.target.value;
                                    handlerEdit({...userLogin})
                                    }}
                                    disabled={!edit}
                                    style={edit ? {}:disabledStyle}
                                    />
                            </div>
                        </div>
                    </div>

                </div>
                
                <div style={{
                    width:'203px',
                    height:'272px',
                    background: 'white',
                    margin:'13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                    }}>
                    
                    <img  
                    src={"https://s3-alpha-sig.figma.com/img/96bb/4f15/1760424f6bb319f08d77ff589f892d8c?Expires=1661731200&Signature=RRB6H5qJBy3WET2pry74WLyaYiGJqwaNKFnZPpLtiJpASQnv9cx7UWUXkdOgFFhnSxmxiRxWD4~xusDrniFvonV9~2lzmdVHvyHKcpPS9Wo5Zk2oe9VQFzdX669uFMxPHGjFxdauiTSQQJy3h-MkdnOu-pX~5JKGhJqktgxlooCG~syrZrJew6sspwAqEQdtZ33W0ivDcaTiN~HkEGi-iRYd74dD0TiH-M73jwPyUEMQ5LX4Oltg~6now0UkXkZmKJKFxyHGL1CmWQD-SQvjdgUV6W9vOV3rByaFfJGs~Ab0wtA3h6Zz13oTHhC1yxxYu3gIZBbCDsKYrpSlm~P9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
                    srcSet={"https://s3-alpha-sig.figma.com/img/96bb/4f15/1760424f6bb319f08d77ff589f892d8c?Expires=1661731200&Signature=RRB6H5qJBy3WET2pry74WLyaYiGJqwaNKFnZPpLtiJpASQnv9cx7UWUXkdOgFFhnSxmxiRxWD4~xusDrniFvonV9~2lzmdVHvyHKcpPS9Wo5Zk2oe9VQFzdX669uFMxPHGjFxdauiTSQQJy3h-MkdnOu-pX~5JKGhJqktgxlooCG~syrZrJew6sspwAqEQdtZ33W0ivDcaTiN~HkEGi-iRYd74dD0TiH-M73jwPyUEMQ5LX4Oltg~6now0UkXkZmKJKFxyHGL1CmWQD-SQvjdgUV6W9vOV3rByaFfJGs~Ab0wtA3h6Zz13oTHhC1yxxYu3gIZBbCDsKYrpSlm~P9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
                    alt='NTS'
                    loading="lazy"/>
                   
                    <div className='styleMenuUserInfoConteiner'>
                        <div className='styleMenuUserInfo'>
                            <div style={{marginTop: '5px',...styleMenuItem}} className='center'>
                                <span style={{paddingLeft: '15px'}}>Обновить фотографию</span>
                            </div>
                            <div style={styleMenuItem2} className='center'>
                                <span style={{paddingLeft: '15px'}}>Изменить миниатюру</span>
                            </div>
                        </div>
                    </div>
                </div>
                
               
        </div>
    )
}

export default UserInfo;

