import React, { useEffect, useState } from 'react';
import { IUser } from '../../IDataInterface/IDataInterface';
import { UserDataPrepare } from '../../Pages/Admin/dataTable';
import Table2 from '../Table2/Table2';
import './UsersComponentsTable.css'

type Props = {
    className?: string,
    child?: any,
    users: IUser[],
    handleRemoveUser: any,
    userTableEventually: any,
    setUsersTableEventually: any
}
  

 
const UsersComponentsTable:  React.FC<Props> = ({users,handleRemoveUser,userTableEventually,setUsersTableEventually}) => {

    return(
        <React.Fragment>
            <Table2 data={UserDataPrepare(users,handleRemoveUser,userTableEventually, setUsersTableEventually)}/>
        </React.Fragment>
    )
}

export default UsersComponentsTable;


