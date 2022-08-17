import {useState} from 'react'
import * as React from 'react'
import {Route, Routes } from 'react-router-dom'

import './App.css';

import {chekRoleForEnginer,chekRoleForEmpty} from './routes'
import Home from './components/Pages/Home/Home'

import PageLogin from './components/Pages/Login/PageLogin'
import NotFound from './components/Pages/Error/NotFound'
import Admin from './components/Pages/Admin/Admin';
import Enginer from './components/Pages/Enginer/Enginer';
import PageRegister from './components/Pages/Register/PageRegister';
import Layout from './components/Pages/Layout/Layout';
import { IUser } from './components/IDataInterface/IDataInterface';
import axios from 'axios'
import SelectProject from './components/Pages/SelectProject/SelectProject';
import TMPHome from './components/Pages/TMP/TMPHome';



type PropsTest = {
  className?: string,
  child?: any
}



const Test:  React.FC<PropsTest> = (props) => {

  const [data,setData] = React.useState<any>();
  React.useEffect(()=>{

    const loadingHome = async () => {


      
      //axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
      //axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
      //axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true';
      //axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
      /*'Content-Type': 'application/x-www-form-urlencoded'
       { headers: {
                                                        'Connection': 'keep-alive',
                                                        'Access-Control-Allow-Origin': '*',
                                                        'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
                                                    },
        
                                                  }tamp.pro
      */
      const response = await (await axios.get('https://tamp.pro/',
                                               )
                                                .then(response => console.log(response.data))
                                                .catch(error => {
                                                  console.error('There was an error!', error);
                                              }))

    }

    loadingHome()

  },[])
  return(
      <div>
          <iframe src="https://tamp.pro/" frameBorder="1" width="800px" height="400px"></iframe>
       </div>
  )
}





function App() {


  const [role, setRole] = useState();
  const [userLogin, setUser] = useState<IUser>();
  
  //const navigate = useNavigate();

  let sessionToken =  localStorage.getItem('session') as string
  let sessionRole =  localStorage.getItem('role')
  
  React.useEffect(() => {
    if (!sessionToken) {
      //navigate('/login')
    }
  },[]);


  /*if(!sessionToken) {

    console.log(navigate.name)
    return <PageLogin setRole={setRole} />
  }*/


  let redirectToTampare = () => { 
   // window.location.href = 'http://tamp.pro/'; 
    return <Test/>
     };

  let home = chekRoleForEmpty(sessionRole) ?  <PageLogin setRole={setRole} setUser={setUser} /> : <Layout title="Панель инженера" children={<Enginer/>} />

 
  return (
    <Routes>
      <Route  path="/" element={ home  }/>
     
      <Route  path="/register" element={  <PageRegister setRole={setRole} /> }/>
      <Route  path="/login" element={  <PageLogin setRole={setRole} setUser={setUser} /> }/>
      <Route  path="/engineer" element={
          chekRoleForEnginer(sessionRole) ?
          <NotFound/>
          :
          <Layout title="Панель инженера" children={<Enginer/>} />
      }/>
      <Route  path="/admin" element={

          sessionRole !== "\"admin\"" ?
          <NotFound/>
          :
          <Layout title="Панель администратора" children={<Admin/>}/>
      }/>
      <Route  path="/test" element={  <Home/> }/>
      <Route  path="/SelectProject" element={ 
          <Layout title='Панель проекта' children={<SelectProject/>} />
       }/> 
      <Route  path="/tmp" element={ 
          <TMPHome/>
       }/> 
      <Route  path="*" element={<NotFound/>}/>
    </Routes>
  );
}

export default App;