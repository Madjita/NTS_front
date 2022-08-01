import React from 'react';
import './body.css';

import Dashboard from './Dashboard/Dashboard'

type Props = {
    className?: string
    child?: any
}
  

 
const Body:  React.FC<Props> = ({child}) => {
    /*const handleClick=() =>{
        history.push('/')
        isLogged(false)
    }*/
    return(
            <div className='myBody'>
              {child}
            </div>
    )
}

export default Body;