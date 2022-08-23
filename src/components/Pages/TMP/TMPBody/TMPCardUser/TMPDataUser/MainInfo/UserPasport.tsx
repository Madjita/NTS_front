import React, { useEffect } from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { IUser } from '../../../../../../IDataInterface/IDataInterface';
import { IOldNewUser } from '../../../../../../IDataInterface/IDataInsideInterface';

type Props = {
    className?: string,
    userLogin?: IOldNewUser
    handlerEdit? : any
    edit? : boolean
}



 
const UserPasport:  React.FC<Props> = ({userLogin,handlerEdit,edit}) => {

const [SeriesNumber,setSeriesNumber] = React.useState('')


useEffect(()=>{

    if(userLogin?.newUser != undefined)
    {
        setSeriesNumber(userLogin?.newUser.profile.prfSeries + " "+ userLogin?.newUser.profile.prfNumber)
    }

},[userLogin])

return(
        <div style={{padding: '13px'}}>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <img  data-original="https://s3-alpha-sig.figma.com/img/08d0/9129/cea61567d098dc076916dee29da3e9a5?Expires=1661731200&Signature=ZWIaoL0CspsBvKTKzcgMJDt9m~PlmNDG90l7y2lssv7ik~zp0CMfiRTKP4kUA4jdcxXAdRSbPEorMDXn3RuaGDc03d-thID3s3HCVmo7qIcLTLHnQMH2cLGgn4TdJdJhj700yw1sS2XWhWUdPHwIPbS-chGh0E7pOE0Zamp~FMKJpjN5AHq7dGQ3a3krKD85-NAHV8wVcCASHcQLFNAGnBUF8aaexqkIVnWhD~06egp661Se9zRBi-F7unBmzqyhFl3CkRFUrfz9hcg3MTKoz~WJf84u9-hPyggI4DB0d7z8M0ZbDm2N8CIu6V~ynwRJQ91rzAsQLZjewBPW2zx8ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            src="https://s3-alpha-sig.figma.com/img/08d0/9129/cea61567d098dc076916dee29da3e9a5?Expires=1661731200&Signature=ZWIaoL0CspsBvKTKzcgMJDt9m~PlmNDG90l7y2lssv7ik~zp0CMfiRTKP4kUA4jdcxXAdRSbPEorMDXn3RuaGDc03d-thID3s3HCVmo7qIcLTLHnQMH2cLGgn4TdJdJhj700yw1sS2XWhWUdPHwIPbS-chGh0E7pOE0Zamp~FMKJpjN5AHq7dGQ3a3krKD85-NAHV8wVcCASHcQLFNAGnBUF8aaexqkIVnWhD~06egp661Se9zRBi-F7unBmzqyhFl3CkRFUrfz9hcg3MTKoz~WJf84u9-hPyggI4DB0d7z8M0ZbDm2N8CIu6V~ynwRJQ91rzAsQLZjewBPW2zx8ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                            style={{
                                width: '24px',
                                height: '35px'
                            }}
                            >
                            
                            </img>
                        </div>
                        <div className='center'>
                            <p>Паспорт РФ</p>
                        </div>
                        <div className='center'>
                            <div style={{display: 'flex',height: '30px'}}>
                                <div className='center'>
                                    <div>
                                        {
                                            edit ?
                                            <input className='origin' style={{width:'101px'}} type="text" value={SeriesNumber ? SeriesNumber : "-"}
                                                onChange={e=>{
                                                if(userLogin != undefined && edit === true )
                                                {
                                                    let split = e.target.value.split(" ")
                                                    let serial = split[0]
                                                    let number = split[1]
                                                    if(userLogin.newUser != undefined)
                                                    {
                                                        if(userLogin.newUser.profile != undefined)
                                                        {
                                                            userLogin.newUser.profile.prfSeries = Number(serial)
                                                            userLogin.newUser.profile.prfNumber = Number(number)
                                                            handlerEdit({...userLogin});
                                                        }
                                                    }
                                                }
                                            }}/>
                                            :
                                            <p>{SeriesNumber ? SeriesNumber : "-"}</p>
                                        }
                                    </div>    
                                   
                                    <div style={{paddingLeft: '10px'}}>
                                      {
                                        edit ? 
                                        <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.prfDateTaked).toLocaleDateString("en-US"): "-"}/>
                                        :
                                        <p>{userLogin?.newUser ? new Date(userLogin?.newUser.profile.prfDateTaked).toLocaleDateString("en-US"): "-"}</p>
                                      }
                                    </div>
  
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                    <div>
                                        {
                                        edit ? 
                                        <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? new Date(userLogin?.newUser.profile.prfDateBack).toLocaleDateString("en-US"): "-"}/>
                                        :
                                        <p>{userLogin?.newUser ? new Date(userLogin?.newUser.profile.prfDateBack).toLocaleDateString("en-US"): "-"}</p>
                                        }
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                        {
                                        edit ? 
                                        <input className='origin' style={{width:'80px'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.prfCode: "-"}
                                        onChange={e=>{
                                            userLogin!.newUser!.profile.prfCode= Number(e.target.value);
                                            handlerEdit({...userLogin})
                                        }}
                                        />
                                        :
                                        <p>{userLogin?.newUser ? userLogin?.newUser.profile.prfCode: "-"}</p>
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
                                <div style={{width: '408px'}} className='center'>
                                    {
                                        edit ?
                                        <textarea className='origin' style={{width: '100%', resize: 'none'}} value={userLogin?.newUser ? userLogin?.newUser.profile.prfTaked : "кем выдан"}
                                        onChange={e=>{
                                            userLogin!.newUser!.profile.prfTaked = e.target.value;
                                            handlerEdit({...userLogin})
                                        }}
                                        />
                                        :
                                        <p>{userLogin?.newUser ? userLogin?.newUser.profile.prfTaked: "кем выдан"}</p>
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
                            <input className='origin' style={{width: '100%'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.prfPlaceBorned : "место рождения"}
                            onChange={e=>{
                                userLogin!.newUser!.profile.prfPlaceBorned = e.target.value;
                                handlerEdit({...userLogin})
                            }}
                            />
                            :
                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.prfPlaceBorned : "место рождения"}</p>
                           }
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
                            <input className='origin' style={{width: '100%'}} type="text" value={userLogin?.newUser  ? userLogin?.newUser.profile.prfPlaceRegistration:   "место прописки"}
                            onChange={e=>{
                                userLogin!.newUser!.profile.prfPlaceRegistration = e.target.value;
                                handlerEdit({...userLogin})
                            }}
                            />
                            :
                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.prfPlaceRegistration : "место прописки"}</p>
                           }
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
                            <input className='origin' style={{width: '100%'}} type="text" value={userLogin?.newUser ? userLogin?.newUser.profile.prfPlaceLived : "место проживания"}
                            onChange={e=>{
                                userLogin!.newUser!.profile.prfPlaceLived = e.target.value;
                                handlerEdit({...userLogin})
                            }}
                            />
                            :
                            <p>{userLogin?.newUser ? userLogin?.newUser.profile.prfPlaceLived : "место проживания"}</p>
                           }
                        </div>
                    </div>
                </div>

        </div>
    )
}

export default UserPasport;

