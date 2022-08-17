import React from 'react';
import './MainInfo.css'


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import UserInfo from './UserInfo';
import UserPasport from './UserPasport';
import UserPasportInternational from './UserPasportInternational';
import UserYLM from './UserYLM';

type Props = {
    className?: string,
}



 
const MainInfo:  React.FC<Props> = () => {



    return(
        <div className='MainInfo'>
           <UserInfo/>
           <UserPasport/>
           <UserPasportInternational/>
           <UserYLM/>
        </div>
    )
}

export default MainInfo;


/*
///

 <div>
           <div style={{width:'100%',height:'50%',display:'flex'}}>
                <div style={{width:'70%',height:'100%',margin: '13px',marginRight: '0px'}}>
                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Фамилия</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <input className='origin' type="text" value={"Фамилия"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%', height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Имя</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <input className='origin' type="text" value={"Имя"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Отчество</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <input className='origin' type="text" value={"Отчество"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Дата рождения</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <input className='origin' type="text" value={"Отчество"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Пол</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                               <p className='origin'> <input className='origin' name="pol" type="radio"/> Мужчина</p>
                               <p className='origin' style={{  marginLeft: '16px'}}> <input className='origin' name="pol" type="radio"/> Женщина</p>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>СНИЛС</p>
                            <div style={{
                                paddingTop: '10px',
                            }}>
                            <div style={{display: 'flex',}}>
                                <div style={{paddingRight: '110px'}}>
                                    <FileUploadIcon/>
                                    <DownloadIcon/>
                                    <PreviewIcon/>
                                </div>
                                <div>
                                    <input className='origin' type="text" value={"XXX-XXX-XXX-XX"}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>ИНН</p>
                            <div style={{
                                paddingTop: '10px',
                            }}>
                            <div style={{display: 'flex',}}>
                                <div style={{paddingRight: '110px'}}>
                                    <FileUploadIcon/>
                                    <DownloadIcon/>
                                    <PreviewIcon/>
                                </div>
                                <div>
                                    <input className='origin' type="text" value={"XXX-XXX-XXX-XX"}/>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex',marginTop: '7px'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Телефон</p>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                <input className='origin' type="text" value={"+7 912 34-22-44"}/>
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
                    justifyContent: 'center',}}>
                    <img  
                    src={"https://s3-alpha-sig.figma.com/img/96bb/4f15/1760424f6bb319f08d77ff589f892d8c?Expires=1661731200&Signature=RRB6H5qJBy3WET2pry74WLyaYiGJqwaNKFnZPpLtiJpASQnv9cx7UWUXkdOgFFhnSxmxiRxWD4~xusDrniFvonV9~2lzmdVHvyHKcpPS9Wo5Zk2oe9VQFzdX669uFMxPHGjFxdauiTSQQJy3h-MkdnOu-pX~5JKGhJqktgxlooCG~syrZrJew6sspwAqEQdtZ33W0ivDcaTiN~HkEGi-iRYd74dD0TiH-M73jwPyUEMQ5LX4Oltg~6now0UkXkZmKJKFxyHGL1CmWQD-SQvjdgUV6W9vOV3rByaFfJGs~Ab0wtA3h6Zz13oTHhC1yxxYu3gIZBbCDsKYrpSlm~P9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
                    srcSet={"https://s3-alpha-sig.figma.com/img/96bb/4f15/1760424f6bb319f08d77ff589f892d8c?Expires=1661731200&Signature=RRB6H5qJBy3WET2pry74WLyaYiGJqwaNKFnZPpLtiJpASQnv9cx7UWUXkdOgFFhnSxmxiRxWD4~xusDrniFvonV9~2lzmdVHvyHKcpPS9Wo5Zk2oe9VQFzdX669uFMxPHGjFxdauiTSQQJy3h-MkdnOu-pX~5JKGhJqktgxlooCG~syrZrJew6sspwAqEQdtZ33W0ivDcaTiN~HkEGi-iRYd74dD0TiH-M73jwPyUEMQ5LX4Oltg~6now0UkXkZmKJKFxyHGL1CmWQD-SQvjdgUV6W9vOV3rByaFfJGs~Ab0wtA3h6Zz13oTHhC1yxxYu3gIZBbCDsKYrpSlm~P9vQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"}
                    alt='NTS'
                    loading="lazy"/>
                </div>
           </div>
           <div style={{height: '400px'}}>
                <div style={{height:'30px',display:'flex',padding: '0px 13px 13px 13px'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <p>Паспорт РФ</p>
                            <div style={{
                                paddingTop: '10px',
                            }}>
                            <div style={{display: 'flex',height: '22px'}}>
                                <div style={{paddingRight: '80px'}}>
                                    <FileUploadIcon/>
                                    <DownloadIcon/>
                                    <PreviewIcon/>
                                </div>
                                <div style={{display: 'flex'}}>
                                    <div>
                                        <input className='origin' style={{width:'100px'}} type="text" value={"7102 573922"}/>
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
           </div>
        </div>

/////
 <div>
                <p>Фамилия</p>
                <input className='origin' type="text" value={"Фамилия"}/>
            </div>
            <div>
                
            </div>
            <p>Имя</p>
            <p>Отчество</p>
            <p>Дата рождения</p>
            <p>Пол</p>
            <p>СНИЛС</p>
            <p>ИНН</p>
            <p>Телефон</p>

 <div className='MainInfo'>
           <div style={{width:'50%',height:'100%'}}>
            <p>Фамилия</p>
            <p>Имя</p>
            <p>Отчество</p>
            <p>Дата рождения</p>
            <p>Пол</p>
            <p>СНИЛС</p>
            <p>ИНН</p>
            <p>Телефон</p>
           </div>
           <div style={{width:'100%',height:'100%'}}>
                <div style={{width:'100%',height:'50%',display:'flex'}}>
                    <div style={{width:'100%',height:'100%'}}></div>
                    <div style={{width:'100%',height:'100%'}}></div>
                </div>
                <div style={{width:'100%',height:'50%'}}>

                </div>
            </div>
        </div>


*/


