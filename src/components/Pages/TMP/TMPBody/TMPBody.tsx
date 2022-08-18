import { height } from '@mui/system';
import React from 'react';
import TMPCardUser from './TMPCardUser/TMPCardUser';
import TMPCardUser_v2 from './TMPCardUser_v2/TMPCardUser_v2';
import './TMPBody.css'

import label from "../../../../img/Ico.svg"
import TMPLeftPanel from './TMPLeftPanel/TMPLeftPanel';

type Props = {
    className?: string,
}



 
const TMPBody:  React.FC<Props> = () => {

    const[select,setSelect] = React.useState(0);

    return(
        <div style={{background: '#d0d1d4', height:'calc(100vh - 60px)',display: 'grid',gridTemplateColumns: '60px 1fr'}}>
            <TMPLeftPanel/>
            <TMPCardUser_v2/>
        </div>
    )
}

export default TMPBody;