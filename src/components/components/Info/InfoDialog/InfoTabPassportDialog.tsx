import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IOldNewUser } from '../../../IDataInterface/IDataInsideInterface';
import { PatternFormat, NumericFormat } from 'react-number-format';


type Props = {
  userLogin?: IOldNewUser,
  handleClickSave:  () => void,
  handleClickCancel:  () => void
  ChangeInfo: React.Dispatch<React.SetStateAction<IOldNewUser>>
}

const InfoTabPassportDialog:  React.FC<Props> = ({userLogin, handleClickSave, handleClickCancel, ChangeInfo}) => {

    const handlerEdit = (e: any) =>{
        ChangeInfo({...e})
}
    return (
    <React.Fragment>
          <div style={{padding: '13px'}}>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <div style={{display: 'flex'}}>
                                <div className='center'>
                                    <div>
                                    <PatternFormat
                                        format={'####'}
                                        mask="_"
                                        customInput={TextField}
                                        allowEmptyFormatting                                                  
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Серия"
                                        type="tel"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfSeries : "Серия"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfSeries = e.target.value;
                                            handlerEdit({...userLogin})                 
                                        }}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                    <PatternFormat
                                        format={'######'}
                                        mask="_"
                                        customInput={TextField}                                                  
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Номер"
                                        type="text"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfNumber : "Номер"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfNumber = e.target.value;
                                            handlerEdit({...userLogin})                    
                                        }}/>
                                    </div>          
                                    <div style={{paddingLeft: '10px'}}>
                                    <TextField                                                   
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Дата выдачи"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfDateTaked : "Дата выдачи"} 
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfDateTaked = e.target.value;
                                            handlerEdit({...userLogin})                   
                                    }}/>
                                    </div>
                                    <p style={{margin: '0px',padding: '5px'}}>-</p>
                                    <div>
                                    <TextField                                                  
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Дата окончания"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfDateBack : "Дата окончания"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfDateBack = e.target.value;
                                            handlerEdit({...userLogin})                   
                                    }}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                    <PatternFormat
                                        format={'###-###'}
                                        allowEmptyFormatting mask="_"
                                        customInput={TextField}                                                  
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Код подразделения"
                                        type="text"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfCode : "Код подразделения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfCode = e.target.value;
                                            handlerEdit({...userLogin})                   
                                    }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >                
                                <div style={{width: '694px'}}>
                                <TextField                        
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Кем выдан"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfTaked : "Кем выдан"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfTaked = e.target.value;
                                            handlerEdit({...userLogin})                     
                                    }}/>
                                </div>                       
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >         
                        <div style={{width: '694px'}} className='center'>
                                    <TextField                 
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Место рождения"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfPlaceBorned : "Место рождения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfPlaceBorned = e.target.value;
                                            handlerEdit({...userLogin})                    
                                    }}/>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >                       
                        <div style={{width: '694px'}} className='center'>
                        <TextField                                    
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Место прописки"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfPlaceRegistration : "Место прописки"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfPlaceRegistration = e.target.value;
                                            handlerEdit({...userLogin})                     
                                    }}/>
                        </div>
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div style={{width: '694px'}} className='center'>
                        <TextField            
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Место проживания"
                                        type="name"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value ={ userLogin!.newUser ? userLogin!.newUser.profile.prfPlaceLived : "Место проживания"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.prfPlaceLived = e.target.value;
                                            handlerEdit({...userLogin})                   
                                    }}/>
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

export default InfoTabPassportDialog;