/*

  <div className='item2'>
                <div className='containerMainInfo'>
                    <p>Фамилия</p>
                    <input className='origin' type="text" value={"Фамилия"}/>
                </div>
                <div className='containerMainInfo'>
                    <p>Имя</p>
                    <input className='origin' type="text" value={"Имя"}/>
                </div>
                <div className='containerMainInfo'>
                    <p>Отчество</p>
                    <input className='origin' type="text" value={"Отчество"}/>
                </div>
                <div className='containerMainInfo'>
                    <p>Дата рождения</p>
                    <div style={{display: 'flex',}}>
                        <div>
                            <input className='birthday' type="text" value={"день"}/>
                        </div>
                        <div style={{paddingLeft: '5px'}}>
                            <input className='birthday' type="text" value={"месяц"}/>
                        </div>
                        <div style={{paddingLeft: '5px'}}>
                            <input className='birthday' type="text" value={"год"}/>
                        </div>
                    </div>
                </div>
                <div className='containerMainInfo'>
                    <p>Пол</p>
                    <div style={{display: 'flex',}}>
                        <p>
                            <input name="pol" type="radio" value={"мужчина"}/>
                            мужчина
                        </p>
                        <p style={{paddingLeft: '5px'}}>
                            <input name="pol" type="radio" value={"мужчина"}/>
                            женщина
                        </p>
                    </div>
                </div>
                <div className='containerMainInfo'>
                    <p>СНИЛС</p>
                    <div style={{display: 'flex',}}>
                        <div>
                            <FileUploadIcon/>
                            <DownloadIcon/>
                            <PreviewIcon/>
                        </div>
                        <div>
                            <input className='origin' type="text" value={"XXX-XXX-XXX-XX"}/>
                        </div>
                    </div>
                </div>
                <div className='containerMainInfo'>
                    <p>ИНН</p>
                    <div style={{display: 'flex',}}>
                        <div>
                            <FileUploadIcon/>
                            <DownloadIcon/>
                            <PreviewIcon/>
                        </div>
                        <div>
                            <input className='origin' type="text" value={"XXX-XXX-XXX-XX"}/>
                        </div>
                    </div>
                </div>
                <div className='containerMainInfo'>
                    <p>Телефон</p>
                    <input className='origin' type="text" value={"+7 912 34-22-44"}/>
                </div>
            </div>
            <div className='item1'>
                <div >

                </div>
            </div>




*/