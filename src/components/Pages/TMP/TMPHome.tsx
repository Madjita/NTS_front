import React from 'react';
import TMPBody from './TMPBody/TMPBody';
import TMPHeader from './TMPHeader/TMPHeader';



type Props = {
    className?: string,
}



 
const TMPHome:  React.FC<Props> = () => {



    return(
        <div>
            <TMPHeader/>
            <TMPBody/>
        </div>
    )
}

export default TMPHome;