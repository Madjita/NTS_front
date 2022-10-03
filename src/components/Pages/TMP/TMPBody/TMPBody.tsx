import { height } from '@mui/system';
import React from 'react';
import TMPCardUser from './TMPCardUser/TMPCardUser';
import TMPCardUser_v2 from './TMPCardUser_v2/TMPCardUser_v2';
import './TMPBody.css'

import TMPLeftPanel from './TMPLeftPanel/TMPLeftPanel';


type Props = {
    className?: string,
}

 
const TMPBody:  React.FC<Props> = () => {

const [leftPanelWidth,setLeftPanelWidth] = React.useState(50);

const handlerChangeLeftPanel = () => {
    switch(leftPanelWidth)
    {
        case 50:
            setLeftPanelWidth(150);
            break;
        default:
            if(leftPanelWidth!= 50)
                setLeftPanelWidth(50);
            break;
    }
}
    return(
        <div style={{background: '#d0d1d4', height:'calc(100vh - 60px)',display: 'grid',gridTemplateColumns: leftPanelWidth+'px 1fr'}}>
            <TMPLeftPanel handlerChangeLeftPanel={{
                value: leftPanelWidth,
                action: handlerChangeLeftPanel
            }}/>
            <TMPCardUser_v2/>
        </div>
    )
}

export default TMPBody;