import React from 'react';
import './TMPCardUser.css'
import TMPDataUser from './TMPDataUser/TMPDataUser';


type Props = {
    className?: string,
}



 
const TMPCardUser:  React.FC<Props> = () => {



    return(
        <div>
            <div className='TMPCardUser'>
                <p>КАРТОЧКА СОТРУДНИКА</p>
            </div>
            <TMPDataUser/>
        </div>
    )
}

export default TMPCardUser;