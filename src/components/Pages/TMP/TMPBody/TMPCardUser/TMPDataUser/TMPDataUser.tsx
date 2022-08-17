import React from 'react';
import MainInfo from './MainInfo/MainInfo';
import './TMPDataUser.css'


type Props = {
    className?: string,
}



 
const TMPDataUser:  React.FC<Props> = () => {



    return(
        <div className='TMPDataUser'>
            <div className='container'>
                <MainInfo/>
            </div>
        </div>
    )
}

export default TMPDataUser;