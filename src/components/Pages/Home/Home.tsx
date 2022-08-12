import React, { useEffect, useState } from 'react';
import './Home.css'

//
import PacmanLoader from "react-spinners/PacmanLoader";
//


import Header from '../../header/header'
import Body from '../../body/body'
import Dashboard from '../../body/Dashboard/Dashboard';

import {override,colorWidget} from '../../Pages/Loading/loadingData'

type Props = {
    className?: string
}


 
const Home:  React.FC<Props> = (props) => {
   
    const [loading, setLoadding] = useState<boolean>()
    let [color, setColor] = useState("white");

    useEffect(()=>{
        setLoadding(true);
        setTimeout(() => {
            setLoadding(false);

        },1000)
    },[])

    return(

            loading ? 
            <div className='MainDiv'>
                <div style={{marginLeft: '-250px'}}>
                    <PacmanLoader color={color} loading={loading}  cssOverride={override} size={50} />
                </div>
            </div>
            :
            <div>
                <Header/>
                <Body child={<Dashboard/>}/>
            </div>
        
       
    )
}

export default Home;
