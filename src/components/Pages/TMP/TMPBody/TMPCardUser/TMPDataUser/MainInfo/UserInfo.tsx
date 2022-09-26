import React from 'react';

import DownloadIcon from '@mui/icons-material/Download';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PreviewIcon from '@mui/icons-material/Preview';
import { createTheme, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import { IUser } from '../../../../../../IDataInterface/IDataInterface';
import '../../../TMPCardUser_v2/TMPCardUser_tabs_v3'
import './MainInfo.css'

type Props = {
    className?: string,
    userLogin?: IUser | null
    change?: boolean,

    t?: {
        value: number,
        action: React.Dispatch<React.SetStateAction<number>>
    },
}




const UserInfo:  React.FC<Props> = (props) => {

    const {
        change, 
        userLogin
    } = props

    const [edit, setEdit] = React.useState<string>()

    const theme = createTheme({
        palette: {
          primary: {
            // Purple and green play nicely together.
            main: '#123',
          },
          secondary: {
            // This is green.A700 as hex.
            main: '#123',
          },
        },
    });
      
    return(
        <div style={{width:'100%',height:'50%',display:'flex'}}>
                <div style={{width:'70%',height:'100%',margin: '13px',marginRight: '0px'}}>
                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Фамилия</p>
                            </div>
                            <div className='center'>
                            <TextField
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= {change ? userLogin?.secondName : "Фамилия"}
                                type="name"
                                fullWidth
                                size='small'
                                variant="standard"
                                color="primary" focused 
                                value ={userLogin?.secondName}
                                inputProps={{ style: { textAlign: 'center',color:'black' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
                                }}/>
                            </div>
                        </div>
                    </div>
                       

                    <div style={{width:'100%', height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Имя</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Имя"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value ={userLogin?.firstName || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Отчество</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Отчество"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value ={edit || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Дата рождения</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Дата рождения"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value ={edit || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
                                }}/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Пол</p>
                            </div>
                            <div className='center'>
                            <FormControl>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    defaultValue="male">
                                    <FormControlLabel value="female" disabled={!change} control={<Radio />} label="Женщина" />
                                    <FormControlLabel value="male" disabled={!change} control={<Radio />} label="Мужчина" />                                   
                                </RadioGroup>
                            </FormControl>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
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
                                    <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Снилс"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
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
                                        <TextField            
                                        disabled={!change}
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="ИНН"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={edit || ''}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e =>{
                                            setEdit( e.target.value)                   
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Телефон</p>
                            </div>
                            <div className='center'>
                            <TextField            
                                disabled={!change}
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Телефон"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value ={edit || ''}
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e =>{
                                    setEdit( e.target.value)                   
                                }}/>
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

