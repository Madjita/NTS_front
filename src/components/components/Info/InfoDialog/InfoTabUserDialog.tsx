import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { PatternFormat } from 'react-number-format';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { IOldNewUser } from '../../../IDataInterface/IDataInsideInterface';
import './../Info.css'


type Props = {
    userLogin?: IOldNewUser,
    handleClickSave:  () => void,
    handleClickCancel:  () => void
    ChangeInfo: React.Dispatch<React.SetStateAction<IOldNewUser>>
}

const InfoTabUserDialog:  React.FC<Props> = ({userLogin, handleClickSave, handleClickCancel, ChangeInfo}) => {

    const handlerEdit = (e: any) =>{
        ChangeInfo({...e})
    }


    return (
    <React.Fragment>
    <div className='Mainpart'>
      <div style={{width:'70%',height:'100%',margin: '13px',marginRight: '0px'}}>
                    <div style={{width:'100%',height:'50px',display:'flex'}}>
                        <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                            <div className='center'>
                                <p>Фамилия</p>
                            </div>
                            <div className='center'>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Фамилия"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.secondName : "Фамилия"} 
                                inputProps={{ style: { textAlign: 'center',color:'black' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.secondName = e.target.value;
                                    handlerEdit({...userLogin})
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
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Имя"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.firstName : "Имя"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.firstName = e.target.value;
                                    handlerEdit({...userLogin})                 
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
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Отчество"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.middleName : "Отчество"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.middleName = e.target.value;
                                    handlerEdit({...userLogin})                  
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
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Дата"
                                type="name"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.profile.date : "Дата"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.profile.date = e.target.value;
                                    handlerEdit({...userLogin})                   
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
                                    defaultValue="male"
                                    value = {userLogin!.newUser.profile.sex ? "male" : "female"}
                                    onChange={e=>{
                                        userLogin!.newUser.profile.sex = e.target.value == "male" ? true : false;
                                        handlerEdit({...userLogin})
                                    }}>
                                    <FormControlLabel value="female"  control={<Radio />} label="Женщина" />
                                    <FormControlLabel value="male"  control={<Radio />} label="Мужчина" />      
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
                                    <div>
                                    <PatternFormat
                                        format={'###-###-### ##'}
                                        mask="_"
                                        customInput={TextField}                                                     
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label= "Снилс"
                                        type="text"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.snils : "Снилс"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.snils = e.target.value;
                                            handlerEdit({...userLogin})                   
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
                                    <div>
                                        <PatternFormat 
                                        format={'############'}
                                        mask="_"
                                        customInput={TextField}  
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label= "ИНН"
                                        type="text"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.inn : "ИНН"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.inn = e.target.value;
                                            handlerEdit({...userLogin})                 
                                        }}
                                        />
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
                            <PatternFormat 
                                format={'+# (###) ### ## ##'}
                                mask="_"
                                customInput={TextField}
                                autoFocus
                                margin="dense"
                                id="name"
                                label= "Телефон"
                                type="text"
                                fullWidth
                                size='small'
                                variant="outlined"
                                color="primary" focused 
                                value={ userLogin!.newUser ? userLogin!.newUser.profile.phone : "Телефон"} 
                                inputProps={{ style: { textAlign: 'center' }}} 
                                onChange={e=>{
                                    userLogin!.newUser.profile.phone = e.target.value;
                                    handlerEdit({...userLogin})                    
                                }}
                            />
                            </div>
                        </div>
                    </div>
                </div>                               
                </div>
                <div className='Buttons'>
                <div><Button size="small" variant="outlined"  onClick = {handleClickSave}> {"Сохранить изменения"}</Button></div> 
                <div><Button size="small" variant="outlined"  onClick = {handleClickCancel}> {"Отмена"}</Button></div>
                </div>
    </React.Fragment>
  );
} 

export default InfoTabUserDialog;