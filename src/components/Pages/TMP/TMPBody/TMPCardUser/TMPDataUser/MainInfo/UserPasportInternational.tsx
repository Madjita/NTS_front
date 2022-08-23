import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { IUser } from '../../../../../../IDataInterface/IDataInterface';

type Props = {
    className?: string,
    userLogin?: IUser | null
}



 
const UserPasportInternational:  React.FC<Props> = ({userLogin}) => {

    let ipNumber = null;
    let ipDatetaked = null;
    let ipDateback = null;
    let ipCode = null;
    let ipTaked = null;
    let ipPlaceborned = null;

    if(userLogin != undefined)
    {
        if(userLogin.profile != undefined)
        {
            ipNumber = userLogin.profile.ipNumber;
            ipDatetaked = new Date(userLogin.profile.ipDateTaked).toLocaleDateString("en-US")
            ipDateback = new Date(userLogin.profile.ipDateBack).toLocaleDateString("en-US")
            ipCode = userLogin.profile.ipCode
           /* prfSeries = userLogin.profile.prFseries
            prfNumber = userLogin.profile.prFnumber
            SeriesNumber = prfSeries + " " + prfNumber
            prfDatetaked = new Date(userLogin.profile.prFdatetaked).toLocaleDateString("en-US")
            prfDateback = new Date(userLogin.profile.prFdateback).toLocaleDateString("en-US")
            prfTaked = userLogin.profile.prFtaked;
            prfCode = userLogin.profile.prFcode;
            prfPlaceBorned = userLogin.profile.prFplaceborned;
            prfPlaceRegistration = userLogin.profile.prFplaceregistration;
            prfPlaceLived = userLogin.profile.prFplacelived; */
        }
    }

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
                                        <input className='origin' style={{width:'97px'}} type="text" value={ipNumber ? ipNumber : "7102 573922"}/>
                                    </div>         
                                    <div style={{paddingLeft: '10px'}}>
                                        <input className='origin' style={{width:'80px'}} type="text" value={ipDatetaked ? ipDatetaked: "13.05.1983"}/>
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                    <div>
                                        <input className='origin' style={{width:'84px'}} type="text" value={"13.05.2028"}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                        <input className='origin' style={{width:'80px'}} type="text" value={"722-033"}/>
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
                                <div style={{display: 'flex',width: '408px'}}>
                                    <textarea className='origin' style={{width: '100%',resize:'none'}}  value={"кем выдан"}/>
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
                            <input className='origin' style={{width: '100%'}} type="text" value={"место рождения"}/>
                        </div>
                    </div>
                </div>                
        </div>
    )
}

export default UserPasportInternational;

