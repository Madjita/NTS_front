import React from 'react';
import './Dashboard.css';

import LayoutPanel1 from './LayoutPanel1/layoutPanel1'
import ControlledLayout from './controlledLayout/controlledLayout'

type Props = {
    className?: string
}
  

 
const Dashboard:  React.FC<Props> = (props) => {
    /*const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }*/
    return(
            <div className='Dashboard'>
              <LayoutPanel1/>
              <ControlledLayout/>
            </div>
    )
}

export default Dashboard;