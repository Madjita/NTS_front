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
        action: (value: React.SetStateAction<number>) => void
    }
}

 
const TMPLeftPanel:  React.FC<Props> = ({
    handlerChangeLeftPanel}) => {

    const[select,setSelect] = React.useState(0);
    const[marginLeft_value,setMarginLeft_value] = React.useState(12);


    let showText = handlerChangeLeftPanel!.value > 50 ? true : false;
    return(
        <div style={{background: '#333333'}}>
                <div id={select === 0? 'select':'' } 
                     className={showText ? 'leftPanel centerSpaceAround':'leftPanel center'}  
                     onClick={e=>{setSelect(0)}}
                >
                    <img
                        style={select != 0 ? {filter:'invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(1%)'}:{}}
                        src={label}
                        alt='NTS'
                        loading="lazy"
                    />

                    { showText ? <text>Тест 1</text> : null}
                </div>
                <div id={select === 1? 'select':'' } 
                className={showText ? 'leftPanel centerSpaceAround':'leftPanel center'}
                onClick={e=>{setSelect(1)}}>
                    <img
                        style={select != 1 ? {filter:'invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(1%)'}:{}}
                        src={label}
                        alt='NTS'
                        loading="lazy"
                    />
                    { showText ? <p>Тест 2</p> : null}
                </div>
                <div id={select === 2? 'select':'' } 
                className={showText ? 'leftPanel centerSpaceAround':'leftPanel center'}
                onClick={e=>{setSelect(2)}}>
                    <img
                        style={select != 2 ? {filter:'invert(100%) sepia(100%) saturate(100%) hue-rotate(86deg) brightness(118%) contrast(1%)'}:{}}
                        src={label}
                        alt='NTS'
                        loading="lazy"
                    />
                    { showText ? <text>Тест 3</text> : null}
                </div>
                <div style={{
                    position: 'absolute',
                    marginLeft: marginLeft_value+'px',
                    bottom: '10px',
                    color: '#d0d1d4'
                }}>
                    {
                        handlerChangeLeftPanel?.value == 50 ? 
                            <EastIcon onClick={()=>{
                                handlerChangeLeftPanel!.action(50);
                                setMarginLeft_value(59);
                            }}/> 
                        :  
                            <EastIcon style={{transform: 'rotate(180deg)'}} onClick={()=>{
                                handlerChangeLeftPanel!.action(0);
                                setMarginLeft_value(12);
                            }}/>}
                </div>
        </div>
    )
}

export default TMPLeftPanel;