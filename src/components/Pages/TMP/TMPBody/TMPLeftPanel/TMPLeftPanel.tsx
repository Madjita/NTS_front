import { height } from '@mui/system';
import React from 'react';
import './TMPLeftPanel.css'

import label from "../../../../../img/Ico.svg"

import EastIcon from '@mui/icons-material/East';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

type Props = {
    className?: string,
    handlerChangeLeftPanel?: {
        value : number,
        action: ()=> void
    }
}

 
const TMPLeftPanel:  React.FC<Props> = ({
    handlerChangeLeftPanel}) => {

    const[select,setSelect] = React.useState(0);

    return(
        <div style={{background: '#333333'}}>
                <div id={select === 0? 'select':'' } 
                     className='leftPanel center' 
                     onClick={e=>{setSelect(0)}}
                >
                    <img
                        style={select != 0 ? {filter:'invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(1%)'}:{}}
                        src={label}
                        alt='NTS'
                        loading="lazy"
                    />
                </div>
                <div id={select === 1? 'select':'' } className='leftPanel center' onClick={e=>{setSelect(1)}}>
                    <img
                        style={select != 1 ? {filter:'invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(1%)'}:{}}
                        src={label}
                        alt='NTS'
                        loading="lazy"
                    />
                </div>
                <div id={select === 2? 'select':'' } className='leftPanel center' onClick={e=>{setSelect(2)}}>
                    <img
                        style={select != 2 ? {filter:'invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(1%)'}:{}}
                        src={label}
                        alt='NTS'
                        loading="lazy"
                    />
                </div>
                <div className='center' style={{
                    position: 'absolute',
                    marginLeft: '12px',
                    bottom: '10px',
                    color: '#d0d1d4'
                }}>
                    {handlerChangeLeftPanel?.value ? <EastIcon/> :  <KeyboardBackspaceIcon/>}
                </div>
        </div>
    )
}

export default TMPLeftPanel;