import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { IUser } from '../../../../../../IDataInterface/IDataInterface';
import { IOldNewUser } from '../../../../../../IDataInterface/IDataInsideInterface';
import { disabledStyle } from './UserInfo';

type Props = {
    className?: string,
    userLogin?: IOldNewUser
    handlerEdit? : any
    edit? : boolean
}



 
const UserPasportInternational:  React.FC<Props> = ({userLogin,handlerEdit,edit}) => {

    return(
        <div style={{padding: '13px'}}>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>Паспорт загран</p>
                        </div>
                        <div className='center'>
                            <div style={{display: 'flex'}}>
                                <div className='center'>
                                    <div>
                                        {/*
                                            edit ?
                                            <input className='origin' style={{width:'97px'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipNumber : "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipNumber = Number(e.target.value)
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.ipNumber : "-"}</p>
                                            */
                                        }

                                        <input className='origin'  type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipNumber : "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipNumber = Number(e.target.value)
                                                handlerEdit({...userLogin});
                                         }}
                                        disabled={!edit}
                                        style={edit ? {width: '97px'}:{width: '97px', ...disabledStyle}}
                                        />
                                       
                                    </div>    
                                   
                                    <div style={{paddingLeft: '10px'}}>
                                        {/*
                                            edit ?
                                            <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.ipDateTaked).toLocaleDateString("en-US"): "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipDateTaked = e.target.value
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? new Date(userLogin?.newUser.profile.ipDateTaked).toLocaleDateString("en-US") : "-"}</p>
                                            */
                                        }
                                        <input className='origin' type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.ipDateTaked).toLocaleDateString("en-US"): "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipDateTaked = e.target.value
                                                handlerEdit({...userLogin});
                                        }}
                                        disabled={!edit}
                                        style={edit ? {width: '80px'}:{width: '80px', ...disabledStyle}}
                                        />
                                       
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                     
                                    <div>
                                        {/*
                                            edit ?
                                            <input className='origin' style={{width:'84px'}} type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.ipDateBack).toLocaleDateString("en-US"): "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipDateBack = e.target.value
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? new Date(userLogin?.newUser.profile.ipDateBack).toLocaleDateString("en-US") : "-"}</p>
                                            */
                                        }
                                        <input className='origin' type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.ipDateBack).toLocaleDateString("en-US"): "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipDateBack = e.target.value
                                                handlerEdit({...userLogin});
                                        }}
                                        disabled={!edit}
                                        style={edit ? {width: '84px'}:{width: '84px', ...disabledStyle}}
                                        />
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                        {/*
                                            edit ?
                                            <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipCode : "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipCode = Number(e.target.value)
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.ipCode : "-"}</p>
                                            */
                                        }
                                        <input className='origin' type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipCode : "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ipCode = Number(e.target.value)
                                                handlerEdit({...userLogin});
                                        }}
                                        disabled={!edit}
                                        style={edit ? {width: '80px'}:{width: '80px', ...disabledStyle}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height:'55px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div className='center'>
                                <div style={{paddingRight: '15px'}}>
                                    <FileUploadIcon/>
                                    <DownloadIcon/>
                                    <PreviewIcon/>
                                </div>
                                <div  style={{width: '401px',paddingRight: '8px'}}>
                                    {/*
                                        edit ?
                                        <textarea className='origin' style={{width: '100%',resize:'none'}}  value={userLogin?.newUser ? userLogin?.newUser.profile.ipTaked: "кем выдан"}
                                        onChange={e=>{
                                            userLogin!.newUser!.profile.ipTaked = e.target.value
                                            handlerEdit({...userLogin});
                                        }}/>
                                        :
                                        <p>{userLogin?.newUser ? userLogin?.newUser.profile.ipTaked: "кем выдан"}</p>
                                        */
                                    }
                                    <textarea className='origin'  value={userLogin?.newUser ? userLogin?.newUser.profile.ipTaked: "кем выдан"}
                                        onChange={e=>{
                                            userLogin!.newUser!.profile.ipTaked = e.target.value
                                            handlerEdit({...userLogin});
                                        }}
                                        disabled={!edit}
                                        style={edit ? {width: '100%',resize:'none'}:{width: '100%',resize:'none',...disabledStyle}}
                                    />
                                </div>
                        </div>
                    </div>
                </div>

                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '408px'}} className='center'>
                            {/*
                                edit ?
                                <input className='origin' style={{width: '100%'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipPlaceBorned: "место рождения"}
                                onChange={e=>{
                                    userLogin!.newUser!.profile.ipPlaceBorned = e.target.value
                                    handlerEdit({...userLogin});
                                }}/>
                                :
                                <p>{userLogin?.newUser ? userLogin?.newUser.profile.ipPlaceBorned: "место рождения"}</p>
                                */
                            }
                             <input className='origin' type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipPlaceBorned: "место рождения"}
                                onChange={e=>{
                                    userLogin!.newUser!.profile.ipPlaceBorned = e.target.value
                                    handlerEdit({...userLogin});
                                }}
                                disabled={!edit}
                                style={edit ? {width: '100%'}:{width: '100%', ...disabledStyle}}
                                />
                        </div>
                    </div>
                </div>    
                      
        </div>
    )
}

export default UserPasportInternational;

