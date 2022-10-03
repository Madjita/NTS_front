import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Empty.css'

type Props = {
    className?: string,
    child?: any
}
  
interface ITest{

    firstName: string,
    secondName: string
}
 
const Empty:  React.FC<Props> = (props) => {

    const [test, setTest] = useState<ITest>({firstName: "t1",secondName: "t2"});

    useEffect(()=>{

    },[test.firstName])


    return(
        <div>

        </div>
    )
}

export default Empty;


