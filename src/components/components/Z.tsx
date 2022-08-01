import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import H from './H';
import './Z.css'

type Props = {
    className?: string,
    child?: any
}
  
interface ITest{

    firstName: string,
    secondName: string
}
 
const Z:  React.FC<Props> = (props) => {

    const [UserDataSetting, setUserDataSetting] = useState(0);


    const [test, setTest] = useState<ITest>({firstName: "t1",secondName: "t2"});

    useEffect(()=>{


    },[UserDataSetting])
    console.log("Rerender :  ",UserDataSetting)

    return(
        <div className='classNew'>
            {
                        /* <p>Hello</p>*/
            }

        <p>{UserDataSetting}</p>

        <p>{test.firstName}</p>
        <p>{test.secondName}</p>
        <TextField id="standard-basic" label="Standard" variant="standard" 
        
        
       /* onChange={e => setUserDataSetting(e.target.value as any)}*/

       onChange={e => setTest((prevState)=> ({
            ...prevState,
            firstName: e.target.value as any
        }) as ITest)}

        />
        <Button variant="contained" onClick={() => { 

        setUserDataSetting(UserDataSetting+1)

        }}>
            Button</Button>
            
         </div>
    )
}

export default Z;


