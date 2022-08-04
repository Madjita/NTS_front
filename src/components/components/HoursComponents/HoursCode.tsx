import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ICompany, IWeek,IDocHour } from '../../IDataInterface/IDataInterface';
import {WeekInit} from './currentWeek'

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import frLocale from 'date-fns/locale/fr';
import ruLocale from 'date-fns/locale/ru';
import deLocale from 'date-fns/locale/de';
import enLocale from 'date-fns/locale/en-US';
import arSaLocale from 'date-fns/locale/ar-SA';
import { MenuItem } from '@mui/material';

const localeMap = {
  en: enLocale,
  fr: frLocale,
  de: deLocale,
  ru: ruLocale,
  ar: arSaLocale,
};



type Props = {
    className?: string,
    child?: any
    
    sumHours: any,
    setNewWeek: any,
    newWeek: IWeek,
}

const HoursCode:  React.FC<Props> = ({setNewWeek,newWeek,sumHours}) =>
{
 
  return (
    <React.Fragment>
        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.moHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.moHour!.activityCode! = e.target.value;
                setNewWeek({...newWeek})
              }}
              >
                <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Понедельник"
              type="name"
              fullWidth
              variant="standard"
              value={newWeek.moHour!.workingTime!}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{

                sumHours(newWeek,e,1);
                newWeek.moHour!.workingTime! = e.target.value;
                setNewWeek({...newWeek})
              }}
              />
            </div>
          </div>


        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.tuHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.tuHour!.activityCode! = e.target.value;
                setNewWeek({...newWeek})
              }}
              >
                 <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Вторник"
                type="name"
                fullWidth
                variant="standard"
                value={newWeek.tuHour!.workingTime!}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                sumHours(newWeek,e,2);
                newWeek.tuHour!.workingTime! = e.target.value;
                setNewWeek({...newWeek})
                }}
                />
            </div>
          </div>
         
        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.weHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.weHour!.activityCode! = e.target.value;
                setNewWeek({...newWeek})
              }}
              >
                <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Среда"
                type="name"
                fullWidth
                variant="standard"
                value={newWeek.weHour!.workingTime!}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                sumHours(newWeek,e,3);

                newWeek.weHour!.workingTime! = e.target.value;
                setNewWeek({...newWeek})
                }}
                />
            </div>
        </div>

        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.thHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.thHour!.activityCode! = e.target.value;
                setNewWeek({...newWeek})
              }}
              >
                 <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Четверг"
                type="name"
                fullWidth
                variant="standard"
                value={newWeek.thHour!.workingTime!}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                sumHours(newWeek,e,4);

                    newWeek.thHour!.workingTime! = e.target.value;
                    setNewWeek({...newWeek})
                }}
                />
            </div>
        </div>


        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.frHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.frHour!.activityCode! = e.target.value;
                setNewWeek({...newWeek,status: e.target.value})
              }}
              >
                <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Пятница"
                type="name"
                fullWidth
                variant="standard"
                value={newWeek.frHour!.workingTime!}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                sumHours(newWeek,e,5);
                newWeek.frHour!.workingTime! = e.target.value;
                setNewWeek({...newWeek})
                }}
                />
            </div>
        </div> 
          
          
        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.saHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.saHour!.activityCode! = e.target.value;

                setNewWeek({...newWeek})
              }}
              >
                <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Суббота"
                type="name"
                fullWidth
                variant="standard"
                value={newWeek.saHour!.workingTime!}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                sumHours(newWeek,e,6);
                newWeek.saHour!.workingTime! = e.target.value;
                setNewWeek({...newWeek})
                }}
                />
            </div>
        </div> 
        
        <div style={{display:'flex'}}>
            <div style={{flex: '1'}}>
              <TextField
              autoFocus
              select
              fullWidth
              margin="dense"
              id="select"
              label="Код"
              type="select"
              variant="standard"
              value={newWeek.suHour?.activityCode}
              inputProps={{ style: { textAlign: 'center' }}} 
              onChange={e =>{
                newWeek.suHour!.activityCode! = e.target.value;
                setNewWeek({...newWeek})
              }}
              >
                <MenuItem value={'None'}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'AACD'}>AACD</MenuItem>
                <MenuItem value={'AACF'}>AACF</MenuItem>
                <MenuItem value={'AACE'}>AACE</MenuItem>
                <MenuItem value={'AADE'}>AADE</MenuItem>
              </TextField>
            </div>
            <div style={{flex: '1', marginLeft:'20px'}}>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Воскресенье"
                type="name"
                fullWidth
                variant="standard"
                value={newWeek.suHour!.workingTime!}
                inputProps={{ style: { textAlign: 'center' }}} 
                onChange={e =>{

                sumHours(newWeek,e,7);
                newWeek.suHour!.workingTime! = e.target.value;
                setNewWeek({...newWeek})
                }}
                />
            </div>
        </div> 
           
    </React.Fragment>
  );
}


export default HoursCode;