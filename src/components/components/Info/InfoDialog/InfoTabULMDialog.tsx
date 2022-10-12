import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IOldNewUser } from '../../../IDataInterface/IDataInsideInterface';
import { PatternFormat } from 'react-number-format';


type Props = {
    userLogin?: IOldNewUser,
    handleClickSave:  () => void,
    handleClickCancel:  () => void
    ChangeInfo: React.Dispatch<React.SetStateAction<IOldNewUser>>
}

const InfoTabULMDialog:  React.FC<Props> = ({userLogin, handleClickSave, handleClickCancel, ChangeInfo}) => {

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
                                        format={'#######'}
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmNumber : "Номер"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmNumber = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmDateTaked : "Дата выдачи"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmDateTaked = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmDateBack : "Дата окончания"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmDateBack = e.target.value;
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
                        <div className='center'>
                            <p></p>
                        </div>
                        
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmTaked : "Кем выдан"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmTaked = e.target.value;
                                            handlerEdit({...userLogin})                      
                                    }}/>
                                </div>                        
                    </div>
                </div>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <p></p>
                        </div>
                        <div style={{width: '694px'}}>
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ulmPlaceBorned : "Место рождения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ulmPlaceBorned = e.target.value;
                                            handlerEdit({...userLogin})                    
                                    }}/>
                        </div>
                    </div>
                </div>                
        </div>
                <div className='Buttons'>
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave} > {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel} > {"Отмена"}</Button></div>
                </div>
    </React.Fragment>
  );
} 

export default InfoTabULMDialog;