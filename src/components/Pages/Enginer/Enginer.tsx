import React, { useEffect, useState } from 'react';
import './Enginer.css'

//
import PacmanLoader from "react-spinners/PacmanLoader";
import {override,colorWidget} from '../Loading/loadingData'

import { useTypedSelector } from '../../../redux/hooks/useTypedSelector';
import {useActions} from '../../../redux/hooks/userActions';
import { GetSesstionToken,GetSessionEmail } from '../../../settings/settings';

//

import { Grid } from '@mui/material';
import Content from '../../components/Content/Content';
import ProjectCardComponent from '../../components/ProjectComponents/ProjectCardComponent';
import TestTable from './TestTable';
import Z from '../../components/Z';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value?: number;
  }

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
         children
        )}
      </div>
    );
  }

type Props = {
    className?: string
    value?: number
}
  
 
const Enginer:  React.FC<Props> = ({value}) => {
   
   // const [loading, setLoadding] = useState<boolean>()
    let [color, setColor] = useState("black");

    const {userLogin, errorLogin, loadingLogin} = useTypedSelector(state => state.userLogin)
    const {findUser,fetchUsers,fetchProject,addProject,removeProject} = useActions()
    
    useEffect(()=>{
        let sessionToken =  GetSesstionToken()
        let sessionEmail =  GetSessionEmail()
        if(sessionToken != null && sessionEmail != null && userLogin === null)
        {
            console.log("findUser")
            findUser(sessionToken,sessionEmail)
            fetchUsers(sessionToken)
            fetchProject(sessionToken)
            
        }
    },[value])




    console.log("Enginer ",userLogin,"Value = ",value,loadingLogin)
    return(

            loadingLogin ? 
            <div className='MainDiv'>
                <div style={{marginLeft: '-250px'}}>
                    <PacmanLoader color={color} loading={loadingLogin}  cssOverride={override as React.CSSProperties} size={50} />
                </div>
            </div>
            :
            <React.Fragment>
                <TabPanel value={value} index={0}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sx={{display:'flex'}}>
                            <div>{userLogin?.secondName +' '+ userLogin?.firstName +' '+ userLogin?.middleName}</div>
                        </Grid>
                    {
                        userLogin?.userProjects.map((item,index)=>{
                            return <Grid item xs={12} key={index}>
                                <Content child={
                                    <React.Fragment>
                                        <ProjectCardComponent projectProps={item} title='Список проектов'/>
                                    </React.Fragment>
                                }/>
                            </Grid>
                        })
                    }
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TestTable addProject={addProject} removeProject={removeProject} fetchProject={fetchProject}/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Почасовки
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Информация
                </TabPanel>
            </React.Fragment>
          
    )
}

export default Enginer;


/*
  let data = new Object as ITableData
    data.headers = []
    data.lines = []

    for (let i = 0; i < 10; i++) {
        data.headers.push("Column "+i);
    }

    for (let i = 0; i < 10; i++) {

        let cells = []

        for (let j = 0; j < 10; j++) {

            cells.push("Row "+i+" Column"+j)
        }

        data.lines.push({cells});
    }

<div>
                <Header/>
                <div className='wrapper'>
                    <div className='enginer'>
                        <div className='grid-widgets'>
                            <Widget
                            
                            header={

                                <div>
                                    <h2>Все проекты</h2>
                                </div>
                            }

                            children={
                                <div>
                                     <Table2 data={data}/>
                                </div>
                            }/>
                            <Widget 

                            header={

                                <div>
                                    <h2>Информация о пользователе</h2>
                                </div>
                            }
                            
                            
                            
                            children={

                                <div>
                                    <p>Информация о пользователе</p>
                                </div>
                            }/>
                        </div>
                    </div>
                </div>
            </div>

*/