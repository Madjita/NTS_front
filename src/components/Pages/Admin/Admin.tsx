import React, { Fragment, useEffect, useState } from 'react';
import './Admin.css'

//
import PacmanLoader from "react-spinners/PacmanLoader";
import {override} from '../Loading/loadingData'
//

import {registerUser,loginUser} from '../../../api/api'

import Icon from '@mui/material/Icon';
import SettingsIcon from '@mui/icons-material/Settings';

import { ICompany, IUser } from '../../IDataInterface/IDataInterface';
import {UserDataPrepare,CompanyDataPrepare } from './dataTable'

import Widget from '../../components/Widget/Widget';
import Table2 from '../../components/Table2/Table2';
import { ITableData } from '../../components/Table/TableInterface/TableInterface';
import Dialog from '../../components/Dialog/Dialog';
import Select from '../../components/Select/Select';

import HeaderForCompany from '../../components/Widget/DifferentHeaders/HeaderForComany'
import Header from '../../header/header';
import GetConnectionString from '../../../settings/settings';
import UsersComponents from '../../components/UsersComponents/UsersComponents';
import UserWidgetComponents from '../../components/UsersComponents/UserWidgetComponents';
import CompanyWidgetComponents from '../../components/CompanyComponents/CompanyWidgetComponents';
import ProjectWidgetComponents from '../../components/ProjectComponents/ProjectWidgetComponents';
import SelectTest from './SelectTest';
import ProjectUserWidgetComponents from '../../components/Widget/ProjectUserComponents/ProjectUserWidgetComponents';
import { Grid } from '@mui/material';
import Content from '../../components/Content/Content';

