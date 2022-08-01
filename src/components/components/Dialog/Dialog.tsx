import React, { Component } from 'react';
import './Dialog.css'


let dialogCloseButtonStyles = {
    marginBottom: '15px',
    padding: '3px 8px',
    cursor: 'pointer',
    borderRadius: '50%',
    border: 'none',
    width: '30px',
    height: '30px',
    fontWeight: 'bold',
    alignSelf: 'flex-end'
};


type Props = {
    className?: string,
    children: any,
    isOpen: any,
    onClose: any,
}
  

 
const Dialog:  React.FC<Props> = ({children,isOpen,onClose}) => {
  
    let dialog = (
        <div className='dialogStyles'>
            <button style={dialogCloseButtonStyles} onClick={onClose}>x</button>

            <div>{children}</div>
        </div>
    );


    return(
        isOpen ? 
            <div>
                {dialog}
            </div>
            :
            null
           
    )
}

export default Dialog;

