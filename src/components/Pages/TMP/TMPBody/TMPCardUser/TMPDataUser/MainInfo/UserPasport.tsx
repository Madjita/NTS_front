import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';

type Props = {
    className?: string,
}



 
const UserPasport:  React.FC<Props> = () => {

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
                                        <input className='origin' style={{width:'101px'}} type="text" value={"7102 573922"}/>
                                    </div>         
                                    <div style={{paddingLeft: '10px'}}>
                                        <input className='origin' style={{width:'80px'}} type="text" value={"13.05.1983"}/>
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                    <div>
                                        <input className='origin' style={{width:'80px'}} type="text" value={"13.05.2028"}/>
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
                                    <input className='origin' style={{width: '100%'}} type="text" value={"кем выдан"}/>
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
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '408px'}} className='center'>
                            <input className='origin' style={{width: '100%'}} type="text" value={"место прописки"}/>
                        </div>
                    </div>
                </div>
                <div style={{height:'30px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '408px'}} className='center'>
                            <input className='origin' style={{width: '100%'}} type="text" value={"место проживания"}/>
                        </div>
                    </div>
                </div>
                
        </div>
    )
}

export default UserPasport;

