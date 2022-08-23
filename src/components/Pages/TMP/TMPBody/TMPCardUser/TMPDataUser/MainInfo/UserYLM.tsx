import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { IOldNewUser } from '../../../../../../IDataInterface/IDataInsideInterface';

type Props = {
    className?: string,
    userLogin?: IOldNewUser
    handlerEdit? : any
    edit? : boolean
}



 
const UserYLM:  React.FC<Props> = ({userLogin,handlerEdit,edit}) => {

    return(
        <div style={{padding: '13px'}}>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>УЛМ</p>
                        </div>
                        <div className='center'>
                            <div style={{display: 'flex'}}>
                                <div className='center'>
                                    <div>
                                        {
                                            edit ?
                                            <input className='origin' style={{width:'97px'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ulmNumber : "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ulmNumber = Number(e.target.value)
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.ulmNumber : "-"}</p>
                                        }
                                       
                                    </div>    
                                   
                                    <div style={{paddingLeft: '10px'}}>
                                        {
                                            edit ?
                                            <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.ulmDateTaked).toLocaleDateString("en-US"): "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ulmDateTaked = e.target.value
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? new Date(userLogin?.newUser.profile.ulmDateTaked).toLocaleDateString("en-US") : "-"}</p>

                                        }
                                       
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                     
                                    <div>
                                        {
                                            edit ?
                                            <input className='origin' style={{width:'84px'}} type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.ulmDateBack).toLocaleDateString("en-US"): "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ulmDateBack = e.target.value
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? new Date(userLogin?.newUser.profile.ulmDateBack).toLocaleDateString("en-US") : "-"}</p>
                                        }
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                        {
                                            edit ?
                                            <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ulmCode : "-"}
                                            onChange={e=>{
                                                userLogin!.newUser!.profile.ulmCode = Number(e.target.value)
                                                handlerEdit({...userLogin});
                                            }}/>
                                            :
                                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.ulmCode : "-"}</p>
                                        }
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
                                <div  style={{width: '408px'}}>
                                    {
                                        edit ?
                                        <textarea className='origin' style={{width: '100%',resize:'none'}}  value={userLogin?.newUser ? userLogin?.newUser.profile.ipTaked: "кем выдан"}
                                        onChange={e=>{
                                            userLogin!.newUser!.profile.ipTaked = e.target.value
                                            handlerEdit({...userLogin});
                                        }}/>
                                        :
                                        <p>{userLogin?.newUser ? userLogin?.newUser.profile.ipTaked: "кем выдан"}</p>
                                    }
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
                            {
                                edit ?
                                <input className='origin' style={{width: '100%'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.ipPlaceBorned: "место рождения"}
                                onChange={e=>{
                                    userLogin!.newUser!.profile.ipPlaceBorned = e.target.value
                                    handlerEdit({...userLogin});
                                }}/>
                                :
                                <p>{userLogin?.newUser ? userLogin?.newUser.profile.ipPlaceBorned: "место рождения"}</p>
                            }
                        </div>
                    </div>
                </div>    
                      
        </div>
    )
}

export default UserYLM;

