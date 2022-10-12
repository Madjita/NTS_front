import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { IOldNewUser } from '../../../IDataInterface/IDataInsideInterface';
import InputMask from 'react-input-mask';
import { PatternFormat } from 'react-number-format';



type Props = {
    userLogin?: IOldNewUser,
    handleClickSave:  () => void,
    handleClickCancel:  () => void
    ChangeInfo: React.Dispatch<React.SetStateAction<IOldNewUser>>
}

const InfoTabInternationalDialog:  React.FC<Props> = ({userLogin, handleClickSave, handleClickCancel, ChangeInfo}) => {

    const handlerEdit = (e: any) =>{
      ChangeInfo({...e})
}

    return (
    <React.Fragment>
            <div style={{padding: '13px'}}>
                <div style={{height:'50px',display:'flex'}}>
                    <div style={{width:'100%',display:'flex',justifyContent: 'space-between'}} >
                        <div className='center'>
                            <div style={{display: 'flex',height: '50px'}}>
                                <div className='center'>  
                                <div>
                                    <TextField                                               
                                        autoFocus
                                        margin="dense"
                                        id="name"
                                        label="Номер"
                                        type="text"
                                        fullWidth
                                        size='small'
                                        variant="outlined"
                                        color="primary" focused 
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipNumber : "Номер"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{            
                                            userLogin!.newUser.profile.ipNumber = e.target.value;
                                            handlerEdit({...userLogin})                   
                                    }}>
                                        {<InputMask mask="**" maskPlaceholder="_" alwaysShowMask/>}
                                    </TextField>
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipDateTaked : "Дата выдачи"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipDateTaked = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipDateBack : "Дата окончания"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipDateBack = e.target.value;
                                            handlerEdit({...userLogin})                      
                                    }}/>
                                    </div>
                                    <div style={{paddingLeft: '10px'}}>
                                    <PatternFormat
                                        format={'#####'}
                                        mask="_" 
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipCode : "Код подразделения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipCode = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipTaked : "Кем выдан"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipTaked = e.target.value;
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
                                        value={ userLogin!.newUser ? userLogin!.newUser.profile.ipPlaceBorned : "Место рождения"}
                                        inputProps={{ style: { textAlign: 'center' }}} 
                                        onChange={e=>{
                                            userLogin!.newUser.profile.ipPlaceBorned = e.target.value;
                                            handlerEdit({...userLogin})                     
                                    }}/>
                        </div>
                    </div>
                </div>
                
                
        </div>
                <div className='Buttons'>               
                <div className='handleClickSave'><Button size="small" variant="outlined"  onClick = {handleClickSave}> {"Сохранить изменения"}</Button></div> 
                <div className='handleClickCancel'><Button size="small" variant="outlined"  onClick = {handleClickCancel}> {"Отмена"}</Button></div>
                </div>
    </React.Fragment>
  );
} 

export default InfoTabInternationalDialog;