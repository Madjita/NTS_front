import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';

type Props = {
    className?: string,
}



 
const UserYLM:  React.FC<Props> = () => {

    return(
        <div style={{padding: '13px'}}>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p>УЛМ</p>
                        </div>
                        <div>
                            <div style={{display: 'flex'}}>
                                <div style={{display: 'flex'}}>
                                    <div>
                                        <input className='origin' style={{width:'97px'}} type="text" value={"7102 573922"}/>
                                    </div>         
                                    <div style={{paddingLeft: '10px'}}>
                                        <input className='origin' style={{width:'80px'}} type="text" value={"13.05.1983"}/>
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

                <div style={{height:'30px',display:'flex'}}>
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
                                    <input className='origin' style={{width: 'calc(100% - 7px)'}} type="text" value={"кем выдан"}/>
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

export default UserYLM;

