import React from 'react';
import TMPCardUser from './TMPCardUser/TMPCardUser';
import TMPCardUser_v2 from './TMPCardUser_v2/TMPCardUser_v2';


type Props = {
    className?: string,
}



 
const TMPBody:  React.FC<Props> = () => {



    return(
        <div style={{background: '#d0d1d4', height:'calc(100vh - 60px)'}}>
            <TMPCardUser_v2/>
        </div>
    )
}

export default TMPBody;