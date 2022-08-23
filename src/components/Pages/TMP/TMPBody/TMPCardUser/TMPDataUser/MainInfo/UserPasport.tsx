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

/*let prfSeries = null;
let prfNumber = null;


let prfDatetaked = null;
let prfDateback = null;
let prfCode = null;
let prfTaked = null;
let prfPlaceBorned = null;
let prfPlaceRegistration = null;
let prfPlaceLived = null;

if(userLogin != undefined)
{
    if(userLogin.profile != undefined)
    {
        prfSeries = userLogin.profile.prfSeries
        prfNumber = userLogin.profile.prfNumber
        SeriesNumber = prfSeries + " " + prfNumber
        prfDatetaked = new Date(userLogin.profile.prfDateTaked).toLocaleDateString("en-US")
        prfDateback = new Date(userLogin.profile.prfDateBack).toLocaleDateString("en-US")
        prfTaked = userLogin.profile.prfTaked;
        prfCode = userLogin.profile.prfCode;
        prfPlaceBorned = userLogin.profile.prfPlaceBorned;
        prfPlaceRegistration = userLogin.profile.prfPlaceRegistration;
        prfPlaceLived = userLogin.profile.prfPlaceLived;
    }
}*/


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
                                    {/*     
                                    <div style={{paddingLeft: '10px'}}>
                                        <input className='origin' style={{width:'80px'}} type="text" value={prfDatetaked ? prfDatetaked: "13.05.1983"}/>
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                    <div>
                                        <input className='origin' style={{width:'80px'}} type="text" value={prfDateback ? prfDateback : "13.05.2028"}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                        <input className='origin' style={{width:'80px'}} type="text" value={prfCode ? prfCode: "722-033"}/>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
{/*
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
                                <div style={{display: 'flex',width: '408px'}}>
                                    <textarea className='origin' style={{width: '100%', resize: 'none'}} value={prfTaked ? prfTaked : "кем выдан"}/>
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
                            <input className='origin' style={{width: '100%'}} type="text" value={prfPlaceBorned ? prfPlaceBorned : "место рождения"}/>
                        </div>
                    </div>
                </div>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '408px'}} className='center'>
                            <input className='origin' style={{width: '100%'}} type="text" value={prfPlaceRegistration ? prfPlaceRegistration:   "место прописки"}/>
                        </div>
                    </div>
                </div>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '408px'}} className='center'>
                            <input className='origin' style={{width: '100%'}} type="text" value={prfPlaceLived ? prfPlaceLived : "место проживания"}/>
                        </div>
                    </div>
                </div>
                                */}
        </div>
    )
}

export default UserPasport;

