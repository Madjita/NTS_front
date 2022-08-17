import React from 'react';


import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { TextField } from '@mui/material';

type Props = {
    className?: string,
}



 
const UserInfo:  React.FC<Props> = () => {

    return(
        <div style={{width:'100%',height:'50%',display:'flex'}}>
                <div style={{width:'70%',height:'100%',margin: '13px',marginRight: '0px'}}>
                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Фамилия</p>
                            </div>
                            <div className='center'>
                                <input className='origin' type="text" value={"Фамилия"}/>
                            </div>
                        </div>
                    </div>
                       

                    <div style={{width:'100%', height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Имя</p>
                            </div>
                            <div className='center'>
                                <input className='origin' type="text" value={"Имя"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Отчество</p>
                            </div>
                            <div className='center'>
                                <input className='origin' type="text" value={"Отчество"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Дата рождения</p>
                            </div>
                            <div className='center'>
                                <input className='origin' type="text" value={"Отчество"}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'30px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Пол</p>
                            </div>
                            <div className='center'>
                               <p> <input name="pol" type="radio"/> Мужчина</p>
                               <p style={{  marginLeft: '16px'}}> <input name="pol" type="radio"/> Женщина</p>
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
                                        <input className='origin' type="text" value={"XXX-XXX-XXX-XX"}/>
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
                                        <input className='origin' type="text" value={"XXX-XXX-XXX-XX"}/>
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
    )
}

export default UserInfo;