type Props = {
    className?: string,
    role?: string
}
  



 
const Admin:  React.FC<Props> = ({role}) => {

    const [loading, setLoadding] = useState<boolean>()
    let [color, setColor] = useState("black");

    const [Users, setUsers] = useState<Array<IUser>>([]);
    const [Companys, setCompanys] = useState<Array<ICompany>>([]);

    let sessionToken =  JSON.parse(localStorage.getItem('session') as string) 
    let sessionRole =  localStorage.getItem('role') as string

    async function getAllUsers() {

        return fetch(GetConnectionString()+'/Authorize/users',
        {
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionToken
                     },
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(data => data.json())
        .catch(() => console.log('some error'));
    }

    async function getAllCompanys() {

        return fetch(GetConnectionString()+'/Authorize/companys',
        {
            method: 'GET',
            headers: {
                        'Content-Type': 'application/json',
                        'Authorization': sessionToken
                     },
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(data => data.json())
        .catch(() => console.log('some error'));
    }


    async function addCompany(company: string) {

        const formData  = new FormData();
        formData.append('Name', company);

        return fetch(GetConnectionString()+'/Authorize/companys',
        {
            method: 'POST',
            headers: {
                        /*'Content-Type': 'application/json',*/
                        'Authorization': sessionToken
                     },
            body: formData
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(data => data.json())
        .catch(() => console.log('some error'));
    }


    async function removeCompany(company: string) {

        const formData  = new FormData();
        formData.append('Name', company);

        return fetch(GetConnectionString()+'/Authorize/companys',
        {
            method: 'DELETE',
            headers: {
                        /*'Content-Type': 'application/json',*/
                        'Authorization': sessionToken
                     },
            body: formData
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(data => data.json())
        .catch(() => console.log('some error'));
    }

    async function removeUser(user: string) {

        const formData  = new FormData();
        formData.append('Email', user);

        return fetch(GetConnectionString()+'/Authorize/users',
        {
            method: 'DELETE',
            headers: {
                        /*'Content-Type': 'application/json',*/
                        'Authorization': sessionToken
                     },
            body: formData
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(data => data.json())
        .catch(() => console.log('some error'));
    }

    useEffect(()=>{

        setLoadding(true);
        setTimeout(() => {
            setLoadding(false);
        },1000)

        const fetchData = async () => {
            let companys = await getAllCompanys()
            let users = await getAllUsers()

            setCompanys(companys)
            setUsers(users)
            
        }

        fetchData()
    },[])

  

   const [newCompany,setNewCompany] = useState<string>("");
   const handleAddCompany = async () => {
     setDialogAddCompanyIsOpen(false)
     if(newCompany != "")
     {
         let responce = await addCompany(newCompany);
         let companys = await getAllCompanys()
         setCompanys(companys)
     }   
   }

   const handleRemoveCompany = async (index: number) =>
   {    
        let company = Companys.find((company,companyIndex) => companyIndex === index)
        if(company!= null)
            removeCompany(company?.name)

        setCompanys(Companys.filter((company,companyIndex) => companyIndex !== index))
   }
 
    const [dialogAddCompanyIsOpen, setDialogAddCompanyIsOpen] = useState<boolean>();
    const [companyTableEventually, setCompanyTableEventually] = useState<boolean>(false);


    const [newUser,setNewUser] = useState<IUser>();
    const [dialogAddUsersIsOpen, setDialogAddUsersIsOpen] = useState<boolean>();


    const handleRemoveUser = async (index: number) =>
    {    
         let user = Users.find((company,userIndex) => userIndex === index)
         if(user!= null)
            removeUser(user?.email)
 
         setUsers(Users.filter((user,userIndex) => userIndex !== index))
    }


    ///Код для почасовок по пользователю
    const [Hours, setHours] = useState<Array<IUser>>([]);

    async function getHoursSecltUser(selectUser: IUser) {

        const formData  = new FormData();
        formData.append('Email', selectUser.email);

        return fetch(GetConnectionString()+'/Authorize/getHours',
        {
            method: 'POST',
            headers: {
                        'Authorization': sessionToken
                     },
            body: formData
        })
        .then(res => res.ok ? res : Promise.reject(res))
        .then(data => data.json())
        .catch(() => console.log('some error'));
    }

    console.log("Admin")
    return(

            loading ? 
            <div className='MainDiv'>
                <div style={{marginLeft: '-250px'}}>
                    <PacmanLoader color={color} loading={loading}  cssOverride={override as React.CSSProperties} size={50} />
                </div>
            </div>
            :



            <Grid container spacing={2}>
                 <Grid item xs={5}>
                    <Content child={<CompanyWidgetComponents/>}/>
                </Grid>
                <Grid item xs={7}>
                    <Content child={<UserWidgetComponents/>}/>
                </Grid>
                <Grid item xs={12}>
                    <Content child={<ProjectWidgetComponents/>}/>
                </Grid>
            </Grid>



            
    )
}

export default Admin;


/*


            <div className='adminGrid'>
                <UserWidgetComponents/>
                <CompanyWidgetComponents/>
                <ProjectWidgetComponents/>
                <ProjectUserWidgetComponents/>
            </div>

                <Widget
                className='users'
                header={
                   <HeaderForCompany 
                    dialogAddCompanyIsOpen={dialogAddCompanyIsOpen} 
                    companyTableEventually={companyTableEventually}
                    setDialogAddCompanyIsOpen={setDialogAddCompanyIsOpen}
                    setCompanyTableEventually={setCompanyTableEventually}/>
                }
                children={
                <React.Fragment>
                       <Table2 data={CompanyDataPrepare(Companys,handleRemoveCompany,companyTableEventually, setCompanyTableEventually)}/>
                       <Dialog isOpen={dialogAddCompanyIsOpen} onClose={() => { setNewCompany(""); setDialogAddCompanyIsOpen(false) } }>
                           <div>
                            <p>Добавить компанию</p>
                            <input type='text' onChange={(e) => setNewCompany(e.target.value as string)}></input>
                            <button onClick={handleAddCompany}>Добавить</button>
                           </div>
                        </Dialog>
                </React.Fragment>

                }
                />

                <Widget
                className='users'
                header={
                    <div className='toolbar'>
                    <h3>Список пользователей</h3>
                    <div className='settings'>
                            <SettingsIcon style={{color: userTableEventually2 ? 'green': ''}}  onClick={() => setCompanyTableEventually2(!userTableEventually2)} />
                    </div>
                </div>
                }

                children={
                    <React.Fragment>
                            <Table2 data={UserDataPrepare(Users,handleRemoveUser,userTableEventually2, setCompanyTableEventually2)}/>
                    </React.Fragment>
                }
                />


                <Widget
                className='time'
                header={
                    <div className='toolbar'>
                    <h3>Почасовки</h3>
                    <div className='settings'>
                        <Select data={Users} getData={getHoursSecltUser}/>
                    </div>
                    <div className='settings'>
                            <SettingsIcon style={{color: userTableEventually2 ? 'green': ''}}  onClick={() => setCompanyTableEventually2(!userTableEventually2)} />
                    </div>
                </div>
                }

                children={
                    <React.Fragment>
                            <Table2 data={UserDataPrepare(Users,handleRemoveUser,userTableEventually2, setCompanyTableEventually2)}/>
                    </React.Fragment>
                }
                />

*/